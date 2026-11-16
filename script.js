
let edad = Number(prompt("¿Cuántos años tenés?"));
let sexo = prompt("¿Sos hombre o mujer?").toLowerCase();

if ((sexo === "mujer" && edad >= 60) || (sexo === "hombre" && edad >= 65)) {
    alert("¡Estás en edad de jubilarte!");
} else {
    alert("Todavía no estás en edad de jubilarte.");
}