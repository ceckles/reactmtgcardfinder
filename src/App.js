import "./App.css";
import {useState,useEffect} from "react";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import NotFound from './components/pages/Error/NotFound';
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
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
    <div className="mr-1">
    <Space h="xs" />
    <LightAndDarkModeButton />
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/detail/:id' element={<Details />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </Paper>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
