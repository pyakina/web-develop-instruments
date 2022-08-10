
let hour = document.querySelector(".hours");
let min = document.querySelector(".minutes");
let sec = document.querySelector(".seconds");
console.log(min.value)
var sound = new Howl({
  src: ['sound.mp3']
});
var endDate = new Date().getTime() + hour.value*60*60*1000 + min.value*60*1000 + sec.value*1000;

// событие нажатия кнопки старт
let start = document.querySelector('.timer_button');
console.log(start)  
start.addEventListener("submit", timer);     
var timer = setInterval(function() {
let now = new Date().getTime();

// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
let num = endDate - now;
 
if (num >= 0) {
  const hours = num > 0 ? Math.floor(num / 1000 / 60 / 60) % 24 : 0;
  const minutes = num > 0 ? Math.floor(num / 1000 / 60) % 60 : 0;
  const seconds = num > 0 ? Math.floor(num / 1000) % 60 : 0;
  hour.value = hour < 10 ? '0' + hours : hours;
  min.value = min < 10 ? '0' + minutes : minutes;
  sec.value = sec < 10 ? '0' + seconds : seconds;

  } else {
    

    alert("Время вышло!");
    sound.play();
  }
}, 1000);


  
  
