// SUBSCRIPCIÓN PLUS PARA VER LA FINAL DEL MUNDIAL

const subBase = "Subscripción Paquete Básico"
const subHD = "Subscripción Paquete HD"
const sub4K = "Subscripción Paquete 4K"
const sub4KPremium = "Subscripción Paquete 4K Premium"
const subBasePrecio = 1000
const subHDPrecio = 2000
const sub4KPrecio = 3000
const subPremium4KPrecio = 5000
let usuarioCuenta = "gasacosta@gmail.com"
let contraseniaCuenta = "GastonAcosta"
const nombre = prompt("Ingrese su nombre")
const edadDelUsuario = prompt("Ingrese su edad")
const usuario = prompt("Ingrese su correo electrónico")
const contrasenia = prompt("Ingrese su contraseña")
let tieneTarjetaDeCredito = true
const mayoriaDeEdad = 18

// LOG IN

if (usuarioCuenta == usuario && contraseniaCuenta == contrasenia) {
    alert(`¡Ingreso exitoso! Bienvenido, ${nombre}.`)
}else{
    alert("El usuario o contraseña ingresado no es correcto. Por favor, inténtelo de nuevo.")
}

// ALERTA SEGURIDAD DE CONTRASEÑA (Para validar si los datos ingresados son seguros)

for (let i = 0; i < contraseniaCuenta.length; i++){
    if (i < 8){
        alert(`Su contraseña no es segura. Debe superar un mínimo de 8 caracteres.`)
    }
    break;
}

// DAR LA BIENVENIDA

console.log(`¡Bienvenido, ${nombre}! Estás cada vez más cerca de acceder a tu paquete especial para la Final del Mundial de Qatar 2022.`)

// EDAD DEL USUARIO

console.log(`Usted tiene ${edadDelUsuario} años.`)

// ¿PUEDE ACCEDER A UN PAQUETE DE SUBSCRIPCIÓN?

if (edadDelUsuario >= mayoriaDeEdad && tieneTarjetaDeCredito){
    console.log("Usted puede contratar este paquete.")
} else{
    console.log("Usted no puede contratar este paquete.")
}

// ¿CUÁL ES EL PAQUETE QUE QUIERE CONTRATAR?

switch ( subBase ){
    case "Subscripción Paquete Básico":
        console.log("Usted seleccionó el Paquete Básico.")
    break;
    case "Subscripción Paquete HD":
        console.log("Usted seleccionó el Paquete HD.")
    break;
    case "Subscripción Paquete 4K":
        console.log("Usted seleccionó el Paquete 4K.")
    break;
    case "Subscripción Paquete 4K Premium":
        console.log("Usted seleccionó el Paquete 4K Premium.")
    break;
    default:
        console.log("Usted no seleccionó ningún Paquete.")
}

// ¿CUÁNTO CUESTA EL PAQUETE QUE QUIERE CONTRATAR?

if (subBase === subBase){
    console.log(`El paquete ${subBase} cuesta $${subBasePrecio}.`)
}

// HASTA 3 CUOTAS SIN INTERÉS

function dividir2Cuotas(a, b){
    return console.log(`Pago en 2 cuotas sin interés: $${subBasePrecio/2}.`)
}

dividir2Cuotas(subBasePrecio, 2)

function dividir3Cuotas(a, b){
    return console.log(`Pago en 3 cuotas sin interés: $${subBasePrecio/3}.`)
}

dividir3Cuotas(subBasePrecio, 3)

// DE 4 A 6 CUOTAS CON 5% DE INTERÉS EN C/ CUOTA

function dividir4Cuotas(a, b){
    return console.log(`Pago en 4 cuotas: $${subBasePrecio/4}.`)
}

dividir4Cuotas(subBasePrecio, 4)

function IVA4Cuotas(a, b){
    return console.log(`Si elige pagar en 4 veces, su cuota, con IVA incluido, costará: $${250*1.05}.`)
}

IVA4Cuotas(250, 1.05)

function valorTotal4Cuotas(a, b){
    return console.log(`Abonando la Subscripción Paquete Básico en 4 Cuotas, el pago total es de: $${262.5*4}.`)
}

valorTotal4Cuotas(262.5, 4)

function dividir5Cuotas(a, b){
    return console.log(`Pago en 5 cuotas: $${subBasePrecio/5}.`)
}

dividir5Cuotas(subBasePrecio, 5)

function IVA5Cuotas(a, b){
    return console.log(`Si elige pagar en 5 veces, su cuota, con IVA incluido, costará: $${200*1.05}.`)
}

IVA5Cuotas(200, 1.05)

function valorTotal5Cuotas(a, b){
    return console.log(`Abonando la Subscripción Paquete Básico en 5 Cuotas, el pago total es de: $${210*5}.`)
}

valorTotal5Cuotas(210, 5)

function dividir6Cuotas(a, b){
    return console.log(`Pago en 6 cuotas: $${subBasePrecio/6}.`)
}

dividir6Cuotas(subBasePrecio, 6)

function IVA6Cuotas(a, b){
    return console.log(`Si elige pagar en 6 veces, su cuota, con IVA incluido, costará: $${166.66666666666666*1.05}.`)
}

IVA6Cuotas(166.6, 1.05)

function valorTotal6Cuotas(a, b){
    return console.log(`Abonando la Subscripción Paquete Básico en 6 Cuotas, el pago total es de: $${174.93*6}.`)
}

valorTotal6Cuotas(174.93, 6)
