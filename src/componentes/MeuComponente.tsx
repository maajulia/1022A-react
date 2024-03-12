// Faça um componente um retangulo eda largura da tela 
// por 200px

//crie uma variavel com LET no js que contenha o valor "Meu Componente"

//crie uma div no componente que dentro dela mostre um <p> 
// contendo o valor da variavel 

export default MeuComponente;
import 'MeuComponente.css'

function MeuComponente(){
    let variavel = "Meu Componente"
    return(
        <div className =" minha-div"><p>{variavel}</p></div>
    )
}