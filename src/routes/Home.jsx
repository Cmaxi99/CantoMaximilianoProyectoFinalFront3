import { useEffect, useState } from "react";
import {Card} from "../components/Card";

export function Home(){
    const [data, setData] = useState([]);
    async function fetchData(){
        const dataFetched = await fetch('https://jsonplaceholder.typicode.com/users')
        const jsonData = await dataFetched.json()
        setData(jsonData);
    }
    useEffect( () => {fetchData()}, []);
    
    return(
        <div className="expansion">
            <h1 className="text-center p-2">Cartilla de dentistas</h1>
            <div className="d-flex justify-content-center align-content-around flex-wrap">
                {
                    data.map(dentista => {
                        return <Card key={dentista.id} id={dentista.id} name={dentista.name} username={dentista.username} />
                    })
                }
            </div>
        </div>
    )
}