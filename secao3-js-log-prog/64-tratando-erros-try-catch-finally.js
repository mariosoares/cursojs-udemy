// Finally

try {
    // É executado quando não há erros
} catch (e) {
    // É executado quando há erros
} finally {
    // É executado sempre
}

// É útil para casos onde precisa ser finalizada alguma tratativa, independente de apresentar erro ou não. Ex:

try {
    console.log('Abrindo meu arquivo');
    console.log('Arquivo apresentou erro');
    console.log(e); // como apresentou erro, vai direto ao catch, pulando o fechamento do arquivo
    console.log('Arquivo fechado');
} catch (erro) {
    console.log('Tratando erro');
} finally {
    console.log('Fechando arquivo'); // sempre vai fechar o arquivo, independente se apresentou erro ou não
    console.log();
}

function retonaHora(data) {
    if (data && !(data instanceof Date)) {
      throw new TypeError('Esperando instância de Date.');
    }
  
    if (!data) {
      data = new Date();
    }
  
    return data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
  
  try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retonaHora();
    console.log(hora);
  } catch(e) {
    // Tratar erro
    // console.log(e);
  } finally {
    console.log('Tenha um bom dia.');
  }