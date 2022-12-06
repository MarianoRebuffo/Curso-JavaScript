let nombre= prompt("Hola Bienvenido a King.eloboost,Por favor ingrese su nombre");

boosting();
function boosting (){
  let producto;
  do{
    producto = parseInt(prompt("Hola " + nombre + "\nSeleccione el tipo de boosting:\n\n1 Diamante 4 - Diamante 1\n2 Diamante 1 - Maestro\n3 Maestro - Gran Maestro\n4 Gran Maestro - Retador"));
  } while(producto !=1 && producto !=2 && producto !=3 && producto !=4);
  switch(producto){
    case 1:
      return "Opcion 1";
    case 2:
      return "Opcion 2";
    case 3:
      return "Opcion 3";
    case 4:
      return "Opcion 4";
  }
}

tipo();
function tipo(){
  let tipo;
  do{
    tipo = parseInt(prompt ("Seleccione tipo de cola\n1 Soloqueue\n2 Flexqueue\n3 Professionalqueue"));
  } while (tipo !=1 && tipo !=2 &&tipo !=3);
  switch (tipo){
    case 1:
      return "Opcion 1";
    case 2:
      return "Opcion 2";
    case 3:
      return "Opcion 3";
  }
}

SoloDuo();
function SoloDuo(){
  let SoloDuo;
  do{
    SoloDuo= parseInt(prompt("Seleccione si quiere SoloBoosting o DuoBoosting\n1 Soloboosting\n2 DuoBoosting"));
  }while (SoloDuo !=1 && SoloDuo !=2);
    switch (SoloDuo){
      case 1:
        return "Opcion 1";
      case 2:
        return "Opcion 2";
    }
  }


pago();
function pago(){
  let pago;
  do{
    pago= parseInt(prompt ("Seleccione el medio de pago\n 1 MercadoPago\n2 Rapipago\n3 PagoFacil\n4 Paypal"));
    } while(pago !=1 && pago !=2 && pago !=3 && pago !=4);
    switch(pago){
      case 1:
        alert ("El precio de tu compra es $13300")
        break;
      case 2:
        alert ("El precio de tu compra es $31200")
        break;
      case 3:
        alert ("El precio de tu compra es $15200")
        break;
      case 4:
        alert ("El precio de tu compra es $14200")
        break;
    }
  }

gracias();
function gracias(nombre){
  alert ("Gracias por elegir nuestros servicios")

}