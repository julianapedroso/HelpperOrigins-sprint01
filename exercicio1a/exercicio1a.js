/* 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
        a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função. */
var vowelsCount = function (text) {
    var totalVowels = 0;
    var vowels = 'aeiou';
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var char = text_1[_i];
        if (vowels.includes(char.toLowerCase())) {
            totalVowels++;
        }
    }
    return totalVowels;
};
console.log(vowelsCount('Helpper Origins'));
