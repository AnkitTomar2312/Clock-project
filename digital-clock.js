function clock() {
    var hours = document.getElementById("hrs");
    var minutes = document.getElementById("mins");
    var seconds = document.getElementById("secs");
    var am = document.getElementById("am");
    var hour = new Date()
    var a = hour.getHours() > 12 && hour.getHours() < 24 ? hour.getHours() - 12 : hour.getHours();
    var b = hour.getMinutes() < 10 ? "0" + hour.getMinutes() : hour.getMinutes();
    var c = hour.getSeconds() < 10 ? "0" + hour.getSeconds() : hour.getSeconds();
    var d = hour.getHours() > 12 && hour.getHours() < 24 ? "PM" : "AM";
    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
    am.innerHTML = d;
   
}
setInterval(clock, 1000)

function getform1(){
    var formTime1 = form1.options1[form1.options1.selectedIndex].text
    document.getElementById("preface-item1").innerHTML = formTime1;
}

function getform2(){
    var formTime2 = form2.options2[form2.options2.selectedIndex].text
    document.getElementById("preface-item2").innerHTML = formTime2;
}
function getform3(){
    var formTime3 = form3.options3[form3.options3.selectedIndex].text
    document.getElementById("preface-item3").innerHTML = formTime3;
}
function getform4(){
    var formTime4 = form4.options4[form4.options4.selectedIndex].text
    document.getElementById("preface-item4").innerHTML = formTime4;
}

function settime() {
    var i = document.getElementById('options1').value;
    var x = new Date().getHours();
    var g = new Date().getMinutes();
    var h = new Date().getSeconds();

   

    if (i == x) {
        document.getElementById('right-down').style.backgroundImage = "url(wake-up-pic.jpg)";
        document.getElementById('right-up').textContent = "BREAKFAST!!! TIME";
        document.getElementById('display').textContent = "GOOD MORNING!! WAKE UP !!";
    }
    var j = document.getElementById('options2').value;
    var y = new Date().getHours();
    if (j == y) {
        document.getElementById('right-down').style.backgroundImage = "url(lunch.jpg)";
        document.getElementById('right-up').textContent = "LET'S HAVE LUNCH !!";
        document.getElementById('display').textContent = "GOOD AFTERNOON !!";
    }
    var k = document.getElementById('options3').value;
    var z = new Date().getHours();
    if (k == z) {
        document.getElementById('right-down').style.backgroundImage = "url(tea.png)";
        document.getElementById('right-up').textContent = "GET SOME TEA..";
        document.getElementById('display').textContent = "GOOD EVENING !!";
    }
    var l = document.getElementById('options4').value;
    var r = new Date().getHours();
    if (l == r)
    {
        document.getElementById('right-down').style.backgroundImage = "url(night.png)";
        document.getElementById('right-up').textContent = "GO TO SLEEP..";
        document.getElementById('display').textContent = "GOOD NIGHT !!";
        }

    
}
