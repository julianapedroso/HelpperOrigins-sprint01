/* b) Dar um exemplo de uso com uma palavra recebida via input no formulário. */

const vowelsCountInput = (word: string) => {

    let totalVowels = 0;
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < vowels.length; i++) {
        if(word.includes(vowels[i])) {
            totalVowels++;
        }
    }

    return totalVowels;
    
}
