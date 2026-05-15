import Highlight, { defaultProps } from "prism-react-renderer";
import prismTheme from "prism-react-renderer/themes/nightOwl";
import { useTheme } from '@mui/material/styles';

export const CodeRenderer = ({language, children} : {language: any, children: string}) => {
  const theme = useTheme();
  // Remove beginning and end new line, helps to pass in code like this though
  const trimmed = children.replace(/^(\s)+|(\s)+$/g, "");

  return (
    <Highlight {...defaultProps} theme={prismTheme} code={trimmed} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={{ ...style, textAlign: "left", padding: theme.spacing(1), overflow: 'auto', borderRadius: 4 }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })} style={{ display: "table-row" }}>
              <span style={{ display: 'table-cell', textAlign: 'right', paddingRight: theme.spacing(1), userSelect: 'none', opacity: 0.5 }}>
                {i + 1}
              </span>
              <span style={{ display: "table-cell" }}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}