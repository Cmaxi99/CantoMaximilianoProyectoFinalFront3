import { Card } from "../components/Card";

export function Favs(){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    
    return(
        <div className="expansion p-2">
            <h1 className="text-center">Dentistas favoritos</h1>
            <div className="d-flex justify-content-center align-content-around flex-wrap">
                {
                    favoritos.map(dentista => {
                        return <Card key={dentista.id} id={dentista.id} name={dentista.name} username={dentista.username}/>
                    })
                }
            </div>
        </div>
    )
}