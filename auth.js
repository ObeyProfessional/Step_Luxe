import { getAuth, createUserWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();

document.getElementById("signupBtn").onclick = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account created successfully 🎉");
    })
    .catch(error => {
      alert(error.message);
    });
};
