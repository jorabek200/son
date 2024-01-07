 let meva = []

 for (let i = 0; i < Infinity; i++) {
   let javob = prompt("Yoqtirgan mevangizni kiriting")
   if (javob == 'stop') {
     break
   } else {
     meva.push(javob)
   }
}
 console.log(meva);