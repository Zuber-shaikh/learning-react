import { useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light")

  function lightTheme() {
    setThemeMode("light")
  }

  function darkTheme() {
    setThemeMode("dark")
  }

  useEffect(() => {
    const modeQuery = document.querySelector("html").classList
    modeQuery.remove("light", "dark")
    modeQuery.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto"><Card /></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
