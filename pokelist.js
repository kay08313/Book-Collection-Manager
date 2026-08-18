const pokemonlist = [
    { imgscr: "image/pikachu.png", name: "Pikachu", skill: ["Charge", "Thunderbolt"], type: "electric", hp: 190 ,star:"★★★"},
    { imgscr: "image/charizard.png", name: "Charizard", skill: ["Claw Slash", "G max Wildfire"], type: "fire", hp: 330 ,star:"★★★★★★★"},
    { imgscr: "image/Blastoise.png", name: "Blastoise", skill: ["Solid Shell", "Twin Cannons"], type: "water", hp: 330 ,star:"★★★★★★"},
    { imgscr: "image/Venusaur.png", name: "Venusaur", skill: ["Tranquil Flower", "Dangerous toxwhip"], type: "glass", hp: 340 ,star:"★★★★★"}

]

let ascending = true;

let number_of_pokemon = 0;

function show_your_collection() {
    const container = document.getElementById('collection_container');
    container.innerHTML = ""; // clear previous content
    const new_pokemon_list = pokemonlist
    const new_container = container
    output_element(new_container,new_pokemon_list)
    calculate_total()
}

function get_element(){
    return {
        new_container: document.getElementById('collection_container'),
        new_card: document.getElementsByClassName("pokemon_card"),
        new_imgs: document.getElementsByClassName("pokemon_picture"),
        new_detail: document.getElementsByClassName("pokemon_detail"),
        new_name: document.getElementsByClassName("name"),
        new_skill: document.getElementsByClassName("skill"),
        new_type: document.getElementsByClassName("type"),
        new_hp: document.getElementsByClassName("hp"),
        new_star: document.getElementsByClassName("star"),
      };
}

function output_element(new_container,new_pokemon_list){
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

        const star = document.createElement('p');
        star.className = "star";
        star.textContent = "Star: " + pokemon.star;
    
        card.appendChild(new_img);
        detail.appendChild(name);
        detail.appendChild(skill);
        detail.appendChild(type);
        detail.appendChild(hp);
        detail.appendChild(star);
        card.appendChild(detail);
        new_container.appendChild(card);
    }

}

function input_new_list(new_pokemon_list,new_imgs,new_name,new_skill,new_type,new_hp,new_star){
    for(let i=0;i<new_name.length;i++){
        new_pokemon_list.push({
            imgscr: new_imgs[i].src,
            name: new_name[i].textContent.replace("Name: ", ""),
            skill: new_skill[i].textContent.replace("Skills: ", "").split(", "), // if skills are comma-separated text
            type: new_type[i].textContent.replace("Type: ", ""),
            hp: parseInt(new_hp[i].textContent.replace("HP: ", ""), 10),
            star: new_star[i].textContent.replace("Star: ", "")
          });
    }
}


function orderbyname(){
    const {new_container,new_card,new_imgs,new_detail,new_name,new_skill,new_type,new_hp,new_star} = get_element()
    const new_pokemon_list=[]
   input_new_list(new_pokemon_list,new_imgs,new_name,new_skill,new_type,new_hp,new_star)
    if(ascending){
        new_pokemon_list.sort((a, b) => a.name.localeCompare(b.name));
    }else{
        new_pokemon_list.sort((a, b) => b.name.localeCompare(a.name));
    }
    ascending = !ascending;  // toggle for next click
    output_element(new_container,new_pokemon_list)
    calculate_total()
}

function orderbyhp(){
    const {new_container,new_card,new_imgs,new_detail,new_name,new_skill,new_type,new_hp,new_star} = get_element()
    const new_pokemon_list=[]
    input_new_list(new_pokemon_list,new_imgs,new_name,new_skill,new_type,new_hp,new_star)
    if(ascending){
        new_pokemon_list.sort((a, b) => a.hp-b.hp);
    }else{
        new_pokemon_list.sort((a, b) => b.hp-a.hp);
    }

    ascending = !ascending;  // toggle for next click

    output_element(new_container,new_pokemon_list)
    calculate_total()
}

function calculate_total(){
    const new_name = document.getElementsByClassName("name")
    const title = document.getElementById("title")
    let number_of_pokemon = new_name.length
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
    const user_input_star = document.getElementById("add_star");

    const {new_container,new_card,new_imgs,new_detail,new_name,new_skill,new_type,new_hp,new_star} = get_element()
    const new_pokemon_list=[]
    input_new_list(new_pokemon_list,new_imgs,new_name,new_skill,new_type,new_hp,new_star)
    //add new pokemon
    const userinputstar = user_input_star.value
    let userstar = ""
    for(let i=0;i<userinputstar ; i++){

        userstar = userstar+"★" 
    }
    const outputstar = userstar

    if (!user_input_img.value || !user_input_name.value || !user_input_skill.value || !user_input_type.value || !user_input_hp.value) {
        // At least one is empty
        alert("Please fill in all fields");
    }else{
        new_pokemon_list.push({
            imgscr: user_input_img.value,       // get image URL string, not src property
            name: user_input_name.value,        // text in input field
            skill: user_input_skill.value.split(",").map(s => s.trim()), // split string to array
            type: user_input_type.value,
            hp: parseInt(user_input_hp.value, 10),
            star: outputstar
        });

    }

    document.querySelector('form').reset();
    output_element(new_container,new_pokemon_list)
    calculate_total()
}
show_your_collection()
calculate_total()
