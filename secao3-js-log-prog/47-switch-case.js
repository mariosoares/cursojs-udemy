function getDiaSemanaTexto (diaSemana){
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'; 
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6: 
    diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = 'Dia inválido';
        break;
}
    return diaSemanaTexto;
}

const data = new Date();
console.log(data);
const diaSem = data.getDay();
console.log(diaSem);
let dia = getDiaSemanaTexto(diaSem);
console.log(`Hoje é ${dia}.`);