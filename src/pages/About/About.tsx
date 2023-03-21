import { Container, IconButton, Button, Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import { aboutData } from "data/about";

export const About = (): ReactElement => {
  const handleClick = () => {
    window.open("https://github.com/Gabrielmong", "_blank");
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        paddingTop: "2rem",
      }}
    >
      <Box
        sx={{
          paddingBottom: "2rem",
        }}
      >
        <Typography variant="h2">{aboutData.title}</Typography>
        <Typography variant="h6">{aboutData.description}</Typography>
      </Box>
      {aboutData.paragraphs.map((paragraph, index) => (
        <Box
          sx={{
            paddingBottom: "1rem",
          }}
          key={index}
        >
          <Typography variant="h6">{paragraph}</Typography>
        </Box>
      ))}
      <Box
        sx={{
          paddingBottom: "1rem",
        }}
      >
        <Button variant="outlined" onClick={handleClick}>
          Look at my github profile
        </Button>
      </Box>
    </Container>
  );
};
