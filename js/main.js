$(document).ready(function() {
  $("#inputMass, #fromMass, #toMass").on("keyup change", function() {
    var a = $("#inputMass").val();
    if (isNaN(a)) {
      return false;
    } else {
      if ($("#fromMass").val() === $("#toMass").val()) {
        $("#outputMass").val(a);
      } else if (
        $("#fromMass").val() === "kilograms" &&
        $("#toMass").val() === "grams"
      ) {
        $("#outputMass").val(a * 1000);
      } else if (
        $("#fromMass").val() === "kilograms" &&
        $("#toMass").val() === "pounds"
      ) {
        $("#outputMass").val(a * 2.205);
      } else if (
        $("#fromMass").val() === "grams" &&
        $("#toMass").val() === "kilograms"
      ) {
        $("#outputMass").val(a / 1000);
      } else if (
        $("#fromMass").val() === "grams" &&
        $("#toMass").val() === "pounds"
      ) {
        $("#outputMass").val(a / 453.592);
      } else if (
        $("#fromMass").val() === "pounds" &&
        $("#toMass").val() === "grams"
      ) {
        $("#outputMass").val(a * 453.92);
      } else if (
        $("#fromMass").val() === "pounds" &&
        $("#toMass").val() === "kilograms"
      ) {
        $("#outputMass").val(a / 2.205);
      }
    }
  });

  $("#inputMass, #fromMass, #toMass").on("keyup change", function() {
    var a = $("#inputMass").val();
    if (isNaN(a)) {
      return false;
    } else {
      if ($("#fromMass").val() === $("#toMass").val()) {
        $("#outputMass").val(a);
      } else if (
        $("#fromMass").val() === "kilograms" &&
        $("#toMass").val() === "grams"
      ) {
        $("#outputMass").val(a * 1000);
      } else if (
        $("#fromMass").val() === "kilograms" &&
        $("#toMass").val() === "pounds"
      ) {
        $("#outputMass").val(a * 2.205);
      } else if (
        $("#fromMass").val() === "grams" &&
        $("#toMass").val() === "kilograms"
      ) {
        $("#outputMass").val(a / 1000);
      } else if (
        $("#fromMass").val() === "grams" &&
        $("#toMass").val() === "pounds"
      ) {
        $("#outputMass").val(a / 453.592);
      } else if (
        $("#fromMass").val() === "pounds" &&
        $("#toMass").val() === "grams"
      ) {
        $("#outputMass").val(a * 453.92);
      } else if (
        $("#fromMass").val() === "pounds" &&
        $("#toMass").val() === "kilograms"
      ) {
        $("#outputMass").val(a / 2.205);
      }
    }
  });

  $("#inputLength, #fromLength, #toLength").on("keyup change", function() {
    var a = $("#inputLength").val();
    if (isNaN(a)) {
      return false;
    } else {
      if ($("#fromLength").val() === $("#toLength").val()) {
        $("#outputLength").val(a);
      } else if (
        $("#fromLength").val() === "centimetres" &&
        $("#toLength").val() === "metres"
      ) {
        $("#outputLength").val(a * 0.01);
      } else if (
        $("#fromLength").val() === "centimetres" &&
        $("#toLength").val() === "miles"
      ) {
        $("#outputLength").val(a / 160934.4);
      } else if (
        $("#fromLength").val() === "metres" &&
        $("#toLength").val() === "centimetres"
      ) {
        $("#outputLength").val(a * 100);
      } else if (
        $("#fromLength").val() === "metres" &&
        $("#toLength").val() === "miles"
      ) {
        $("#outputLength").val(a / 1609.344);
      } else if (
        $("#fromLength").val() === "miles" &&
        $("#toLength").val() === "centimetres"
      ) {
        $("#outputLength").val(a * 160934.4);
      } else if (
        $("#fromLength").val() === "miles" &&
        $("#toLength").val() === "metres"
      ) {
        $("#outputLength").val(a * 1609.344);
      }
    }
  });

  $("#inputTime, #fromTime, #toTime").on("keyup change", function() {
    var a = $("#inputTime").val();
    if (isNaN(a)) {
      return false;
    } else {
      if ($("#fromTime").val() === $("#toTime").val()) {
        $("#outputTime").val(a);
      } else if (
        $("#fromTime").val() === "seconds" &&
        $("#toTime").val() === "minutes"
      ) {
        $("#outputTime").val(a / 60);
      } else if (
        $("#fromTime").val() === "seconds" &&
        $("#toTime").val() === "hours"
      ) {
        $("#outputTime").val(a / 3600);
      } else if (
        $("#fromTime").val() === "minutes" &&
        $("#toTime").val() === "seconds"
      ) {
        $("#outputTime").val(a * 60);
      } else if (
        $("#fromTime").val() === "minutes" &&
        $("#toTime").val() === "hours"
      ) {
        $("#outputTime").val(a / 60);
      } else if (
        $("#fromTime").val() === "hours" &&
        $("#toTime").val() === "seconds"
      ) {
        $("#outputTime").val(a * 3600);
      } else if (
        $("#fromTime").val() === "hours" &&
        $("#toTime").val() === "minutes"
      ) {
        $("#outputTime").val(a * 60);
      }
    }
  });
}); //document ready
