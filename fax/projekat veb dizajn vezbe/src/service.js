class Service {
  constructor() {
    this.baseUrl = "https://swapi.dev/api/";
  }
  getPlanetsFetch() {
    fetch(this.baseUrl + "planets")
      .then((response) => response.json())
      .then((response) => this.generateDOM(response.results))
      .catch((error) => console.log(error));
  }
  generateDOM(planets) {
    let ul = document.createElement("ul");
    planets?.forEach((planet) => {
      let li = document.createElement("li");
      li.innerHTML = `name: ${planet.name}
        num of films : ${planet.films.length}
        diameter: ${planet.diameter}`;
      ul.appendChild(li);
    });
    let body = document.querySelector("body");
    body.appendChild(ul);
  }
}
export default Service;
