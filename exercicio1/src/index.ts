/* 1 - Criar uma função que retorne a quantidade de vogais da palavra passada. */

const vowelsCount = (text: string) => {
    let totalVowels = 0;
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < vowels.length; i++) {
        if(text.includes(vowels[i])) {
            totalVowels++;
        }
    }
    return totalVowels;
}

console.log(vowelsCount('Squad Delta'));