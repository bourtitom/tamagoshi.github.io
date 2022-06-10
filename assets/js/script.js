// ici on appelle 
let inscription = document.getElementById('inscription');
let nom = document.getElementById('name');
let nomDoc = document.getElementById('nomDoc');
let bourse = document.getElementById('bourse');
let openShop = document.querySelector('.open-shop');
let shop = document.querySelector('.shop');
let closeUn = document.getElementById('closeUn');

let openBouf = document.getElementById('openBouf');
let openMoove = document.getElementById('openMoove');
let boufShop = document.getElementById('boufShop');
let MooveShop = document.getElementById('MooveShop');
let closeDeux = document.getElementById('closeDeux');
let animalerie = document.getElementById('animalerie');
let openAnimalerie = document.getElementById('openAnimalerie');
let createAni = document.getElementById('createAni');
let backInscrit = document.getElementById('back-inscrit');
let mesAnimeaux = document.getElementById('mesAnimeaux');

let foodMod = document.getElementById('bddFaim');
let amourMod = document.getElementById('bddAmour');
let tyerMod = document.getElementById('bddTyred');


let MaxFood = document.getElementById('MaxFood');
let MaxAmour = document.getElementById('MaxAmour');
let MaxTyred = document.getElementById('MaxTyred');

let btnManger = document.getElementById('btnManger');
let btnPlay = document.getElementById('btn-play');
let btnfight = document.getElementById('btn-fight');
let btnDODO = document.getElementById('btn-dodo');
let btnHUG = document.getElementById('btn-hug');
let btnCaresse = document.getElementById('btn-caresse');


// les systemes 

let ModManFood;
let ModManAmour;
let ModManTyred;

let money = 0;
bourse.innerText = money + "€";


// le constructor 

function CreateAnimal(race, nom, tune){
    this.age = 1;
    this.race =  race;
    if(this.race === "chien"){
        this.faim = 150;
        this.amour = 200;
        this.fatigue = 100;
        this.argent = 120;

    }else if(this.race === "chat"){
        this.faim = 100;
        this.amour = 200;
        this.fatigue = 100;
        this.argent = 140;

    }else if(this.race === "dragon"){
        this.faim = 500;
        this.amour = 250;
        this.fatigue = 500;
        this.argent = 1200;
    }else if(this.race === "cheval"){
        this.faim = 200;
        this.amour = 150;
        this.fatigue = 100;
        this.argent = 500;
    }else  {
        this.faim = 220;
        this.amour = 220;
        this.fatigue = 120;
        this.argent = 250;

    }
    this.nom = nom;

    money += this.argent;
    bourse.innerText = money + "€";

    MaxFood.innerHTML = this.faim;
    MaxAmour.innerHTML = this.amour;
    MaxTyred.innerHTML = this.fatigue;
    // le max est égales a ce qui est bien et le Mod c'est ce qui vas être modulable
    let ModManFood = Math.round(this.faim /4);
    let ModManAmour = Math.round(this.amour);
    let ModManTyred = Math.round(this.fatigue);
console.log(ModManFood)
    foodMod.innerHTML = ModManFood;
    amourMod.innerHTML = ModManAmour;
    tyerMod.innerHTML = ModManTyred;

// BTN manger actif / joué 
btnManger.addEventListener('click', function(){
    ModManFood += 10;
    foodMod.innerText = ModManFood;
    ModManTyred -= 10;
    tyerMod.innerText = ModManTyred;

})
// jouez
btnPlay.addEventListener('click', function(){
    ModManFood -= 2;
    foodMod.innerText = ModManFood;
    ModManAmour += 15;
    amourMod.innerText = ModManAmour;
    ModManTyred -= 10;
    tyerMod.innerText = ModManTyred;

})

// combattre
btnfight.addEventListener('click', function(){
    ModManFood -= 2;
    foodMod.innerText = ModManFood;
    ModManTyred -= 10;
    tyerMod.innerText = ModManTyred;
    money += 25;
    bourse.innerText = money + "€";

})

// dodo
btnDODO.addEventListener('click', function(){
    ModManFood -= 10;
    foodMod.innerText = ModManFood;
    ModManTyred += 10;
    tyerMod.innerText = ModManTyred;
})
// calin
btnHUG.addEventListener('click', function(){
    ModManAmour += 15;
    amourMod.innerText = ModManAmour;
    ModManTyred -= 10;
    tyerMod.innerText = ModManTyred;
})

btnCaresse.addEventListener('click', function(){
    ModManAmour += 10;
    amourMod.innerText = ModManAmour;
    ModManTyred -= 5;
    tyerMod.innerText = ModManTyred;
})


 // la taxe xd
setInterval(function() { 
    console.log('La taxe'); 
    ModManFood -= 10;
    foodMod.innerText = ModManFood;
    ModManAmour -= 15;
    amourMod.innerText = ModManAmour;
    ModManTyred -= 10;
    tyerMod.innerText = ModManTyred;
    money -= 10;
    bourse.innerText = money + "€";
}, 30000);


}





// mes animeaux 

let tabmesanim = [];

// fin de mes animeaux


// news animals

let x = document.getElementById("choose-race");
let i = x.selectedIndex;

document.querySelector("#create").addEventListener("click", function(event) {
    
    event.preventDefault();
    if(!nom.value){
        alert('veuillez Mettre Un Nom correcte !');
    }else{
        if(x.selectedIndex === 0){
            alert('mettez une option valide');
        }else{
            alert('Votre Animal a été créer !');
            let nouvelAnimal = new CreateAnimal(x.options[i].value, nom.value);


            tabmesanim.push(nouvelAnimal);
            console.log(tabmesanim);
            nomDoc.innerText = nom.value;
            document.querySelector('#back-inscrit').style.display = "none";
            animalerie.style.display = "block";
            créon(nom.value, x.value);
        }
    }
    
}, false);


// button pour le shop

let classes = shop.classList;

openShop.addEventListener('click', function() {
    classes.toggle("deroule");
    setTimeout(function(){
        closeUn.style.display = 'block';
    }, 1000);
})

closeUn.addEventListener('click', function () {
    classes.toggle("deroule");
    closeUn.style.display = "none";

})


openBouf.addEventListener('click', function () {
    MooveShop.style.display = "none";
    boufShop.style.display = "flex";

})

openMoove.addEventListener('click', function () {
    boufShop.style.display = "none";
    MooveShop.style.display = "flex";

})

closeDeux.addEventListener('click', function(){
    animalerie.style.display = "none";
})
openAnimalerie.addEventListener('click', function(){
    animalerie.style.display = "block";

})

createAni.addEventListener('click', function(){
    backInscrit.style.display = "block";
    animalerie.style.display = "none";

})



// function create element pour generé un block dans l'animalerie 

function créon(prenom, race ) {


      // crée un nouvel élément div
      let art = document.createElement('article');
      let bloc = document.createElement('div');
      let nom = document.createElement('h4');
      let age = document.createElement('h4');
      let racee = document.createElement('h4');
      // et lui donne un peu de contenu
      bloc.classList = "blocCatArie";
      art.classList = "ArtAnimalerie";
      nom.innerText = "prenom : " + prenom;
      age.innerText = " age : " + 1;
      racee.innerText = "race : " + race;
      
      // ajoute le nœud texte au nouveau div créé
      mesAnimeaux.appendChild(art).appendChild(bloc);    
      mesAnimeaux.appendChild(art).appendChild(nom);    
      mesAnimeaux.appendChild(art).appendChild(age);    
      mesAnimeaux.appendChild(art).appendChild(racee);    
    }

    



    /// function + 




