import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import makeStyles from '@mui/styles/makeStyles';

export const CodeRenderer = ({language, children} : {language: any, children: string}) => {
  const classes = useStyles();
  // Remove beginning and end new line, helps to pass in code like this though
  const trimmed=children.replace(/^(\s)+|(\s)+$/g,"");
  return (
    <Highlight {...defaultProps} theme={theme} code={trimmed} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className={classes.pre} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })} className={classes.line}>
              <span className={classes.lineNo}>{i + 1}</span>
              <span className={classes.lineContent}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
  </Highlight>
  )
}

const useStyles = makeStyles(theme => ({
  pre: {
    textAlign: "left",
    padding: theme.spacing(1),
    overflow: 'auto',
    borderRadius: 4,
  },
  lineNo: {
    display: 'table-cell',
    textAlign: 'right',
    paddingRight: theme.spacing(1),
    userSelect: 'none',
    opacity: 0.5,
  },
  line: {
    display: "table-row",
  },
  lineContent: {
    display: "table-cell",
  }
}))