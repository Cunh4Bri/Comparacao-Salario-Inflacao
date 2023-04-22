import entradaDados from 'readline-sync';


let salarioMinimo =
    [
        { salario: 510, ano: 2010 },
        { salario: 545, ano: 2011 },
        { salario: 622, ano: 2012 },
        { salario: 678, ano: 2013 },
        { salario: 724, ano: 2014 },
        { salario: 788, ano: 2015 },
        { salario: 880, ano: 2016 },
        { salario: 937, ano: 2017 },
        { salario: 954, ano: 2018 },
        { salario: 998, ano: 2019 },
        { salario: 1045, ano: 2020 }
    ]


let inflacao =
    [
        { ipca: 5.91, ano: 2010 },
        { ipca: 6.50, ano: 2011 },
        { ipca: 5.84, ano: 2012 },
        { ipca: 5.91, ano: 2013 },
        { ipca: 6.41, ano: 2014 },
        { ipca: 10.67, ano: 2015 },
        { ipca: 6.29, ano: 2016 },
        { ipca: 2.95, ano: 2017 },
        { ipca: 3.75, ano: 2018 },
        { ipca: 4.31, ano: 2019 },
        { ipca: 4.52, ano: 2020 }
    ]


console.log('Escolha uma das alternativas: ')

console.log('1 - Listar os salários minímos de 2010 á 2020')
console.log('2 - Listar o índice IPCA de 2010 á 2020')
console.log('3 - comparação entre o percentual de aumento salaríal e o IPCA \n')

console.log('Digite o numero da sua escolha: ')
let opcao = entradaDados.questionInt();


switch (opcao) {

    case 1:

        for (let salarios of salarioMinimo) {

            let ano = salarios.ano;
            let salario = salarios.salario;
            console.log('Ano: '.padEnd(25, '.') + ano);
            console.log('Salário mínimo: '.padEnd(25, '.') + 'R$ ' + salario.toFixed(2).replace('.', ',') + '\n\n');
        }
        break;

    case 2:
        for (let inflacoes of inflacao) {

            let ano = inflacoes.ano;
            let ipca = inflacoes.ipca;
            console.log('Ano: '.padEnd(25, '.') + ano);
            console.log('Inflação IPCA: '.padEnd(25, '.') + ipca.toFixed(2).replace('.', ',') + '% ' + '\n\n');
        }
        break;

    case 3:


        for (let i = 0; i <= salarioMinimo.length - 1; i++) {

            let ano = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario;
            let percentualCrescimento;
            let ipca = inflacao[i].ipca;

            if (i > 0) {
                let salarioAnterior = salarioMinimo[i - 1].salario;
                let diferenca = salario - salarioAnterior

                percentualCrescimento = ((diferenca / salarioAnterior) * 100).toFixed(2) + '%';

            } else {

                percentualCrescimento = "-";
            }

            console.log('Ano: '.padEnd(25, '.') + ano)
            console.log('Salário mínimo: '.padEnd(25, '.') + 'R$ ' + salario.toFixed(2).replace('.', ','));
            console.log('Crescimento salárial: '.padEnd(25, '.') + percentualCrescimento.replace('.', ','));
            console.log('Inflação IPCA: '.padEnd(25, '.') + ipca.toFixed(2).replace('.', ',') + '% ' + '\n\n');
        }

        break;

    default:
        console.log('Opção invalida')

        break;



}