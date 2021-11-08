/* 1 - Criar uma função que retorne a quantidade de vogais da palavra passada. 
        a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função. */

const vowelsCount = (text: string): number => {
    let totalVowels: number = 0;
    const vowels: string = 'aeiou';

    for (let char of text) {
        if(vowels.includes(char.toLowerCase())) {
            totalVowels++;
        }
    }
    
    return totalVowels;
}

console.log(vowelsCount('Helpper Origins'));