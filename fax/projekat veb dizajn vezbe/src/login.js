const baseURL = "http://softinz20233-001-site1.gtempurl.com/api/users";
import axios from "axios";
export const checkUser = (username, password) => {
  axios
    .get(baseURL)
    .then((res) => {
      if (res.status == 200 && res.data != null) {
        const users = res.data;
        const check = users.filter(
          (u) => u.username == username && u.password == pasword
        );
        if (check.length > 0) {
          alert("Ulogovani ste");
          localStorage.setItem(`ulogovan`, true);
        } else {
          alert("Neispravni podaci za logovanje");
        }
      } else {
        console.log("Desila se greska");
      }
    })
    .catch((error) => console.log(error));
};

export const registerUser = (username, password) => {};
