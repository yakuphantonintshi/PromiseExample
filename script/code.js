document.querySelector('[division]').addEventListener('click' ,division)

 function division(){
    let fOp = +document.querySelector('[firstOp]').value
    let output = document.querySelector('[output]')
    let sOp = +document.querySelector('[secOp]').value
//Make use of + to convert a string to number

//Make a promise
let myPromise = new Promise((resolve, reject) => {
    if ((fOp < 1) || (sOp < 1))
        reject('Please contact our administrator')
    else
        resolve(fOp / sOp)
})
myPromise.then(value => {  //use then when the promise is fulfilled
    output.textContent = value
})
myPromise.catch(value => {   //use catch when the promise is not fulfilled/rejected
    output.textContent = value
})
 }
 