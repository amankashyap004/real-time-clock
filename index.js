function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    
    let dd = today.getDate()
    let mm = today.getMonth()
    let yy = today.getFullYear()
    
    m = checkTime(m);
    s = checkTime(s);

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[today.getDay()] 

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthsFull = months[today.getMonth()]

    let timeOutput = document.getElementById('time-output')
    timeOutput.innerText =  h + " : " + m + " : " + s;

    let dayOutput = document.getElementById('day-output')
    dayOutput.innerText = day+ " : " + monthsFull;

    let dateOutput = document.getElementById('date-output')
    dateOutput.innerText =  dd + " : " + mm + " : " + yy;

    setTimeout(startTime, 1000);
  }

  // add zero in front of numbers < 10
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    };  
    return i;
  }