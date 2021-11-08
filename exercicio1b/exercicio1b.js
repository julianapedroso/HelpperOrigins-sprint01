/* b) Dar um exemplo de uso com uma palavra recebida via input no formulário. */
var getInputValue = function (event) {
    event.preventDefault();
    var inputText = document.getElementById("input");
    alert("Quantidade de vogais: " + vowelsCountInput(inputText.value));
};
var vowelsCountInput = function (word) {
    var totalVowels = 0;
    var vowels = 'aeiou';
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var char = word_1[_i];
        if (vowels.includes(char.toLowerCase())) {
            totalVowels++;
        }
    }
    return totalVowels;
};
