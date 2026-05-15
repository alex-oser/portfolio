import { Card } from "@mui/material";
import { styled } from '@mui/material/styles';
import clsx from "clsx";

const PREFIX = 'CardLayout';

const classes = {
  root: `${PREFIX}-root`
};

const StyledCard = styled(Card)({
  [`&.${classes.root}`]: {
    width: "100%",
    height: 200,
    cursor: "pointer",
  },
});

export const CardLayout = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {

  return <StyledCard className={clsx(classes.root, className)}>{children}</StyledCard>;
};
