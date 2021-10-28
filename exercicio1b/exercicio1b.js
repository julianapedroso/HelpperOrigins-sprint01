/* b) Dar um exemplo de uso com uma palavra recebida via input no formulário. */
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
