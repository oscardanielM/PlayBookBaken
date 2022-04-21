console.log("OBJETOS")

console.log("// Ejemplo 1: Crear un objeto")// Ejemplo 1: Crear un objeto
const object1 = {}
console.log(object1)
console.log("")

console.log("// Ejemplo 2: Crear un objeto con propiedades")// Ejemplo 2: Crear un objeto con propiedades
const object2 = {
  nombre: "Oscar",
  edad: 25,
  correo : "oscarskapee@gmail.com"
}
console.log(object2)
console.log("")

console.log("// Ejemplo 3: Objeto con diferentes propiedades")
const object3 = {
    nombre: "Oscar",
    edad: 25,
    correo : "oscarskapee@gmail.com",
    gustos : {
        peliculas: [{
            pelicula:"La vida es bella",
            calificacion: 10
        },
        {
            pelicula:"El cadaver de la novia",
            calificacion: 10
        }]
    }
}

console.log(object3)
console.log("nombre:" + object3.nombre)
console.log("Pelicula 2:" + object3.gustos.peliculas[1].pelicula)
console.log("")

// Ejemplo 4: Objeto con métodos
const object4 = {
  nombre: "Oscar",
  // Esta es una función que se guarda como propiedad
  diHola: function(){
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.nombre} te saluda en español!`)
  }
}

console.log("Ejemplo 4: Objeto con métodos")
object4.diHola()

// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
  name: "Woopa",
  sayHelloToMyPet: function(yourPet){
    console.log(`${this.name} say's hello to ${yourPet}`)
  }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Oscar")