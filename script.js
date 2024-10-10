async function Pokeapi(){
    let pokeapiURL= "https://pokeapi.co/api/v2/pokemon/";
    for(i = 1 ; i<=20 ; i++){

    try{
        const response = await fetch(pokeapiURL+i);
        const json = await response.json();
        crearPokemonCard(json);
    }catch(error){
        console.log(error);
    }
    }
}
Pokeapi();

function crearPokemonCard(data){
    console.log(data);
    console.log(data.id);
    const id = data.id;

    
        const main = document.getElementById('main');
        //Creacion de elementos necesarios para las cards de pokemon
        const article = document.createElement('article');
        article.classList.add('article');
        //intercalar colores de card segun id (par/impar)
        if (id % 2 >=1){
            article.classList.add('article-green')
        }

        
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article--div')
        
        const circle = document.createElement('div');
        circle.classList.add('article--div--circle');
        const img = document.createElement('img');
        img.classList.add('article--img');
        const imgPokemon = data.sprites.other.home.front_default;
        img.setAttribute('src' ,imgPokemon);//añadir imagen de pokemon


        const info = document.createElement('div');
        info.classList.add('article--div--info');

        //añadir nombre y pequeña descripcion
        const titulo = document.createElement('p');
        titulo.classList.add('article--div--info--titulo');
        const nombrePokemon = data.name.charAt(0).toUpperCase()+ data.name.slice(1)
        titulo.innerText = nombrePokemon;
        const descripcion = document.createElement('p');
        const altura = data.height ;
        const peso = data.weight;
        console.log(altura, peso);
        descripcion.classList.add('article--div--info--p');
        descripcion.innerText= `Altura: ${altura}\n\nPeso: ${peso}`;


        //asignar a elemento padre
        articleDiv.append(circle,img)
        info.append(titulo, descripcion);
        article.append(articleDiv,info);
        main.append(article);

}