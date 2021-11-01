
const consultar = document.querySelector("#btn-consulta");
const respFetch = document.querySelector("#respFetch");
const URL_CONSULTA = "https://jsonplaceholder.typicode.com/posts"; //Maiúsculo por ser uma variável de configuração

// ---USANDO PROMISSES---

// function fetchConsulta() {
//     fetch(URL_CONSULTA)
//         .then((response) => {
//             respFetch.innerHTML = "Carregando...";
//             response.json()
//             .then((data) => {
//                 let html = "";
//                 html += "<ul>";

//                 for(let i in data) {
//                     html += `<li>
//                         <div class="container">
//                             <div class="avatar">${data[i].userId}</div>
//                             <div class="postBody" style="text-transform: capitalize;">
//                                 <h1 style="text-transform: capitalize;">${data[i].title}</h1>
//                                 <p>${data[i].body}</p>
//                                 <span>Question ID: ${data[i].id}</span>
//                             </div>
//                         </div>
//                     </li>`
//                 };

//                 html += "</ul>";
//                 respFetch.innerHTML = html;
//             })
//             .catch((err) => {
//                 respFetch.innerHTML = `Deu erro na hora de transformar a string JSON em Objeto e o erro foi: ${err}`;
//             });
//         })
//         .catch((err) => {
//             respFetch.innerHTML = `Deu erro na hora de requisitar os dados e o erro foi: ${err}`;
//         });
// };

// ---USANDO ASYNC AWAIT---

// async function fetchConsulta() {
//     let resposta = await fetch(URL_CONSULTA);
//     let json = await resposta.json();

//     let html = "";
//                 html += "<ul>";

//                 for(let i in json) {
//                     html += `<li>
//                         <div class="container">
//                             <div class="avatar">${json[i].userId}</div>
//                             <div class="postBody" style="text-transform: capitalize;">
//                                 <h1 style="text-transform: capitalize;">${json[i].title}</h1>
//                                 <p>${json[i].body}</p>
//                                 <span>Question ID: ${json[i].id}</span>
//                             </div>
//                         </div>
//                     </li>`
//                 };

//                 html += "</ul>";
//                 respFetch.innerHTML = html;

// };

//---USANDO XMLHTTPREQUEST---

async function fetchConsulta() {

    let req = new XMLHttpRequest();
    let json;

    req.open("GET", URL_CONSULTA);

    req.send();

    req.onreadystatechange = () => {
        if(req.readyState == 4 && req.status == 200) {
            json = JSON.parse(req.response);
        }

        let html = "";
                html += "<ul>";

                for(let i in json) {
                    html += `<li>
                        <div class="container">
                            <div class="avatar">${json[i].userId}</div>
                            <div class="postBody" style="text-transform: capitalize;">
                                <h1 style="text-transform: capitalize;">${json[i].title}</h1>
                                <p>${json[i].body}</p>
                                <span>Question ID: ${json[i].id}</span>
                            </div>
                        </div>
                    </li>`
                };

                html += "</ul>";
                respFetch.innerHTML = html;
}
    };


consultar.addEventListener("click", fetchConsulta);