// 1-masala
function olishIsmlarBahoBoyicha(oquvchilar, baho) {
    let result = [];
    for (let o of oquvchilar) {
        if (baho === 5 && o.percent >= 85) {
            result.push(o.name);
        } else if (baho === 4 && o.percent >= 70 && o.percent < 85) {
            result.push(o.name);
        } else if (baho === 3 && o.percent >= 60 && o.percent < 70) {
            result.push(o.name);
        }
    }
    return result;
}

// 2-masala
function massivTakrorSonlar(massiv) {
    let hisob = {};
    for (let qiymat of massiv) {
        if (hisob[qiymat]) {
            hisob[qiymat]++;
        } else {
            hisob[qiymat] = 1;
        }
    }
    return hisob;
}

// 3-masala
function kvadratMassiv(massiv) {
    let result = [];
    for (let son of massiv) {
        result.push(son * son);
    }
    return result;
}

// 4-masala
function musbatYigindi(massiv) {
    let sum = 0;
    for (let son of massiv) {
        if (son > 0) {
            sum += son;
        }
    }
    return sum;
}

// 5-masala
function boshHarfOlish(satr) {
    let result = "";
    let sozlar = satr.split(" ");
    for (let soz of sozlar) {
        result += soz[0];
    }
    return result;
}

// 6-masala
function yoshFarq(massiv) {
    let engKichik = massiv[0].age;
    let engKatta = massiv[0].age;

    for (let { age } of massiv) {
        if (age < engKichik) engKichik = age;
        if (age > engKatta) engKatta = age;
    }

    return engKatta - engKichik;
}

// 7-masala
function juftVaToqAjratish(massiv) {
    let juft = [], toq = [];
    for (let son of massiv) {
        if (son % 2 === 0) {
            juft.push(son);
        } else {
            toq.push(son);
        }
    }
    return { juft, toq };
}

// 8-masala
function noyobMassiv(massiv) {
    let result = [];
    for (let qiymat of massiv) {
        if (!result.includes(qiymat)) {
            result.push(qiymat);
        }
    }
    return result;
}

// 9-masala
function sortProducts(products, key) {
    return [...products].sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

// 10-masala
function engKuchliProduct(products) {
    let engKuchli = products[0];
    for (let product of products) {
        if (product.rating > engKuchli.rating) {
            engKuchli = product;
        }
    }
    return engKuchli;
}

// 11-masala
function engArzonProduct(products) {
    let engArzon = products[0];
    for (let product of products) {
        if (product.price < engArzon.price) {
            engArzon = product;
        }
    }
    return engArzon;
}

// 12-masala
function umumiyNarx(products) {
    let sum = 0;
    for (let product of products) {
        sum += product.price;
    }
    return sum;
}

// 13-masala
function productNomiMassivi(products) {
    let result = [];
    for (let { name } of products) {
        result.push(name);
    }
    return result;
}

// 14-masala
function idBoyichaNom(products, id) {
    for (let product of products) {
        if (product.id === id) {
            return product.name;
        }
    }
}

// 15-masala
function idBoyichaOchirish(products, id) {
    let result = [];
    for (let product of products) {
        if (product.id !== id) {
            result.push(product);
        }
    }
    return result;
}

// 16-masala
function faqatHarfTekshir(satr) {
    for (let char of satr) {
        if (!/[a-zA-Z]/.test(char)) {
            return false;
        }
    }
    return true;
}

// 17-masala
function truthyFalsyAjratish(massiv) {
    let truthy = [], falsy = [];
    for (let el of massiv) {
        if (el) {
            truthy.push(el);
        } else {
            falsy.push(el);
        }
    }
    return { truthy, falsy };
}

// 18-masala
function sozUzunligiMassiv(satr) {
    let result = [];
    let sozlar = satr.split(" ");
    for (let soz of sozlar) {
        result.push(soz.length);
    }
    return result;
}

// 19-masala
function boshJoyTekshir(satr) {
    for (let char of satr) {
        if (char === " ") {
            return true;
        }
    }
    return false;
}

// 20-masala
function objectKalitQiymat(obj) {
    let result = [];
    for (let kalit in obj) {
        result.push(kalit + obj[kalit]);
    }
    return result;
}

// 21-masala (Rekursiya bilan)
function raqamlarYigindisi(son) {
    if (son === 0) return 0;
    return (son % 10) + raqamlarYigindisi(Math.floor(son / 10));
}

// 22-masala
function oquvchilarOrtalama(pupils) {
    let sum = 0;
    for (let pupil of pupils) {
        sum += pupil.protcent;
    }
    return sum / pupils.length;
}

// 23-masala
function bahoQoshish(pupils) {
    let result = [];
    for (let pupil of pupils) {
        let grade;
        if (pupil.protcent >= 90) {
            grade = 5;
        } else if (pupil.protcent >= 80) {
            grade = 4;
        } else if (pupil.protcent >= 70) {
            grade = 3;
        } else {
            grade = 2;
        }
        result.push({ ...pupil, grade });
    }
    return result;
}

// 24-masala
function otishTekshirish(pupils) {
    let result = [];
    for (let pupil of pupils) {
        let isPassed = pupil.protcent >= 70;
        result.push({ ...pupil, isPassed });
    }
    return result;
}

// 25-masala
function otganlarSoni(pupils) {
    let passed = 0, failed = 0;
    for (let pupil of pupils) {
        if (pupil.protcent >= 70) {
            passed++;
        } else {
            failed++;
        }
    }
    return { passed, failed };
}
