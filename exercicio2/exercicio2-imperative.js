/* 2 - Dado o array: */
var list = [
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
/* IMPERATIVO */
// a) Crie uma função que retorne a bio do id passado
var getBioById = function (id) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var person = list_1[_i];
        if (id === person.id) {
            return person.bio;
        }
    }
};
console.log({ bio: getBioById(4) });
// b) Crie uma função que retorne o name do id passado
var getNameById = function (id) {
    for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
        var person = list_2[_i];
        if (id === person.id) {
            return person.name;
        }
    }
};
console.log({ name: getNameById(2) });
// c) Crie uma função que apague um item da lista a partir de um id passado
var deleteItemById = function (id) {
    for (var i = 0; i < list.length; i++) {
        var person = list[i];
        if (id === person.id) {
            list.splice(i, 1);
        }
    }
};
console.log("old list:", list);
console.log(deleteItemById(2));
console.log("new list:", list);
// d) Crie uma função que altere a bio ou o name a partir de um id passado
var updateItemById = function (id, newName, newBio) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            if (newName) {
                list[i].name = newName;
            }
            if (newBio) {
                list[i].bio = newBio;
            }
        }
    }
};
console.log(updateItemById(3, 'Alterando o name', 'Alterando a bio'));
console.log("updateList:", list);
