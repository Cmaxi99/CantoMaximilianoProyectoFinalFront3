import { Link } from "react-router-dom";
import ThemeContext from './context/contextTheme'
import { useContext, useEffect, useState } from "react";
export function Card(props){
    
    const {id, name, username} = props;
    const link = `/detail/${id}`;
    const {theme} = useContext(ThemeContext);
    const [button, setButton] = useState('');
    const alt = `Imagen dentista con id: ${id}`;

    useEffect(() => {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const indice = favoritos.findIndex((dentista) => dentista.id === id);
        indice === -1 ? setButton('🤍') : setButton('💚');
    }, [id]);

    const addFav = (event)=> {
        event.preventDefault();
        const agregarDentista = {id: id, name: name, username: username}
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const indice = favoritos.findIndex((dentista) => dentista.id === agregarDentista.id);
        indice === -1 ? favoritos.push(agregarDentista) : favoritos.splice(indice, 1) 
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
        button === '🤍' ? setButton('💚') : setButton('🤍')
    }

    return(
        <>
            <Link to={link} style={{ display: 'contents', textDecoration: 'none', color: 'inherit' }}>
                <div className="card card-general m-5 border-info text-center">
                    <img src="../public/dentista.jpg" className="card-img-top" alt={alt}></img>
                    <div className="card-body">
                        <h5 className="card-title mt-4">{name}</h5>
                        <p className="card-text mt-4">{username}</p>
                        <button onClick={addFav} className="favButton btn btn-outline-danger mt-3">{button}</button>
                    </div>
                </div>
            </Link>
        </> 
    )
}