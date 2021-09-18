function Calcular(){
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    let imc = Math.round(peso / (altura * altura));

    let result = ''

    if(altura == '' || peso == ''){
        result = 'Informe a altura e peso corretamente!'
        document.getElementById('result').innerHTML = result;
    }
    else{
        if(imc < 10){
            result = 'Desnutrição Grau V';
        }
        else if(imc >= 10 && imc <= 12.9){
            result = 'Desnutrição Grau IV';
        }
        else if(imc >= 13 && imc <= 15.9){
            result = 'Desnutrição Grau III';
        }
        else if(imc >= 16 && imc <= 16.9 ){
            result = 'Desnutrição Grau II';
        }  
        else if(imc >= 17 && imc <= 18.4){
            result = 'Abaixo do Peso';
        }
        else if(imc >= 18.5 && imc <= 24.9){
            result = 'Peso Ideal';
        }
        else if(imc >= 25 && imc <= 29.9){
            result = 'Pré Obesidade';
        }
        else if(imc >= 30 && imc <= 34.5){
            result = 'Obesidade Grau I';
        }
        else if(imc >= 35 && imc <= 39.9){
            result = 'Obesidade Grau II'
        }
        else{
            result = 'Obesidade Grau III';
        }

        document.getElementById('result').innerHTML = result;
        document.getElementById('value').innerHTML = `IMC = ${imc}.0`;
    }
}

function Apagar(){
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('value').innerHTML = '';
}

