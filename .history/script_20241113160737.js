const days=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minutes=document.querySelector('#minutes');
const seconds=document.querySelector('#seconds');

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

setInterval(()=>{
    const currentDate = new Date();
    const newYearDate = new Date('January 01 ${nextYear} 00:00:00');
    const totalSeconds =(newYearDate-currentDate)/1000;

    const daysLeft = Math.floor(totalSeconds / 3600 / 24);
    const hoursleft = Math.floor(totalSeconds / 3600) % 24;
    const minutesLeft = Math.floor(totalSeconds /60) % 60;
     const secondsLeft = Math.floor(totalSeconds) % 60;
    
     days.innerHTML = daysLeft;
     hours.innerHTML = hoursleft;
     minutes.innerHTML = minutesLeft;
     seconds.innerHTML = 
    
    })
