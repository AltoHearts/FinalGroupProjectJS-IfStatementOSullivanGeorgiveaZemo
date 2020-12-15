function myFunction()
 {
 var morning = document.getElementById("morn");
 var day = document.getElementById("day");
 var evening = document.getElementById("eve");
  var time = new Date().getHours();
  if (time < 10) {
    morning.style.display = "block";
  } else if (time < 20) {
    day.style.display = "block";
  } else {
    evening.style.display = "block";
  }
}
