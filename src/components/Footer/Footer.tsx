import {
  Container,
  IconButton,
  Button,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { socialMediaData } from "data";

export const Footer = (): ReactElement => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
      }}
    >
      <Typography variant="h6">
        Developed by{" "}
        <Link
          to="https://github.com/Gabrielmong"
          style={{ textDecoration: "none", color: "grey" }}
        >
          Gabriel Monge
        </Link>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1rem",
        }}
      >
        <Grid container spacing={2}>
          {socialMediaData.map((item) => (
            <Grid item key={item.name}>
              <Link to={item.url} target="_blank">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "1.2rem", height: "1.2rem" }}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
