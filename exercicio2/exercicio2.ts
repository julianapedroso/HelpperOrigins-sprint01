/* 2 - Dado o array: */

interface Person {
    id: number,
    name: string,
    bio: string
}

const list: Array<Person> = [ 
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
];

// a) Crie uma função que retorne a bio do id passado

const getBioById = (id:number): string => {
    return list.find(person => person.id === id).bio;
}

console.log({ bio: getBioById(4) });
  
// b) Crie uma função que retorne o name do id passado

const getNameById = (id:number): string => {
    return list.find(person => person.id === id).name;
}

console.log({ name: getNameById(2) });

// c) Crie uma função que apague um item da lista a partir de um id passado

const deleteItemById = (id:number): void => {
    list.splice(list.findIndex(item => item.id === id), 1);
}

console.log("old list:", list);
console.log(deleteItemById(2));
console.log("new list:", list);