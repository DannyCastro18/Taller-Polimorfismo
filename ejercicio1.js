class Herramienta{
    constructor(nombre){
        this.nombre = nombre
    }
    estado(){
        return `${this.nombre}: Las herramientas son necesarias para tareas de mantenimiento `
    }

}
class Herramienta2 extends Herramienta{
    constructor(nombre){
       super(nombre)
    }
    estado(){
        return `${this.nombre}: Las herramientas mecánicas son básicas y manejables`
    }
}
class Herramienta3 extends Herramienta{
    constructor(nombre){
        super(nombre)
    }
    estado(){
        return `${this.nombre}: Las herramientas eléctricas o electrónicas son de alta precisión`
    }
   
   
}


let objeto = new Herramienta("Martillo")
console.log(objeto.estado())

let objeto2 = new Herramienta2("Destornillador")
console.log(objeto2.estado())

let objeto3 = new Herramienta3("Taladro")
console.log(objeto3.estado())