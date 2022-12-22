const deg = 6;
const hours = document.getElementById("hr");
const minits = document.getElementById("min");
const secands = document.getElementById("sc");


setInterval(() =>{
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

      hours.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`
      minits.style.transform = `rotateZ(${mm}deg)`
      secands.style.transform = `rotateZ(${ss}deg)`
})
