import './Planos.css';

function Planos(props){
    return (
        <div className='bg_planos2'>
            <div className='bg_planos'>
                <h2>{props.NomePlano}</h2>
                <h1>{props.Preco}</h1>
            </div>
            <p>{props.children}</p>
        </div>
    );
}

export default Planos;