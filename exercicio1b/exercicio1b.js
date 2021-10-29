/* b) Dar um exemplo de uso com uma palavra recebida via input no formulário. */
var getInputValue = function (event) {
    event.preventDefault();
    var inputText = document.getElementById("input");
    alert("Quantidade de vogais: " + vowelsCountInput(inputText.value));
};
var vowelsCountInput = function (word) {
    var totalVowels = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < vowels.length; i++) {
        if (word.includes(vowels[i])) {
            totalVowels++;
        }
    }
    return totalVowels;
};
