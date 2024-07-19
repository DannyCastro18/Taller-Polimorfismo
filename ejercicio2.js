class Panaderia{
    constructor(nombre,tipoPan,insumoPrincipal,cantidad,costo){ 
        this.nombre = nombre
        this.tipoPan = tipoPan
        this.insumoPrincipal = insumoPrincipal
        this.cantidad = cantidad
        this.costo = costo
    }

    get getInsumoPrincipal(){
        return this.insumoPrincipal
    }

    set setInsumoPrincipal(insumoPrincipal){
        this.insumoPrincipal = insumoPrincipal
    }

    get getCantidad(){
        return this.cantidad
    }

    set setCantidad(cantidad){
        this.cantidad = cantidad
    }

    get getCosto(){
        return this.costo
    }

    set setCosto(costo){
        this.costo = costo
    }

    informacionPan(){
        return `nombre:   ${this.nombre}   tipo:   ${this.tipoPan}  insumoPrincipal:   ${this.insumoPrincipal}   cantidad:   ${this.cantidad}   costo:   ${this.costo}`
    }
}

class Pan extends Panaderia{
    constructor(nombre,tipoPan,insumoPrincipal,cantidad,costo){
        super(nombre,tipoPan,insumoPrincipal,cantidad,costo)
    }

    informacionPan(){
        return `Nombre:  ${this.nombre}  
         Tipo:   ${this.tipoPan} 
         Insumo Principal:   ${this.insumoPrincipal}   
         Cantidad: ${this.cantidad}  
         Costo:   ${this.costo}`
    }

   
}
let objetoPan = new Pan ("Pan aliñado", "Sal", "Trigo", "50", "20000")
console.log (objetoPan.informacionPan());