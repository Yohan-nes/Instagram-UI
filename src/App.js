import RightBar from "./Components/Rightbar"
import Sidebar from "./Components/Sidebar"
import Feed from "./Components/Feed"
import Navbar from "./Components/Navbar"
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import Add from "./Components/Add";

function App() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>

  );
}

export default App;
