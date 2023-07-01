import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Detail(){
    const {id} = useParams();
    const alt = `Imagen dentista con id: ${id}`;
    const [dentista, setDentista] = useState({});
    async function fetchData() {
        try {
            const dataFetched = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
            const jsonData = await dataFetched.json();
            setDentista(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // Verificar si los datos del dentista aún no se han cargado
    if (Object.keys(dentista).length === 0) {
        return <p>Cargando...</p>;
    }

    return(
        <div className='expansion d-flex justify-content-center align-items-center'>
            <div className="card card-detail">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="../public/dentista.jpg" className="card-img-top" alt={alt}></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text"><span className='fw-bold'>Nombre:</span> {dentista.name}</p>
                            <p className="card-text"><span className='fw-bold'>Email:</span> {dentista.email}</p>
                            <p className="card-text"><span className='fw-bold'>Telefono:</span> {dentista.phone}</p>
                            <p className="card-text"><span className='fw-bold'>Web:</span> {dentista.website}</p>
                            <p className="card-text"><span className='fw-bold'>Empresa:</span> {dentista.company.name}</p>
                            <p className="card-text"><span className='fw-bold'>Eslogan:</span> {dentista.company.catchPhrase}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}