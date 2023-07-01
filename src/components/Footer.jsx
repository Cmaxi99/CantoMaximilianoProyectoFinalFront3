import { useContext } from "react";
import ThemeContext from "./context/contextTheme";

export function Footer(){
    const {theme} = useContext(ThemeContext);
    return(
        <footer className="container-fluid text-center p-3 bg-dark">
            <p className="container-fluid text-light fw-bold">Creado por Maximiliano Canto</p>
        </footer>
    )
}