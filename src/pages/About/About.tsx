import { Container, IconButton, Button, Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import { aboutData } from "data/about";

export const About = (): ReactElement => {
  const handleDownloadClick = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "Resume.pdf";
        link.click();
      });
    });
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
      {aboutData.paragraphs.map((paragraph) => (
        <Box
          sx={{
            paddingBottom: "1rem",
          }}
        >
          <Typography variant="h6">{paragraph}</Typography>
        </Box>
      ))}
      <Box
        sx={{
          paddingBottom: "1rem",
        }}
      >
        <Button variant="outlined" onClick={handleDownloadClick}>
          Download Resume
        </Button>
      </Box>
    </Container>
  );
};
