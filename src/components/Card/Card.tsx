import {
  Card as MUICard,
  CardContent,
  CardActions,
} from "@mui/material";
import { Typography, Button } from "@mui/material";
import { ReactElement } from "react";
import { CardProps } from "./Card.model";
import { useNavigate } from "react-router-dom";

export const Card = ({ title, description, link }: CardProps): ReactElement => {
  const navigation = useNavigate();

  const handleLinkClick = (path: string) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigation(path);
    }
  };
  return (
    <MUICard
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h4">{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "flex-end",
        }}
      >
        <Button variant="outlined" onClick={() => handleLinkClick(link)}>
          View
        </Button>
      </CardActions>
    </MUICard>
  );
};
