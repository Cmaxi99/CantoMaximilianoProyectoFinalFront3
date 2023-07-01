import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {Home} from "./routes/Home";
import {Favs} from "./routes/Favs";
import {Contact} from "./routes/Contact";
import { Detail } from "./routes/Detail";
import { Routes, Route } from "react-router-dom";
import ThemeContext, { themes } from './components/context/contextTheme';
import { useMemo, useState } from "react";



function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || themes.light);
  
  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
  }

  const providerValue = useMemo(()=>({theme,
  handleChangeTheme}),[theme,handleChangeTheme])
  localStorage.setItem('theme', JSON.stringify(theme))
  return (
    <ThemeContext.Provider value={providerValue}>
      <main style={{ background: theme.background, color: theme.font }}>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/favs" element={<Favs/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/detail/:id" element={<Detail/>}></Route>
            </Routes>
        <Footer/>
      </main>
    </ThemeContext.Provider>  
  )
}

export default App
