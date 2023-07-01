import { useState } from "react";

export function Form(){

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [msjCorrecto, setMsjCorrecto] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        if(nombre.length < 5){
            setError('Por favor verifique su información nuevamente');
        }
        else{
            setError();
            setMsjCorrecto(`Gracias ${nombre}, te contactaremos cuanto antes vía mail`);
        }
    }

    function handleChangeNombre(e){
        setNombre(e.target.value.trim())
    }

    function handleChangeMail(e){
        setEmail(e.target.value)
    }

    function handleReset(){
        setNombre('');
        setEmail('');
        setError('');
        setMsjCorrecto('');
    }

    return(
        <>
            <h1 className="p-2">Desea conocer mas?</h1>
            <h3 className="p-2">Dejanos tus datos y nosotros nos contactaremos</h3>
            <form  className="formulario container p-5" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" value={nombre} onChange={handleChangeNombre} placeholder="Ingrese su nombre" className="form-control" id="nombre"/>
                    <div id="nombreHelp" className="form-text">Debe contener al menos 5 letras</div>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" value={email} onChange={handleChangeMail} placeholder="Ingrese su email" className="form-control" id="email"/>
                </div>
                <button type="reset"  className="btn btn-primary m-2" onClick={handleReset}>Reiniciar</button>
                <button type="submit" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleSubmit}>Enviar</button>

                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-secondary">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Mensaje</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {error ? <p className="text-danger">{error}</p> : <p className="text-success">{msjCorrecto}</p>} 
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>       
            </form>
        </>
    )
}