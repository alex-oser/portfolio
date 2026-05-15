import { Chip, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export const ProjectStatus = ({ status }: { status: string }) => {
  const theme = useTheme() as any;
  const formattedStatus = status.replace(/\s/g, "").toLowerCase();

  return (
    <Chip
      label={<Typography variant="subtitle2" style={{ fontWeight: 700 }}>{status}</Typography>}
      size="small"
      sx={{
        ml: 1,
        alignSelf: "center",
        backgroundColor: theme.status?.[formattedStatus],
      }}
    />
  );
};
