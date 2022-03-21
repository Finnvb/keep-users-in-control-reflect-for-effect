let getData = fetch("https://finnvb.github.io/keep-users-in-control-reflect-for-effect/data.json"). then(response => response.json())
.then(getData => console.log(getData));