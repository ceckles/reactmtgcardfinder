import "./App.css";
import React from "react";
import Home from "./components/Home";
import NotFound from './components/Error/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider, Paper, Space } from "@mantine/core";
import { useHotkeys, useLocalStorageValue } from "@mantine/hooks";
import LightAndDarkModeButton from "./components/LightAndDarkModeButton";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });
  const toggleColorScheme = (value) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{colorScheme}}>
    <Paper padding="md" radius={0} style={{minHeight:"100vh"}}>
    <div class="mr-1">
    <Space h="xs" />
    <LightAndDarkModeButton />
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </Paper>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
