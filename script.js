const name = document.getElementById("name");
const price = document.getElementById("price");
const description = document.getElementById("description");
const calories = document.getElementById("calories");

let datos=[];
let pos = 0;

function ObjetoDatos(name, price, description, calories) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.calories = calories;
}

window.onload = () => {
    // Carga XML
    let myXml = new DOMParser().parseFromString(datosFichero, "text/xml");
    //console.log(myXml);
    const name = myXml.getElementsByTagName("name");
    const price = myXml.getElementsByTagName("price");
    const description = myXml.getElementsByTagName("description");
    const calories = myXml.getElementsByTagName("calories");

    for (let i = 0; i < name.length; i++) {
        datos[i] = new ObjetoDatos(name.item(i).firstChild.nodeValue, price.item(i).firstChild.nodeValue, description.item(i).firstChild.nodeValue, calories.item(i).firstChild.nodeValue);
    }
    visualizarEnPosicion(0); 
}

function visualizarEnPosicion(posicion) {
    pos = posicion; // Cambia la posición global por la que está visualizando.
    console.log(pos);
    //console.log(pos)
    let foods = datos[posicion];
    //console.log(foods)
    // Si no existe un dato en la posición actual lo reemplaza por un objeto con datos vacios.
    if (foods === undefined) foods = new ObjetoDatos("", "", "", "", "");

    name.value = foods.name;
    price.value = foods.price;
    description.value = foods.description;
    calories.value = foods.calories;

}




