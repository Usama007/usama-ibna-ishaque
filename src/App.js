import "./App.css";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Home from "./pages/home";

let darkTheme = createTheme({
  mode: "dark",
  palette: {
    background: {
      default: "#1f1b1a",
      paper: "#656c6d",
    },
    secondary: {
      main: "#00e5ff",
    },
    primary: {
      main: "#00e5ff",
    },
  },

  typography: {
    allVariants: {
      color: "#fff",
    },

    fontFamily: ["poppins"].join(","),
  },
});

darkTheme.typography.h2 = {
  fontSize: "1.2rem",
  marginBottom: 0,
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
    marginBottom: 0,
  },
  [darkTheme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
    marginBottom: 0,
  },
};

darkTheme.typography.h5 = {
  fontSize: ".9rem",
  color: "#00e5ff",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [darkTheme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container
        maxWidth={false}
        sx={{
          height: "100vh",
          padding: 5,
          display: "flex",
          alignItems: "center",
         
        }}
      >
        <CssBaseline />

        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
