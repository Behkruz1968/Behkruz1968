// // 1-masala
// function olishIsmlarBahoBoyicha(oquvchilar, baho) {
//     return oquvchilar.filter(o => (
//         (baho === 5 && o.percent >= 85) ||
//         (baho === 4 && o.percent >= 70 && o.percent < 85) ||
//         (baho === 3 && o.percent >= 60 && o.percent < 70)
//     )).map(o => o.name);
// }

// // 2-masala
// function massivTakrorSonlar(massiv) {
//     return massiv.reduce((hisob, qiymat) => {
//         hisob[qiymat] = (hisob[qiymat] || 0) + 1;
//         return hisob;
//     }, {});
// }

// // 3-masala
// function kvadratMassiv(massiv) {
//     return massiv.map(son => son ** 2);
// }

// // 4-masala
// function musbatYigindi(massiv) {
//     return massiv.filter(son => son > 0).reduce((sum, son) => sum + son, 0);
// }

// // 5-masala
// function boshHarfOlish(satr) {
//     return satr.split(' ').map(soz => soz[0]).join('');
// }

// // 6-masala
// function yoshFarq(massiv) {
//     const tartiblangan = massiv.sort((a, b) => a.age - b.age);
//     return tartiblangan[tartiblangan.length - 1].age - tartiblangan[0].age;
// }

// // 7-masala
// function juftVaToqAjratish(massiv) {
//     return {
//         juft: massiv.filter(son => son % 2 === 0),
//         toq: massiv.filter(son => son % 2 !== 0)
//     };
// }

// // 8-masala
// function noyobMassiv(massiv) {
//     return massiv.reduce((natija, qiymat) => {
//         if (!natija.includes(qiymat)) natija.push(qiymat);
//         return natija;
//     }, []);
// }

// // 9-masala
// function sortProducts(products, key) {
//     return [...products].sort((a, b) => a[key] - b[key]);
// }

// // 10-masala
// function engKuchliProduct(products) {
//     return [...products].sort((a, b) => b.rating - a.rating)[0];
// }

// // 11-masala
// function engArzonProduct(products) {
//     return [...products].sort((a, b) => a.price - b.price)[0];
// }

// // 12-masala
// function umumiyNarx(products) {
//     return products.reduce((sum, product) => sum + product.price, 0);
// }

// // 13-masala
// function productNomiMassivi(products) {
//     return products.map(product => product.name);
// }

// // 14-masala
// function idBoyichaNom(products, id) {
//     return products.find(product => product.id === id)?.name;
// }

// // 15-masala
// function idBoyichaOchirish(products, id) {
//     return products.filter(product => product.id !== id);
// }

// // 16-masala
// function faqatHarfTekshir(satr) {
//     return satr.split('').every(char => /[a-zA-Z]/.test(char));
// }

// // 17-masala
// function truthyFalsyAjratish(massiv) {
//     return {
//         truthy: massiv.filter(el => Boolean(el)),
//         falsy: massiv.filter(el => !el)
//     };
// }

// // 18-masala
// function sozUzunligiMassiv(satr) {
//     return satr.split(' ').map(soz => soz.length);
// }

// // 19-masala
// function boshJoyTekshir(satr) {
//     return satr.split('').some(char => char === ' ');
// }

// // 20-masala
// function objectKalitQiymat(obj) {
//     return Object.entries(obj).map(([kalit, qiymat]) => `${kalit}${qiymat}`);
// }

// // 21-masala
// function raqamlarYigindisi(son) {
//     if (son === 0) return 0;
//     return (son % 10) + raqamlarYigindisi(Math.floor(son / 10));
// }

// // 22-masala
// function oquvchilarOrtalama(pupils) {
//     return pupils.reduce((sum, pupil) => sum + pupil.protcent, 0) / pupils.length;
// }

// // 23-masala
// function bahoQoshish(pupils) {
//     return pupils.map(pupil => ({
//         ...pupil,
//         grade: pupil.protcent >= 90 ? 5 : pupil.protcent >= 80 ? 4 : pupil.protcent >= 70 ? 3 : 2
//     }));
// }

// // 24-masala
// function otishTekshirish(pupils) {
//     return pupils.map(pupil => ({
//         ...pupil,
//         isPassed: pupil.protcent >= 70
//     }));
// }

// // 25-masala
// function otganlarSoni(pupils) {
//     return pupils.reduce((hisob, pupil) => {
//         if (pupil.protcent >= 70) hisob.passed++;
//         else hisob.failed++;
//         return hisob;
//     }, { passed: 0, failed: 0 });
// }
