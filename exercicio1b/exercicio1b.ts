/* b) Dar um exemplo de uso com uma palavra recebida via input no formulário. */

const getInputValue = (event: Event): void => {
    event.preventDefault();

    const inputText: HTMLInputElement = document.getElementById("input") as HTMLInputElement;

    alert("Quantidade de vogais: " + vowelsCountInput(inputText.value));
}

const vowelsCountInput = (word: string): number => {

    let totalVowels: number = 0;
    const vowels: string = '/[^aeiou]/gi';

    for (let i = 0; i < vowels.length; i++) {
        if(vowels.includes(word[i].toLowerCase())) {
            totalVowels++;
        }
    }

    return totalVowels;
}


