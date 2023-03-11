import {
  Container,
  IconButton,
  Button,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { contactData } from "data";

export const Contact = (): ReactElement => {
  const navigation = useNavigate();

  const handleLinkClick = (path: string) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigation(path);
    }
  };

  const handleDownloadClick = (resume: string) => {
    if (resume === "pretty") {
      fetch("PrettyResume.pdf").then((response) => {
        response.blob().then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.download = "PrettyResume.pdf";
          link.click();
        });
      });
    } else {
      fetch("BoringResume.pdf").then((response) => {
        response.blob().then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.download = "BoringResume.pdf";
          link.click();
        });
      });
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          paddingBottom: "2rem",
        }}
      >
        <Typography variant="h2">{contactData.title}</Typography>
        <Typography variant="h6">{contactData.description}</Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {contactData.socialMedia.map((item) => (
          <Box
            key={item.name}
            sx={{
              paddingBottom: "1rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                marginLeft: "1rem",
                marginRight: "1rem",
                textTransform: "none",
                color: "inherit",
                fontSize: "2rem",
              }}
              onClick={() => handleLinkClick(item.url)}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "2rem", height: "2rem", marginRight: "1rem" }}
              />
              {item.name}
            </Button>
          </Box>
        ))}
      </Grid>
      <Box
        sx={{
          paddingBottom: "1rem",
        }}
      >
        <Typography variant="h6">
          If you want to look at my Resume, go ahead
        </Typography>
        <Button
          variant="outlined"
          onClick={() => handleDownloadClick("pretty")}
          sx={{
            marginTop: "1rem",
            color: "inherit",
            marginRight: "1rem",
          }}
        >
          Download Pretty Resume
        </Button>
        <Button
          variant="outlined"
          onClick={() => handleDownloadClick("boring")}
          sx={{
            marginTop: "1rem",
            color: "inherit",
          }}
        >
          Download Boring Resume
        </Button>
      </Box>
    </Container>
  );
};
