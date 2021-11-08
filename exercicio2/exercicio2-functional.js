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
var getBioByIdFuncional = function (id, list) {
    var _a;
    var findBioPerson = list.find(function (person) { return person.id === id; });
    return (_a = findBioPerson === null || findBioPerson === void 0 ? void 0 : findBioPerson.bio) !== null && _a !== void 0 ? _a : 'Id não encontrado';
};
console.log({ bio: getBioByIdFuncional(4, listFuncional) });
// b) Crie uma função que retorne o name do id passado
var getNameByIdFuncional = function (id, list) {
    var _a;
    var findNamePerson = list.find(function (person) { return person.id === id; });
    return (_a = findNamePerson === null || findNamePerson === void 0 ? void 0 : findNamePerson.name) !== null && _a !== void 0 ? _a : 'Id não encontardo';
};
console.log({ name: getNameByIdFuncional(2, listFuncional) });
// c) Crie uma função que apague um item da lista a partir de um id passado
var deleteItemByIdFuncional = function (id, list) {
    var deleteById = list.splice(list.findIndex(function (item) { return item.id === id; }), 1);
    return deleteById;
};
console.log("old listFuncional:", listFuncional);
console.log(deleteItemByIdFuncional(1, listFuncional));
console.log("new listFuncional:", listFuncional);
// d) Crie uma função que altere a bio ou o name a partir de um id passado
var updateItemByIdFuncional = function (id, list, name, bio) {
    var objectIndex = list.findIndex(function (item) { return item.id === id; });
    list[objectIndex]['name'] = name !== null && name !== void 0 ? name : null;
    list[objectIndex]['bio'] = bio !== null && bio !== void 0 ? bio : null;
};
console.log(updateItemByIdFuncional(4, listFuncional, "Mudança no nome", "Squad Delta é o melhor e mais incrível de todos <3"));
console.log("new listFuncional:", listFuncional);
