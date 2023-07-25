
//declaraçao de uma funcao
function calculaTabuada(){

            //obtendo do DAom o tbody da tabela
            let tabuada = document.querySelector('#tabuada tbody');
            let valorA = parseInt(document.querySelector("#valorA").value);
            //obtendo valor A do campo input number e convertendo em inteiro


            //limpando o conteudo do tbody
            tabuada.innerHTML = '';


            //criando um laço de repetiçao de 0 a 10
            for (let valorB = 0; valorB <= 10; valorB++) {

                //calculando o resultado da linha atual
                let resultado = valorA * valorB;

                //criando o tamplete das colunas da linha atual
                let template = `

                
                
                    <td> ${valorA} </td>
                    <td> x </td>
                    <td> ${valorB} </td>
                    <td> = </td>
                    <td> ${resultado} </td>
                
                
                `;
                //criando o elemento tr
                let tr = document.createElement('tr'); 

                //Inserindo as colunas na linha 
                tr.innerHTML = template;

                //Inserindo a linha na tabela 
                tabuada.append(tr);



 }
}
    //chamando a funçao pela primeira vez
   calculaTabuada();

   //Adicionando o evento de alteraçao ao campo numero.
   document.querySelector("#valorA").addEventListener('change',calculaTabuada);

  