var listFuncional = [
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
/* FUNCIONAL */
// a) Crie uma função que retorne a bio do id passado
var getBioByIdFuncional = function (id) {
    return listFuncional.find(function (person) { return person.id === id; }).bio;
};
console.log({ bio: getBioByIdFuncional(4) });
// b) Crie uma função que retorne o name do id passado
var getNameByIdFuncional = function (id) {
    return listFuncional.find(function (person) { return person.id === id; }).name;
};
console.log({ name: getNameByIdFuncional(2) });
// c) Crie uma função que apague um item da lista a partir de um id passado
var deleteItemByIdFuncional = function (id) {
    listFuncional.splice(listFuncional.findIndex(function (item) { return item.id === id; }), 1);
};
console.log("old listFuncional:", listFuncional);
console.log(deleteItemByIdFuncional(2));
console.log("new listFuncional:", listFuncional);
// d) Crie uma função que altere a bio ou o name a partir de um id passado
var updateItemByIdFuncional = function (id, name, bio) {
    var objectIndex = listFuncional.findIndex(function (item) { return item["id"] === id; });
    name ? listFuncional[objectIndex]["name"] = name : null;
    bio ? listFuncional[objectIndex]["bio"] = bio : null;
};
console.log(updateItemByIdFuncional(4, "Squad Delta", "Squad Delta é o melhor e mais incrível de todos <3"));
console.log("new listFuncional:", listFuncional);
