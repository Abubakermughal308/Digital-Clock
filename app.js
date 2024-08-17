function clock() {
    
    let monthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date()
    document.getElementById('date').innerHTML = (daysName[date.getDay()] + " " + date.getDate() + " " + monthName[date.getMonth()] + " " + date.getFullYear())
    console.log(date);

    let h = date.getHours();
    let min = date.getDate();
    let sec = date.getSeconds();



    h = h<10 ? "0"+h: h
    min = min<10 ? "0"+min : min;
    sec = sec<10 ? "0"+sec : sec;

    document.getElementById("hours").innerHTML = h
    document.getElementById("minutes").innerHTML = min
    document.getElementById("seconds").innerHTML = sec
}
let interval = setInterval(clock, 500)
