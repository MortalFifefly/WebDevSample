const prList = {
    Products: [
        {
            "src": "./assets/productImage/AsROG.jpg",
            "name": "Asus ROG",
            "Type": "Gaming",
            "Brand": "Asus"
        },
        {
            "src": "./assets/productImage/AsViv15.webp",
            "name": "Asus Vivobook 15",
            "Type": "Office",
            "Brand": "Asus"
        },
        {
            "src": "./assets/productImage/AsZen.jpg",
            "name": "Asus Zenbook",
            "Type": "Gaming",
            "Brand": "Asus"
        },
        {
            "src": "./assets/productImage/D14.webp",
            "name": "Dell 14",
            "Type": "Office",
            "Brand": "Dell"
        },
        {
            "src": "./assets/productImage/D15.webp",
            "name": "Dell 15",
            "Type": "Office",
            "Brand": "Dell"
        },
        {
            "src": "./assets/productImage/Dg15.webp",
            "name": "Dell G15",
            "Type": "Gaming",
            "Brand": "Dell"
        },
        {
            "src": "./assets/productImage/Hp15.jpg",
            "name": "HP Laptop 15",
            "Type": "Office",
            "Brand": "HP"
        },
        {
            "src": "./assets/productImage/HpOmen.webp",
            "name": "HP Omen",
            "Type": "Gaming",
            "Brand": "HP"
        },
        {
            "src": "./assets/productImage/HpVic.webp",
            "name": "HP Victus",
            "Type": "Gaming",
            "Brand": "HP"
        },
        {
            "src": "./assets/productImage/LenId3.jpg",
            "name": "Lenovo Ideapad 3",
            "Type": "Office",
            "Brand": "Lenovo"
        },
        {
            "src": "./assets/productImage/LenLeg5Pr.jpg",
            "name": "Lenovo Legion 5 Pro",
            "Type": "Gaming",
            "Brand": "Lenovo"
        },
        {
            "src": "./assets/productImage/LenThinke14.jpg",
            "name": "Lenovo Thinkpad E14",
            "Type": "Office",
            "Brand": "Lenovo"
        }
    ]
};
const t0 = document.getElementById("type0");
const t1 = document.getElementById("type1");
const t2 = document.getElementById("type2");
function typeToggle(el) {
    if (el.id == "type0") {
        if (el.value == "off") {
            t1.value = "off";
            t2.value = "off";
            el.value = "on";
        }
    }
    else if (el.id == "type1") {
        if (el.value == "off") {
            t0.value = "off";
            t2.value = "off";
            el.value = "on";
        }
    }
    else if (el.id == "type2") {
        if (el.value == "off") {
            t0.value = "off";
            t1.value = "off";
            el.value = "on";
        }
    }
    filterTypeCheck(el);
}
const b0 = document.getElementById("brand0");
const b1 = document.getElementById("brand1");
const b2 = document.getElementById("brand2");
const b3 = document.getElementById("brand3");
const b4 = document.getElementById("brand4");
function brandToggle(el) {
    if (el.id == "brand0") {
        if (el.value == "off") {
            el.value = "on";
            b1.value = "off";
            b2.value = "off";
            b3.value = "off";
            b4.value = "off";
        }
    }
    else if (el.id == "brand1") {
        if (el.value == "off") {
            el.value = "on";
            b0.value = "off";
            b2.value = "off";
            b3.value = "off";
            b4.value = "off";
        }
    }
    else if (el.id == "brand2") {
        if (el.value == "off") {
            el.value = "on";
            b0.value = "off";
            b1.value = "off";
            b3.value = "off";
            b4.value = "off";
        }
    }
    else if (el.id == "brand3") {
        if (el.value == "off") {
            el.value = "on";
            b0.value = "off";
            b1.value = "off";
            b2.value = "off";
            b4.value = "off";
        }
    }
    else if (el.id == "brand4") {
        if (el.value == "off") {
            el.value = "on";
            b0.value = "off";
            b1.value = "off";
            b2.value = "off";
            b3.value = "off";
        }
    }
    filterBrCheck(el);
}
var type0 = 0;
var type1 = 0;
var type2 = 0;
function filterTypeCheck(el) {
    if (el.value == "on") {
        if (el.id == "type0") {
            type0 = 1;
            type1 = 0;
            type2 = 0;
        }
        else if (el.id == "type1") {
            type1 = 1;
            type0 = 0;
            type2 = 0;
        }
        else if (el.id == "type2") {
            type2 = 1;
            type0 = 0;
            type1 = 0;
        }
    }
    else {
        if (el.id == "type0") {
            type0 = 0;
        }
        else if (el.id == "type1") {
            type1 = 0;
        }
        else if (el.id == "type2") {
            type2 = 0;
        }
    }
    console.clear();
    console.log(type0);
    console.log(type1);
    console.log(type2);
    image();
}
var brand0 = 0;
var brand1 = 0;
var brand2 = 0;
var brand3 = 0;
var brand4 = 0;
function filterBrCheck(el) {
    console.log(el.value);
    if (el.value == "on") {
        if (el.id == "brand0") {
            brand0 = 1;
            brand1 = 0;
            brand2 = 0;
            brand3 = 0;
            brand4 = 0;
        }
        else if (el.id == "brand1") {
            brand1 = 1;
            brand0 = 0;
            brand2 = 0;
            brand3 = 0;
            brand4 = 0;
        }
        else if (el.id == "brand2") {
            brand2 = 1;
            brand0 = 0;
            brand1 = 0;
            brand3 = 0;
            brand4 = 0;
        }
        else if (el.id == "brand3") {
            brand3 = 1;
            brand0 = 0;
            brand1 = 0;
            brand2 = 0;
            brand4 = 0;
        }
        else if (el.id == "brand4") {
            brand4 = 1;
            brand0 = 0;
            brand1 = 0;
            brand2 = 0;
            brand3 = 0;
        }
    }
    else {
        if (el.id == "brand0") {
            brand0 = 0;
        }
        else if (el.id == "brand1") {
            brand1 = 0;
        }
        else if (el.id == "brand2") {
            brand2 = 0;
        }
    }
    console.clear();
    console.log(brand0);
    console.log(brand1);
    console.log(brand2);
    console.log(brand3);
    console.log(brand4);
    image();
}
const gridEl = document.getElementsByClassName("gridElement");
const el = document.getElementsByClassName("innerText");
const imgel = document.getElementsByClassName("ProductImage");
function image() {
    for (let i = 0; i < imgel.length; i++) {
        if (type1 == 1) {
            if (prList.Products[i].Type == "Gaming") {
                if (brand1 == 1) {
                    if (prList.Products[i].Brand == "Asus") {
                        gridEl[i].style.display = "flex";
                        imgel[i].src = prList.Products[i].src;
                        el[i].innerHTML = prList.Products[i].name;
                    }
                    else {
                        gridEl[i].style.display = "none";
                    }
                }
                else if (brand2 == 1) {
                    if (prList.Products[i].Brand == "Dell") {
                        gridEl[i].style.display = "flex";
                        imgel[i].src = prList.Products[i].src;
                        el[i].innerHTML = prList.Products[i].name;
                    }
                    else {
                        gridEl[i].style.display = "none";
                    }
                }
                else if (brand3 == 1) {
                    if (prList.Products[i].Brand == "HP") {
                        gridEl[i].style.display = "flex";
                        imgel[i].src = prList.Products[i].src;
                        el[i].innerHTML = prList.Products[i].name;
                    }
                    else {
                        gridEl[i].style.display = "none";
                    }
                }
                else if (brand4 == 1) {
                    if (prList.Products[i].Brand == "Lenovo") {
                        gridEl[i].style.display = "flex";
                        imgel[i].src = prList.Products[i].src;
                        el[i].innerHTML = prList.Products[i].name;
                    }
                    else {
                        gridEl[i].style.display = "none";
                    }
                }
                else {
                    gridEl[i].style.display = "flex";
                    imgel[i].src = prList.Products[i].src;
                    el[i].innerHTML = prList.Products[i].name;
                }
            }
            else {
                gridEl[i].style.display = "none";
            }
        }
        else if (type2 == 1) {
            if (prList.Products[i].Type == "Office") {
                if (brand1 == 1) {
                    if (prList.Products[i].Brand == "Asus") {
                        gridEl[i].style.display = "flex";
                        imgel[i].src = prList.Products[i].src;
                        el[i].innerHTML = prList.Products[i].name;
                    }
                    else {
                        gridEl[i].style.display = "none";
                    }
                }
                else if (brand2 == 1) {
                    if (prList.Products[i].Brand == "Dell") {
                        gridEl[i].style.display = "flex";
                        imgel[i].src = prList.Products[i].src;
                        el[i].innerHTML = prList.Products[i].name;
                    }
                    else {
                        gridEl[i].style.display = "none";
                    }
                }
                else if (brand3 == 1) {
                    if (prList.Products[i].Brand == "HP") {
                        gridEl[i].style.display = "flex";
                        imgel[i].src = prList.Products[i].src;
                        el[i].innerHTML = prList.Products[i].name;
                    }
                    else {
                        gridEl[i].style.display = "none";
                    }
                }
                else if (brand4 == 1) {
                    if (prList.Products[i].Brand == "Lenovo") {
                        gridEl[i].style.display = "flex";
                        imgel[i].src = prList.Products[i].src;
                        el[i].innerHTML = prList.Products[i].name;
                    }
                    else {
                        gridEl[i].style.display = "none";
                    }
                }
                else {
                    gridEl[i].style.display = "flex";
                    imgel[i].src = prList.Products[i].src;
                    el[i].innerHTML = prList.Products[i].name;
                }
            }
            else {
                gridEl[i].style.display = "none";
            }
        }
        else {
            if (brand1 == 1) {
                if (prList.Products[i].Brand == "Asus") {
                    gridEl[i].style.display = "flex";
                    imgel[i].src = prList.Products[i].src;
                    el[i].innerHTML = prList.Products[i].name;
                }
                else {
                    gridEl[i].style.display = "none";
                }
            }
            else if (brand2 == 1) {
                if (prList.Products[i].Brand == "Dell") {
                    gridEl[i].style.display = "flex";
                    imgel[i].src = prList.Products[i].src;
                    el[i].innerHTML = prList.Products[i].name;
                }
                else {
                    gridEl[i].style.display = "none";
                }
            }
            else if (brand3 == 1) {
                if (prList.Products[i].Brand == "HP") {
                    gridEl[i].style.display = "flex";
                    imgel[i].src = prList.Products[i].src;
                    el[i].innerHTML = prList.Products[i].name;
                }
                else {
                    gridEl[i].style.display = "none";
                }
            }
            else if (brand4 == 1) {
                if (prList.Products[i].Brand == "Lenovo") {
                    gridEl[i].style.display = "flex";
                    imgel[i].src = prList.Products[i].src;
                    el[i].innerHTML = prList.Products[i].name;
                }
                else {
                    gridEl[i].style.display = "none";
                }
            }
            else {
                gridEl[i].style.display = "flex";
                imgel[i].src = prList.Products[i].src;
                el[i].innerHTML = prList.Products[i].name;
            }
        }
    }
}
image();