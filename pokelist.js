
//window.summit = summit;

const pokemonlist = [
    { imgscr: "image/pikachu.png", name: "Pikachu", skill: ["Charge", "Thunderbolt"], type: "electric", hp: 190 },
    { imgscr: "image/charizard.png", name: "Charizard", skill: ["Claw Slash", "G max Wildfire"], type: "fire", hp: 330 },
    { imgscr: "image/Blastoise.png", name: "Blastoise", skill: ["Solid Shell", "Twin Cannons"], type: "water", hp: 330 },
    { imgscr: "image/Venusaur.png", name: "Venusaur", skill: ["Tranquil Flower", "Dangerous toxwhip"], type: "glass", hp: 340 }
]

let ascending = true;

let number_of_pokemon = 0;

function show_your_collection() {

    const container = document.getElementById('collection_container');
    container.innerHTML = ""; // clear previous content
    for(let i = 0; i < pokemonlist.length; i++) {
        const pokemon = pokemonlist[i];
    
        const card = document.createElement('div');
        card.className = "pokemon_card";
    
        const img = document.createElement('img');
        img.className = "pokemon_picture";
        img.src = pokemon.imgscr;
        img.width = 300;
        img.height = 450;

        

        const detail = document.createElement('div');
        detail.className = "pokemon_detail";
    
        const name = document.createElement('p');
        name.className = "name";
        name.textContent = "Name: " + pokemon.name;
    
        const skill = document.createElement('p');
        skill.className = "skill";
        skill.textContent = "Skills: " + pokemon.skill;
    
        const type = document.createElement('p');
        type.className = "type";
        type.textContent = "Type: " + pokemon.type;
    
        const hp = document.createElement('p');
        hp.className = "hp";
        hp.textContent = "HP: " + pokemon.hp;
    
        card.appendChild(img);
        detail.appendChild(name);
        detail.appendChild(skill);
        detail.appendChild(type);
        detail.appendChild(hp);
        card.appendChild(detail);

        container.appendChild(card);
    }
    calculate_total()
}

function orderbyname(){
    const new_container = document.getElementById('collection_container');
    const new_card = document.getElementsByClassName("pokemon_card")
    const new_imgs = document.getElementsByClassName("pokemon_picture");
    const new_detail =document.getElementsByClassName("pokemon_detail")
    const new_name = document.getElementsByClassName("name")
    const new_skill = document.getElementsByClassName("skill")
    const new_type = document.getElementsByClassName("type")
    const new_hp = document.getElementsByClassName("hp")

    const new_pokemon_list=[]
    
    for(let i=0;i<new_name.length;i++){

        new_pokemon_list.push({
            imgscr: new_imgs[i].src,
            name: new_name[i].textContent.replace("Name: ", ""),
            skill: new_skill[i].textContent.replace("Skills: ", "").split(", "), // if skills are comma-separated text
            type: new_type[i].textContent.replace("Type: ", ""),
            hp: parseInt(new_hp[i].textContent.replace("HP: ", ""), 10),
          });
      
    }

    if(ascending){
        new_pokemon_list.sort((a, b) => a.name.localeCompare(b.name));

    }else{
        new_pokemon_list.sort((a, b) => b.name.localeCompare(a.name));
    }

    ascending = !ascending;  // toggle for next click
    new_container.innerHTML = ""; // clear previous content

    for(let i = 0; i < new_pokemon_list.length; i++) {
        const pokemon = new_pokemon_list[i];
    
        const card = document.createElement('div');
        card.className = "pokemon_card";
    
        const new_img = document.createElement('img');
        new_img.className = "pokemon_picture";
        new_img.src = pokemon.imgscr;
        new_img.width = 300;
        new_img.height = 450;

        

        const detail = document.createElement('div');
        detail.className = "pokemon_detail";
    
        const name = document.createElement('p');
        name.className = "name";
        name.textContent = "Name: " + pokemon.name;
    
        const skill = document.createElement('p');
        skill.className = "skill";
        skill.textContent = "Skills: " + pokemon.skill.join(", ");
    
        const type = document.createElement('p');
        type.className = "type";
        type.textContent = "Type: " + pokemon.type;
    
        const hp = document.createElement('p');
        hp.className = "hp";
        hp.textContent = "HP: " + pokemon.hp;
    
        card.appendChild(new_img);
        detail.appendChild(name);
        detail.appendChild(skill);
        detail.appendChild(type);
        detail.appendChild(hp);
        card.appendChild(detail);

        new_container.appendChild(card);

    }

   


    calculate_total()

}

