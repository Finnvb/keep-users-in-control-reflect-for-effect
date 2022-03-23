let title = document.querySelector("h1:nth-of-type(1)");
let introText = document.querySelector("p:nth-of-type(1)");
let competentieHeader = document.querySelector(".competentieHeader");
let vragenlijstHeader = document.querySelector("h2:nth-of-type(2)");
let vragenlijstSection = document.querySelector(".competentieVragenlijst");
let questionsHeader = document.querySelectorAll("section.competentieVragenlijst > p");
let answers = document.querySelectorAll("label");




let getData = fetch("data.json")
.then(response => response.json())
.then(getData => renderData(getData))
.catch(err => { console.log(err) });



function renderData(render){
console.log(render);


title.textContent = render[0].title;
introText.textContent = render[0].uitleg;
competentieHeader.textContent = render[0].competentie[0].title;


vragenlijstHeader.textContent = render[0].competentie[0].vraag[0].title;

for (let index = 0; index < questionsHeader.length; index++) {
    questionsHeader[index].textContent = render[0].competentie[0].vraag[0].subvraag[index].title;
   
}




}

