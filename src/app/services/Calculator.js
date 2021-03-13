export default class Calculator {
  sum(val1, val2) {
    return Number.parseInt(val1) + Number.parseInt(val2);
  }

  sums(valor) {
    var soma = valor.reduce((somas, el) => {
      return parseInt(somas) + parseInt(el).value;
    });

    console.log(soma);
    return soma;
  }
}
