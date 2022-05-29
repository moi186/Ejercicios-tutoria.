var numero;

var participanteNumero = 20;

var numeroUno = 30;
var numeroDos = 70;

var total = numeroUno + numeroDos;
document.write(total);

/*Así se hace un comentario en Js*/

/* para enviar un mensaje a la consola se utiliza*/
/* 
alert(total); */

var misHobbies = [
    "tocar Guitarra", "comer", "hacer ejercicio", "correr", "leer", "caminar",
    "practicar boxeo ", "jugar CoC ", "practicar Código ", "apreder cosas nuevas ",
    "ir a la iglesia ", "pasar tiempo con mi familia ", "ver a mi hijo ", "divertirme ", "orar "
];

console.log(misHobbies);

persona = {
    nombre: "plutarco",
    edad: 23,
    género: "masculino",
    música: "rock alternativo",
    pasatiempos: "tocar en la banda",
    tienesHijos: true,
    nacionalidad: "Costarricense",
    cédula: "1-0459-0361"
}

console.log(persona);
console.log(persona.nombre);


personas = [{
    nombre: "junior",
    edad: 13,
    género: "masculino",
    música: "rock",
    pasatiempos: "practicar guitarra",
    tienesHijos: false,
    nacionalidad: "Costarricense",
    cédula: "5-0459-0492"
}, {
    nombre: "ramiro",
    edad: 23,
    género: "masculino",
    música: "heavy metal",
    pasatiempos: "tocar batería",
    tienesHijos: true,
    nacionalidad: "costarricense",
    cédula: "2-0459-0536"
}, {
    nombre: "marco",
    edad: 20,
    género: "femenino",
    música: "pop rock",
    pasatiempos: "tocar el teclado",
    tienesHijos: true,
    nacionalidad: "Costarricense",
    cédula: "3-0459-0361"
}, {
    nombre: "crecencio",
    edad: 32,
    género: "masculino",
    música: "grunge",
    pasatiempos: "irse de fiesta",
    tienesHijos: true,
    nacionalidad: "Costarricense",
    cédula: "5-0732-0361"
}, {
    nombre: "mariana",
    edad: 25,
    género: "femenino",
    música: "rock simfónico",
    pasatiempos: "bailar ballet",
    tienesHijos: true,
    nacionalidad: "Costarricense",
    cédula: "1-0593-0321"
}, {
    nombre: "jerico",
    edad: 45,
    género: "masculino",
    música: "rancheras",
    pasatiempos: "cultivar en el campo",
    tienesHijos: true,
    nacionalidad: "Costarricense",
    cédula: "7-0859-0951"
}, {
    nombre: "eufemia",
    edad: 52,
    género: "femenino",
    música: "romantica",
    pasatiempos: "estar con su familia",
    tienesHijos: false,
    nacionalidad: "Costarricense",
    cédula: "6-0485-0911"
}, {
    nombre: "javier",
    edad: 27,
    género: "masculino",
    música: "house",
    pasatiempos: "tocar guitarra",
    tienesHijos: true,
    nacionalidad: "Costarricense",
    cédula: "1-0228-0361"
}, {
    nombre: "olivia",
    edad: 25,
    género: "femenino",
    música: "clasica",
    pasatiempos: "tocar el violín",
    tienesHijos: false,
    nacionalidad: "Costarricense",
    cédula: "1-0765-0251"
}, {
    nombre: "carolina",
    edad: 18,
    género: "femenino",
    música: "electronica",
    pasatiempos: "tocar en la banda",
    tienesHijos: false,
    nacionalidad: "Costarricense",
    cédula: "1-0956-0861"
}]

console.log(personas);
console.log(personas[0]);
console.log(personas[0].nombre);


personas.forEach(element => {
    console.log(element)
});