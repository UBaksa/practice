// // Traziti od korisnika unos realnog broja.Nakon toga ispisati kvadrat tog
// // uhvatiti slucaj kad korisnik ne unese vrednost.
// let broj = +prompt("Unesite broj.")
// for(let i=1;i<=broj;i++){
//     if(isNaN(broj)){
//         console.log("Morate uneti vrednost!")
//     }
//     else
//     console.log(broj*broj)
// }
// Napisati program koji u konzoli ispisuje brojeve od 0 do 100 ukljucujuci i 100 tako da:
// broj deljiv sa 3 treba da se ispise FIZZ umesto broja./deljiv sa 5 treba BUZZ i ako je deljiv i sa 3 i 5 treba FIZZ BUZZ umesto broja

// for(let i=1;i<=100;i++){
//     if(i%3===0 && i%5===0){
//         console.log("FIZZ BUZZ")
//     }
//     else if(i%3===0){
//         console.log("FIZZ")
//     }
//     else if(i%5===0){
//         console.log("BUZZ")
//     }
//     else
//     console.log(i)
// }
const recenica = "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa"

// treba ispisati samoglasnici u velika slova/na kraju . /osatli karakteri se ne menjaju.


let duzina = recenica.length
let nova = ""
for(let i=0;i<duzina;i++){
    if(recenica[i] === "a" || recenica[i] === "e" || recenica[i] === "i" ||recenica[i] === "o" || recenica[i] === "u"){
        nova+=recenica[i].toUpperCase()
    }
    else
    nova+=recenica[i]
}   
console.log(nova+ ".")