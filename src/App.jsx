import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from "./Components/Navbar";
import { useState , useEffect } from "react";
import { ThemeProvider } from "./Context/Theme";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Work from "./Components/Work";

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Homepage /><Footer /></>,
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /><Footer /></>,
    },
    {
      path: "/work",
      element: <><Navbar /><Work /><Footer /></>,
    },
  ]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
