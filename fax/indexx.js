// function ucitajBroj()
// {
//     var br=prompt("Unesite jedan broj")
//     try{
//         if(br===""){
//         throw "Nije unet broj a obavezan je"}
//         let br=
//     }
// }

const ucitajKorisnickoIme = () => {
  var ime = prompt("Unesite korisnicko ime");
  try {
    if (ime === "") {
      throw "Korisnicko ime mora biti validno";
    }
    if (ime.length < 6) {
      throw "Korisnicko ime mora biti validno,vise od 6 karaktera";
    }
    console.log("Uneto ime je ispravno");
  } catch (ex) {
    console.log(ex);
  }

  function uzorak() {
    let x3 = /HTML/gi;
    let y31 = console.log(
      "html:HTML ili HyperText Markup Language.HTML se uci na VD.HtmL je jednostavan jezik"
    );
  }
  let y3 = y31.replace(x3, "JAVA");
  console.log(y3);
  y3;
};

// kad hocemo uzorak da proveramo kao broj koristimo \d za broj od 0-9 za 1 cifru,ako cemo vise kucamo vise \d-ova
//webpack
