class Student {
  constructor(ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }
  predstaviSe() {
    document.write(`Moje ime je ${this.ime} i prezime je ${this.prezime}`);
  }
}
export default Student;
