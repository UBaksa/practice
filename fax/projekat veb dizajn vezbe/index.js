// import { kvadrat } from "./src/funkcije";
// import Student from "./src/student";

// let tarik = new Student("Tarik", "Zircanin");
// tarik.predstaviSe();
// let kv = kvadrat(5);
// ispis("Poruka iz eksportovane funkcije " + kv);
import Service from "./src/service";
import { checkUser } from "./src/login";
const service = new Service();
service.getPlanetsFetch();

// function proveri() {
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
//   checkUser(username, password);
// }

btn.AddEventListener(`click`, (event) => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  checkUser(username, password);
});

const buton = document.createElement("button");
buton.addEventListener(`click`, () => {
  localStorage.clear();
});

const newbuton = document.createElement("button");
newbuton.innerHTML("Prikaz servisa");
if (localStorage.getItem("ulogovan")) {
  newbuton.addEventListener(`click`, getPlanetsFetch());
}
