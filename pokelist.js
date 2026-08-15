
const pokemonlist =[{name: "Pikachu",skill: ["Charge","Thunderbolt"],type:"electic",HP:190}]



function add(){
    

    const nameElement = document.getElementById("name");
    nameElement.textContent = pokemonlist[0].name;

}