function orderbyhp(){
    const new_container = document.getElementById('collection_container');
    const new_card = document.getElementsByClassName("pokemon_card")
    const new_imgs = document.getElementsByClassName("pokemon_picture");
    const new_detail =document.getElementsByClassName("pokemon_detail")
    const new_name = document.getElementsByClassName("name")
    const new_skill = document.getElementsByClassName("skill")
    const new_type = document.getElementsByClassName("type")
    const new_hp = document.getElementsByClassName("hp")

    const new_pokemon_list=[]
    
    for(let i=0;i<new_name.length;i++){

        new_pokemon_list.push({
            imgscr: new_imgs[i].src,
            name: new_name[i].textContent.replace("Name: ", ""),
            skill: new_skill[i].textContent.replace("Skills: ", "").split(", "), // if skills are comma-separated text
            type: new_type[i].textContent.replace("Type: ", ""),
            hp: parseInt(new_hp[i].textContent.replace("HP: ", ""), 10),
          });
      
    }

    if(ascending){
        new_pokemon_list.sort((a, b) => a.hp-b.hp);

    }else{
        new_pokemon_list.sort((a, b) => b.hp-a.hp);
    }

    ascending = !ascending;  // toggle for next click
    new_container.innerHTML = ""; // clear previous content

    for(let i = 0; i < new_pokemon_list.length; i++) {
        const pokemon = new_pokemon_list[i];
    
        const card = document.createElement('div');
        card.className = "pokemon_card";
    
        const new_img = document.createElement('img');
        new_img.className = "pokemon_picture";
        new_img.src = pokemon.imgscr;
        new_img.width = 300;
        new_img.height = 450;

        

        const detail = document.createElement('div');
        detail.className = "pokemon_detail";
    
        const name = document.createElement('p');
        name.className = "name";
        name.textContent = "Name: " + pokemon.name;
    
        const skill = document.createElement('p');
        skill.className = "skill";
        skill.textContent = "Skills: " + pokemon.skill.join(", ");
    
        const type = document.createElement('p');
        type.className = "type";
        type.textContent = "Type: " + pokemon.type;
    
        const hp = document.createElement('p');
        hp.className = "hp";
        hp.textContent = "HP: " + pokemon.hp;
    
        card.appendChild(new_img);
        detail.appendChild(name);
        detail.appendChild(skill);
        detail.appendChild(type);
        detail.appendChild(hp);
        card.appendChild(detail);

        new_container.appendChild(card);

    }

   


    calculate_total()

}

function calculate_total(){
    const new_name = document.getElementsByClassName("name")
    const title = document.getElementById("title")
    

    let number_of_pokemon = new_name.length

    //console.log(number_of_pokemon)
    const new_title = document.createElement('h3');
    new_title.className = "new_title";
    new_title.textContent = "Your Pokédex Collection : " + number_of_pokemon;
    title.innerHTML = "";
    title.appendChild(new_title);


}

function add_new_card(){
    const inputNew = document.getElementById("input_new");
  if (inputNew.style.display === "block") {
    inputNew.style.display = "none";
  } else {
    inputNew.style.display = "block";
  }
}

function upload(){

    const user_input_img = document.getElementById("add_img");
    const user_input_name = document.getElementById("add_name");
    const user_input_skill = document.getElementById("add_skill");
    const user_input_type = document.getElementById("add_type");
    const user_input_hp = document.getElementById("add_hp");

    const new_container = document.getElementById('collection_container');
    const new_card = document.getElementsByClassName("pokemon_card")
    const new_imgs = document.getElementsByClassName("pokemon_picture");
    const new_detail =document.getElementsByClassName("pokemon_detail")
    const new_name = document.getElementsByClassName("name")
    const new_skill = document.getElementsByClassName("skill")
    const new_type = document.getElementsByClassName("type")
    const new_hp = document.getElementsByClassName("hp")

    const new_pokemon_list=[]
    
    for(let i=0;i<new_name.length;i++){

        new_pokemon_list.push({
            imgscr: new_imgs[i].src,
            name: new_name[i].textContent.replace("Name: ", ""),
            skill: new_skill[i].textContent.replace("Skills: ", "").split(", "), // if skills are comma-separated text
            type: new_type[i].textContent.replace("Type: ", ""),
            hp: parseInt(new_hp[i].textContent.replace("HP: ", ""), 10),
          });
      
    }

    //add new pokemon

    new_pokemon_list.push({
        imgscr: user_input_img.value,       // get image URL string, not src property
        name: user_input_name.value,        // text in input field
        skill: user_input_skill.value.split(",").map(s => s.trim()), // split string to array
        type: user_input_type.value,
        hp: parseInt(user_input_hp.value, 10),
    });

    new_container.innerHTML = "";

    for(let i = 0; i < new_pokemon_list.length; i++) {
    const pokemon = new_pokemon_list[i];

    const card = document.createElement('div');
    card.className = "pokemon_card";

    const new_img = document.createElement('img');
    new_img.className = "pokemon_picture";
    new_img.src = pokemon.imgscr;
    new_img.width = 300;
    new_img.height = 450;

    

    const detail = document.createElement('div');
    detail.className = "pokemon_detail";

    const name = document.createElement('p');
    name.className = "name";
    name.textContent = "Name: " + pokemon.name;

    const skill = document.createElement('p');
    skill.className = "skill";
    skill.textContent = "Skills: " + pokemon.skill.join(", ");

    const type = document.createElement('p');
    type.className = "type";
    type.textContent = "Type: " + pokemon.type;

    const hp = document.createElement('p');
    hp.className = "hp";
    hp.textContent = "HP: " + pokemon.hp;

    card.appendChild(new_img);
    detail.appendChild(name);
    detail.appendChild(skill);
    detail.appendChild(type);
    detail.appendChild(hp);
    card.appendChild(detail);

    new_container.appendChild(card);
    console.log('Inputs:', user_input_img.value, user_input_name.value, user_input_skill.value, user_input_type.value, user_input_hp.value);

    }


    calculate_total()

    console.log('Inputs:', user_input_img.value, user_input_name.value, user_input_skill.value, user_input_type.value, user_input_hp.value);

}


calculate_total()
