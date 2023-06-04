
let dia = Number(prompt("Ingresa el día de tu nacimiento:"))
let mes = Number(prompt("Ingresa el mes de tu nacimiento:"))

let signo = obtenerSigno(dia, mes)

function obtenerSigno(dia, mes) {
  while (dia <= 31 && mes <= 12)

  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
      return "Acuario"
  } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
      return "Piscis"
  } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
      return "Aries"
  } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
      return "Tauro"
  } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
      return "Geminis"
  } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
      return "Cancer"
  } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
      return "Leo"
  } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
      return "Virgo"
  } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
      return "Libra"
  } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
      return "Escorpio"
  } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
      return "Sagitario"
  } else if ("Capricornio")
      return
} 

alert("Tu signo del zodiaco es: " + signo)
alert("Graciela por participar\npa la semana que viene te paso los numeros de el 5 de ORO jaja ")
