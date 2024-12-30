const launchDate = new Date('2025-01-01T00:00:00').getTime();
 const daysEl = document.getElementById("days");
 const hoursEl = document.getElementById("hours");
 const minsEl = document.getElementById("mins");
 const secsEl = document.getElementById("secs");


const updateTimer = () => {
    const now = new Date().getTime();
    const diff = launchDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor( (diff % (1000 * 60 * 60 * 24) ) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor( (diff % (1000 * 60)) / 1000 );


    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);
}

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateTimer, 1000);