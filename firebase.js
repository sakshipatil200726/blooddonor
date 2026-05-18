window.getLocation = function () {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

      function (position) {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        document.getElementById("location")
        .innerHTML =
        "Latitude: " + lat +
        "<br>Longitude: " + lon;

        document.getElementById("mapFrame")
        .src =
        `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;

      },

      function (error) {

        alert("Location permission denied");

      }

    );

  } else {

    alert("Geolocation not supported");

  }

};
let generatedOTP = "";

window.sendOTP = function(){

generatedOTP =
Math.floor(1000 + Math.random() * 9000);

alert(
"OTP Sent: " + generatedOTP
);

};

window.verifyOTP = function(){

const userOTP =
document.getElementById("otpInput").value;

if(userOTP == generatedOTP){

alert("OTP Verified ✅");

}else{

alert("Wrong OTP ❌");

}

};
window.checkEligibility = function(){

const age =
document.getElementById("age").value;

const weight =
document.getElementById("weight").value;

const days =
document.getElementById("days").value;

if(age >= 18 &&
   weight >= 50 &&
   days >= 90){

document.getElementById(
"eligibilityResult"
).innerHTML =
"Eligible ✅";

}else{

document.getElementById(
"eligibilityResult"
).innerHTML =
"Not Eligible ❌";

}

};