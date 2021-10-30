/* 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
        a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função. */
var vowelsCount = function (text) {
    var totalVowels = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < vowels.length; i++) {
        if (text.includes(vowels[i])) {
            totalVowels++;
        }
    }
    return totalVowels;
};
console.log(vowelsCount('Helpper Origins'));
