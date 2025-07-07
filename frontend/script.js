function register() {
  const username = document.getElementById("regUser").value;
  const password = document.getElementById("regPass").value;
  fetch("http://127.0.0.1:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
 .then(res => res.json())
  .then(data => {
    document.getElementById("response").innerText = data.message;
  });
}

function login() {
  const username = document.getElementById("logUser").value;
  const password = document.getElementById("logPass").value;
  fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("response").innerText = data.message;
  });
}

function checkSaldo() {
  const username = document.getElementById("logUser").value;
  const password = document.getElementById("logPass").value;

  fetch("http://127.0.0.1:5000/saldo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.saldo !== undefined) {
      document.getElementById("response").innerText = `Saldo attuale: € ${data.saldo.toFixed(2)}`;
    } else {
      document.getElementById("response").innerText = data.message;
    }
  });
  }
