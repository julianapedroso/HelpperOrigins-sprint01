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

type PersonUpdate = {
    name: string;
    bio: string;
}

/* IMPERATIVO */

// a) Crie uma função que retorne a bio do id passado
const getBioById = (id: number): string => {
    for(let person of list) {
        if(id === person.id) {
            return person.bio
        }    
    }
}

console.log({ bio: getBioById(4) });

// b) Crie uma função que retorne o name do id passado
const getNameById = (id: number): string => {
    for(let person of list) {
        if(id === person.id) {
            return person.name
        }    
    }
}

console.log({ name: getNameById(2) });

// c) Crie uma função que apague um item da lista a partir de um id passado
const deleteItemById = (id : number) : void => {
    for(let i = 0; i < list.length; i++) {
        let person = list[i]
        if(id === person.id) {
            list.splice(i, 1)
        }
    }
}

console.log("old list:", list);
console.log(deleteItemById(2));
console.log("new list:", list);
 