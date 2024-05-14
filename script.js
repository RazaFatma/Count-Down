// let hrs = document.getElementById("hrs");
// let min = document.getElementById("min");
// let sec = document.getElementById("sec");

// setInterval(() => {
//   let currentTime = new Date();

//   hrs.innerHTML = currentTime.getHours();
//   min.innerHTML = currentTime.getMinutes();
//   sec.innerHTML = currentTime.getSeconds();
// }, 1000);

// let days = document.getElementById("days");
// let hours = document.getElementById("hours");
// let minutes = document.getElementById("minutes");
// let second = document.getElementById("second");

// let dd = document.getElementById("dd");
// let hh = document.getElementById("hh");
// let mm = document.getElementById("mm");
// let ss = document.getElementById("ss");

// let day_dot = document.querySelector(".day_dot");
// let hr_dot = document.querySelector(".hr_dot");
// let min_dot = document.querySelector(".min_dot");
// let sec_dot = document.querySelector(".sec_dot");

// let endDate = "14/06/2024 00:00:00";
// // date format mm/dd/yyyy

// let x = setInterval(function () {
//   let now = new Date(endDate).getTime();
//   let countDown = new Date().getTime();
//   let distance = now - countDown;
//   //time calculation for days, hours, minutes and seconds
//   let d = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let s = Math.floor((distance % (1000 * 60)) / 1000);
//   // output the result in element with id

//   days.innerHTML = d + "<br><span>Days<span>";
//   hours.innerHTML = h + "<br><span>Hours<span>";
//   minutes.innerHTML = m + "<br><span>minutes<span>";
//   second.innerHTML = s + "<br><span>Seconds<span>";

//   //animte stroke
//   dd.style.
// });

// var countDownDate = new Date("June 01, 2024 00:00:00").getTime();
// var x = setInterval(function () {
//   var now = new Date().getTime();
//   var distance = countDownDate - now;

//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("days").innerHTML = days;
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("minutes").innerHTML = minutes;
//   document.getElementById("seconds").innerHTML = seconds;

//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("days").innerHTML = "00";
//     document.getElementById("hours").innerHTML = "00";
//     document.getElementById("minutes").innerHTML = "00";
//     document.getElementById("seconds").innerHTML = "00";
//   }
// }, 1000);

let countDownDate = new Date("June 14, 2024 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
