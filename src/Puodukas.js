class Puodukas {
    constructor() {
        this.spalva = "baltas";
        this.turis = 150;
        this.kiekis = 0;
    }
}

// Kai nebuvo standartinio import/export, buvo naudojamas specialus kintamasis module.export
// Eksportuojamas puodukas
console.log(module);
module.exports = { // priskiriamas naujas objektas su savybe puodukas ir su reiksme is kintamojo Puodukas
    Puodukas
};

console.log(module);
// module yra specialus kintamasis, kuri node.js sukuria pats ir viena is savybiu yra export

// module.exports = {
//     servizas: Puodukas
// };
// console.log("Is Puodukas.js", module.exports);