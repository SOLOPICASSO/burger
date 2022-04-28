const product = {
    plainBurger : {
        name : 'GAMBURGER',
        price : '10000',
        kcall : 30,
        amount : 0,
        get Sum (){
            return this.price*this.amount
        },
        get Kcal(){
            return this.kcall*this.amount
        }
    },
    freshBurger : {
        name : 'GAMBURGER FRESH',
        price : '20500',
        kcall : 120,
        amount : 0,
        get Sum (){
            return this.price*this.amount
        },
        get Kcal(){
            return this.kcall*this.amount
        }
    },
    freshCombo : {
        name : 'FRESH COMBO',
        price : '31900',
        kcall : 150,
        amount : 0,
        get Sum (){
            return this.price*this.amount
        },
        get Kcal(){
            return this.kcall*this.amount
        }
    }
}
const productBtn = document.querySelectorAll('.main__product-btn'),
      productAdd = document.querySelector('.addCart'),
      receipt = document.querySelector('.receipt'),
      receiptOut = document.querySelector('.receipt__window-out'),
      receiptWindow = document.querySelector('.receipt__window'),
      receiptPay = document.querySelector('.receipt__window-btn')
      
for (let i = 0; i < productBtn.length; i++) {
    productBtn[i].addEventListener('click',function () {
        plusMinus(this)
    })
    
}

function plusMinus (element) { 
    const parent = element.closest('.main__product'),
    parentId = parent.getAttribute('id'),
    out = parent.querySelector('.main__product-num'),
    price = parent.querySelector('.main__product-price span'),
    kcall = parent.querySelector('.main__product-kcall span'),
    check = element.getAttribute('data-symbol')
    if (check == '+' && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (check == '-' &&product[parentId].amount > 0) {
        product[parentId].amount--
    }
    out.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Sum
    kcall.innerHTML = product[parentId].Kcal
}

// LVL

function randomColor(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min)
}


const level = document.querySelector(".level__top")
let time = 200;
let timer;
function level__to() {
    level.innerHTML++

    if (level.innerHTML < 50) {
    let r = randomColor(0, 125);
    let g = randomColor(125, 236);
    let b = randomColor(20, 60);
    level.style = `color: rgb(${r}, ${g}, ${b});`
        time = 70
    
    } else if (level.innerHTML < 70) {
        let r = randomColor(125, 236);
    let g = randomColor(200, 232);
    let b = randomColor(20, 1);
    level.style = `color: rgb(${r}, ${g}, ${b});`
        time = 100
    
    } else if (level.innerHTML < 80) {
        let r = randomColor(230, 236);
    let g = randomColor(210, 114);
    let b = randomColor(0, 1);
    level.style = `color: rgb(${r}, ${g}, ${b});`
        time = 100
    
    } else if (level.innerHTML < 90) {
        let r = randomColor(230, 236);
    let g = randomColor(70, 85);
    let b = randomColor(0, 1);
    level.style = `color: rgb(${r}, ${g}, ${b});`
        time = 150
    
    } else if (level.innerHTML < 95) {
        let r = randomColor(234, 236);
        let g = randomColor(35, 40);
        let b = randomColor(0, 1);
        level.style = `color: rgb(${r}, ${g}, ${b});`
        time = 200
    }else if (level.innerHTML < 100) {
        let r = randomColor(234, 236);
        let g = randomColor(35, 40);
        let b = randomColor(0, 1);
        level.style = `color: rgb(${r}, ${g}, ${b});`
        time = 450
    }else {
        level.innerHTML=100
    }

  setTimeout(level__to, time );

}
level__to()

// chek

let productList = []
productName = []
productPrice = []
productKcal = []

productAdd.addEventListener('click', function () {
    for (const key in product) {
            const selled = product[key];
            if (selled.amount > 0) {
                productList.push(selled)
            } else if (productList.push(selled).Number){
                selled = [0+selled]
            }
            selled.price = selled.Sum
            selled.Kcall = selled.Kcal
    }
    for (let i = 0; i < productList.length; i++) {
        const item = productList[i];
        productPrice = productPrice + item.price 
        // productPrice =+ item.price
        productKcal = productKcal + item.kcall 
        // productKcall =+ item.kcal
        productName = productName + '\n' + item.name + '\n'
        // productName =+ item.name
    }
    receiptOut.innerHTML = `purchased: ${productName} \n Callory ${productKcal} \n Total price: ${productPrice} sum`
    
    
    receipt.style.display = 'flex'
    setTimeout(() => {
        receiptWindow.style.top = '22%'
    }, 100);
    setTimeout(() => {
        receipt.style.opacity = '1'
    }, 200);
    const payNum = document.querySelectorAll('.main__product-num');
      for (let i = 0; i < payNum.length; i++) {
        payNum[i].innerHTML = 0
      }
      const payKcall = document.querySelectorAll('.main__product-kcall span');
      for (let i = 0; i < payKcall.length; i++) {
        payKcall[i].innerHTML = 0
          
      }
      const payPrice = document.querySelectorAll('.main__product-price span');
      for (let i = 0; i < payPrice.length; i++) {
        payPrice[i].innerHTML = 0
          
      }
})
receiptPay.addEventListener('click', function () {
    location.reload()
    setTimeout(() => {
       receipt.style.display = 'none'
    }, 300 );
    setTimeout(() => {
        receipt.style.opacity = '0'
     }, 200 );
     setTimeout(() => {
        receipt.style.top= '-100%'
     }, 100 );
})


// rasm click


const mainProductInfo = document.querySelectorAll('.main__product-info'),
view = document.querySelector('.view'),
viewClose = document.querySelector('.view__close'),
viewImg = document.querySelector('.view img');

mainProductInfo.forEach(el => {
    el.addEventListener('dblclick', () => {
        view.classList.add('active')
        let img = el.querySelector('.main__product-img'),
        imgAtt = img.getAttribute('src')
        viewImg.setAttribute('src', imgAtt)
    })
});






// for (let i = 0; i < rasm.length; i++) {
//     rasm[i].addEventListener('dblclick', function () {
//         dbl()
//     })
// }



// function dbl() {
//     const rasm = parent.querySelector('.main__product-img');
//     rasm(active)
// }
// mainProductInfo.forEach(el => {
//     el.addEventListener('dblclick', () => {
//         view.classList.add('active')
//         let img = el.querySelector('.main__product-img'),
//             imgAtt = img.getAttribute('src')
//         viewImg.setAttribute('src', imgAtt)
//     })
// });

viewClose.addEventListener('click', () =>{
    view.classList.remove('active')
})