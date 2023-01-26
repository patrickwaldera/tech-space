import { createContext, useEffect, useState } from "react"

export const ColorModeContext = createContext({
  mode: '',
  setMode: () => {alert("Você precisa me configurar primeiro!")},
  toggleTheme: () => {alert("Você precisa me configurar primeiro!")}
});

export default function ColorModeProvider({children, initialMode}) {
  const [ mode, setMode ] = useState(initialMode)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setMode(savedTheme);
    }
  }, []);

  function toggleTheme() {
    if(mode === 'dark') {
      setMode('light')
      const newTheme = mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
    }
    if(mode === 'light') {
      setMode('dark')
      const newTheme = mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
    }
  }

  return (
    <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleTheme: toggleTheme}}>
      {children}
    </ColorModeContext.Provider>
  )
}
