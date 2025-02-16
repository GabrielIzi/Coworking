import './Creditos.css'

function Creditos(props){
    return(
        <div className="Creditos">
            <h1>{props.NomeEmp}</h1>
            <div className='Creditos2'>
                <p>Desenvolvido por: Grupo Gizi &copy; 2024.</p>
                <p>Todos os direitos reservados.</p>
            </div>
        </div>
    );
}

export default Creditos;