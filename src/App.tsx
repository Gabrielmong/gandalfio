import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact } from "pages";
import { Topbar, Footer } from "components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
  const [navAnchor, setNavAnchor] = useState<null | HTMLElement>(null);
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("dark");

  const handleNavAnchor = (event: React.MouseEvent<HTMLElement>) => {
    setNavAnchor(navAnchor ? null : event.currentTarget);
  };

  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", currentTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setCurrentTheme(theme as "dark" | "light");
    }
  }, []);
  

  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: currentTheme === "dark" ? "primary" : "secondary",
            "&::-webkit-scrollbar": {
              width: "0.5rem",
              height: "0.5rem",
            },
            "&::-webkit-scrollbar-track": {
              background: currentTheme === "dark" ? "#323232" : "#0f1c2b",
            },
            "&::-webkit-scrollbar-thumb": {
              background: currentTheme === "dark" ? "#474747" : "#314463",
              '&:hover': {
                background: currentTheme === "dark" ? "#666666" : "#345282",
              },
            },
          },
        },
      },
    },
    palette: {
      mode: currentTheme,
      primary:
        currentTheme === "dark"
          ? {
              main: "#dddddd",
            }
          : {
              main: "#0f1c2b",
            },
      secondary:
        currentTheme === "dark"
          ? {
              main: "#474747",
            }
          : {
              main: "#3ea6ff",
            },
      background:
        currentTheme === "dark"
          ? {
              default: "#121212",
              paper: "#1e1e1e",
            }
          : {
              default: "##ededed",
              paper: "#fff",
            },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Topbar
          navAnchor={navAnchor}
          handleNavAnchor={handleNavAnchor}
          onDismiss={() => setNavAnchor(null)}
          currentTheme={currentTheme}
          themeSwich={handleThemeChange}
          title="Gandalfio"
          navItems={[
            { label: "Home", path: "/gandalfio/" },
            { label: "About", path: "/gandalfio/about" },
            { label: "Contact", path: "/gandalfio/contact" },
          ]}
        />
        <Routes>
          <Route path="/gandalfio/">
            <Route path="/gandalfio/" element={<Home />} />
            <Route path="/gandalfio/about" element={<About />} />
            <Route path="/gandalfio/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
