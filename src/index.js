const { Puodukas } = require("./Puodukas.js")
// importavimui sukuriamas naujas kintamasis, importuojamas puodukas (jo klase)
// require funkcija perskaito faila ir ji ivykdo


// const { importuojamasFailas } = require("./Puodukas.js")
// const Puodukas = importuojamasFailas.Puodukas
// tas pats kaip uzrasyta virsuje

// const importuojamasFailas = require("./Puodukas.js");
// console.log("Is index.js", importuojamasFailas);
// const Puodukas1 = importuojamasFailas.servizas

// const { servizas: Puodukas } = require("./Puodukas.js")
// Papildomas funkciniolumas, gaunamas objektas su savybe servizas, sukuriamas kintamasis Puodukas, kurio reiksme bus is objekto, kurio savybe servizas
// Dazniausiai { servizas: Puodukas } taip nepervadinejima


console.log(Puodukas);
console.log("Hello world");

let p = new Puodukas();

console.log(p);


let vardas = "Jonas";
let pavarde = "Jonaitis";


// zmogus yra nuoroda i objekta
let zmogus = {
    vardas: vardas,
    pavarde: pavarde,
    gimimoMetai: 1999
};

// trumpesnis uzrasymas
// sukurs savybes pavadinima vardas ir paims jo reiksme is kintamojo vardas
let zmogus1 = {
    vardas,
    pavarde,
    gimimoMetai: 2000,
    pasisveikinimas: function(kalba) {
        // galima rasyti ir be zodzio function, vis tiek sukurs funkcija
        if (kalba === "en") {
            console.log("Hello", this.vardas, this.pavarde);
        }
        else {
           console.log("Labas", this.vardas, this.pavarde); 
        }
    }
};
console.log(zmogus);
console.log(zmogus1);
zmogus1.pasisveikinimas();
zmogus1.pasisveikinimas("en");

// destrukcija
function labas ({vardas, pavarde}) { // sitoje vietoje neina patikrinti su if kaip labasBeLukstu
    console.log("Labinuosi is labas su", vardas, pavarde);
}

labas(zmogus); // paimtos reiksmes is zmogus objekto
labas({}); // undefined nes neranda reiksmiu
// labas(); Cannot destructure property 'vardas' of 'undefined' as it is undefined. 

// toks pats rezultatas kaip su funkcija labas
function labasBeLukstu (zm) { // zm yra kintamasis
   if (zm) {
    let vardas = zm.vardas // zm. ima reiksmes is nurodyto objekto zmogus vardas paima vardo reiksme
    let pavarde = zm.pavarde
    console.log("Labinuosi is labasBeLukstu su", vardas, pavarde);
   } else {
       console.log("Nera su kuo labintis");
   }
}

labasBeLukstu({}); // undefined nes neranda reiksmiu
labasBeLukstu(zmogus1); // paimtos reiksmes is zmogus1 
labasBeLukstu(); // nera reiksmiu is ko imti, tai atspausdina Nera su kuo labintis

// funkcijos labas yra paprastesnis uzrasymas ir trumpesnis nei funkcija labasBeLukstu, o rezultatas gaunamas toks pats

