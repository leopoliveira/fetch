
const consultar = document.querySelector("#btn-consulta");
const respFetch = document.querySelector("#respFetch");
const URL_CONSULTA = "https://jsonplaceholder.typicode.com/posts"; //Maiúsculo por ser uma variável de configuração

function fetchConsulta() {
    fetch(URL_CONSULTA)
        .then((response) => {
            response.json()
            .then((data) => {
                respFetch.innerHTML = data;
            })
            .catch((err) => {
                respFetch.innerHTML = `Deu erro na hora de transformar a string JSON em Objeto e o erro foi: ${err}`;
            });
        })
        .catch((err) => {
            respFetch.innerHTML = `Deu erro na hora de requisitar os dados e o erro foi: ${err}`;
        });
};


consultar.addEventListener("click", fetchConsulta);