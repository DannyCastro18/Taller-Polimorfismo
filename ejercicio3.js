class Silos {
  constructor(tipo, cantidad, cliente, diasAlmacenamiento, epocaMes) {
    this.tipo = tipo;
    this.cantidad = cantidad;
    this.cliente = cliente;
    this.diasAlmacenamiento = diasAlmacenamiento;
    this.epocaMes = epocaMes;
    this.costoBasico = 2000;
  }

  calcularPrecio() {
    let costoB = this.diasAlmacenamiento * this.costoBasico;
    let Adicional;

    if (this.epocaMes >= 1 && this.epocaMes <= 6) {
      Adicional = 15000;
    } else if (this.epocaMes >= 7 && this.epocaMes <= 12) {
      Adicional = 25000;
    }

    this.precioTotal = costoB + Adicional;
    console.log(
      `Cliente: ${this.cliente} 
      Pago total: ${this.precioTotal} pesos 
      Días de almamcenamiento: ${this.diasAlmacenamiento}
      Mes: ${this.epocaMes}
      Tipo de Grano : ${this.tipo}`
    );
  }
}

const silo = new Silos("Avena", 5000, "Alexander CasteBlanco", 27, 4);
silo.calcularPrecio();
