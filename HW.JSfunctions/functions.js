function calculVenitulTotal(text, nume) {
    let cuvinte = text.split(' ');

    let venituri = cuvinte
        .map(cuvant => parseFloat(cuvant))
        .filter(valoare => !isNaN(valoare));

    let venitTotal = venituri.reduce((acc, val) => acc + val, 0);

    return `Venitul total anual al lui ${nume} este de ${venitTotal} lei.`;
}

let text1 = "Salariul lunar este de 3000 lei și primele anuale sunt de 1500 lei";
let text2 = "Bonusul de performanță anual este de 2500 lei, iar alte venituri sunt de 1000 lei";
let text3 = "Venitul din chirii este de 12000 lei pe an și din investiții este de 5000 lei pe an";

let venitTotalIonut = calculVenitulTotal(`${text1} ${text2} ${text3}`, "Ion");

console.log(venitTotalIonut);