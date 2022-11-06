document.getElementById("bGrabar").onclick = () => {
    datos.push(new ObjetoDatos(name.value, price.value, description.value, calories.value));
    alert("Grabado: " + name.value);
    visualizarEnPosicion(datos.length-1); // Última posición.
}
document.getElementById("bModificar").onclick = () => {
    datos[pos] = new ObjetoDatos(name.value, price.value, description.value, calories.value);
}
document.getElementById("bBorrar").onclick = () => {
    datos.splice(pos, 1);
    visualizarEnPosicion(Math.max(0, pos-1)); // Posición anterior o 0 si es menor que 0.
}
document.getElementById("bSiguiente").onclick = () => {
    visualizarEnPosicion(Math.min(pos+1, datos.length-1)); // Posición siguiente o última si es mayor que la última.
}

// Cambia la posición al anterior elemento y lo visualiza.
document.getElementById("bAnterior").onclick = () => {
    visualizarEnPosicion(Math.max(0, pos-1)); // Posición anterior o 0 si es menor que 0.
}
document.getElementById("bTabla").onclick = () => {
    let cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = ""; // Borra la tabla

    for (let dato of datos) {
        let tr = document.createElement("tr");

        // Recorre todas las variables del dato (ObjetoDatos), crea un elemento (td) para cada variable y lo añade a la línea (tr).
        for (let d in dato) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(dato[d]));
            tr.appendChild(td);
        }
        
        cuerpo.appendChild(tr);
    }

    document.getElementById("tabla").appendChild(cuerpo); 
}