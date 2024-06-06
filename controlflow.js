let capacitateCilindrica = prompt("Introduceți capacitatea cilindrică (cm³):");
capacitateCilindrica = parseInt(capacitateCilindrica);

if (isNaN(capacitateCilindrica) || capacitateCilindrica <= 0) {
    alert("Vă rugăm să introduceți o valoare validă pentru capacitatea cilindrică.");
} else {
    let impozit = 0;

    if (capacitateCilindrica <= 1600) {
        impozit = Math.floor((capacitateCilindrica / 100) * 8);
    } else if (capacitateCilindrica <= 2000) {
        impozit = Math.floor((capacitateCilindrica / 100) * 18);
    } else if (capacitateCilindrica <= 3000) {
        impozit = Math.floor((capacitateCilindrica / 100) * 72);
    } else {
        impozit = Math.floor((capacitateCilindrica / 100) * 144);
    }

    alert(`Impozitul auto pentru capacitatea cilindrică de ${capacitateCilindrica} cm³ este: ${impozit} lei`);
    console.log(`Impozitul auto pentru capacitatea cilindrică de ${capacitateCilindrica} cm³ este: ${impozit} lei`);
}