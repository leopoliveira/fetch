
const consultar = document.querySelector("#btn-consulta");
const respFetch = document.querySelector("#respFetch");
const URL_CONSULTA = "https://jsonplaceholder.typicode.com/posts"; //Maiúsculo por ser uma variável de configuração

function fetchConsulta() {
    fetch(URL_CONSULTA)
        .then((response) => {
            response.json()
            .then((data) => {
                let html = "";
                html += "<ul>";

                for(let i in data) {
                    html += `<li>
                        <div class="container">
                            <div class="avatar">${data[i].id}</div>
                            <div class="post" style="text-transform: capitalize;">
                                <h1>${data[i].userId}</h1>
                                <h2 style="text-transform: capitalize;">${data[i].title}</h2>
                                <p>${data[i].body}</p>
                            </div>
                        </div>
                    </li>`
                };

                html += "</ul>";
                respFetch.innerHTML = html;
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