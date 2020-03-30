function Convertir() {
  var numConv = 0;
  var C = $("#txtCelsius").val();
  var F = $("#txtFahrenheit").val();
  var msj = "";
  if (C.trim() == "") {
    if (F.trim() == "") {
      msj = "No ha ingresado datos, intente de nuevo.";
    } else {
      numConv = (parseFloat(F) - 32) * (5 / 9);
      C = "" + numConv;
      msj = F + " F° son : " + numConv + " C°";
    }
  } else {
    numConv = parseFloat(C) * (9 / 5) + 32;
    F = "" + numConv;
    msj = C + " C° son : " + numConv + " F°";
  }
  if (numConv != 0) {
    $("#txtCelsius").val("");
    $("#txtFahrenheit").val("");
    var htmlTags =
      "<tr>" + "<td>" + C + "</td>" + "<td>" + F + "</td>" + "</tr>";
    $("#gradosConvertidos tbody").append(htmlTags);
  }

  alert(msj);
}
function dia() {
  var dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var msj = "";
  date = new Date($("#txtFecha").val());
  msj =
    "La fecha selecciona es:  " +
    $("#txtFecha").val() +
    "\n El dia de la semana es: " +
    dias[date.getUTCDay()] +
    "\n The date " +
    $("#txtFecha").val() +
    " is the day of the week " +
    days[date.getUTCDay()];
  var htmlTags =
    "<tr>" +
    "<td>" +
    $("#txtFecha").val() +
    "</td>" +
    "<td>" +
    dias[date.getUTCDay()] +
    "</td>" +
    "<td>" +
    days[date.getUTCDay()] +
    "</td>" +
    "</tr>";
  $("#GwFechas tbody").append(htmlTags);
  alert(msj);
}
