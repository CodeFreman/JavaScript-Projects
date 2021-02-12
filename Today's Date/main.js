// Current Date and Time

let today = new Date();

let day = today.getDay();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();

let currentDate = `${month}/${date}/${year}`;

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

document.write( `${daylist[day]}, ${currentDate}, `);

if (hours >= 12) {
  document.write(`${hours - 12}:${minutes}:${seconds} PM`);
}
  else {
    document.write(`${hours}:${minutes}:${seconds} AM`);
  }





