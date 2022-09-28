var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var clicks = document.getElementById("clicks");
var start_btn = document.getElementById("start_btn");
var reset_btn = document.getElementById("reset_btn");
var table = document.getElementById("table");
var time = document.getElementById("time");
var player = document.getElementById("player");
var select_btn = document.getElementById("select_btn");
var eng = document.getElementById("eng");
var hr = document.getElementById("hr");
var h1_txt = document.getElementById("h1");
var leaderboard_txt = document.getElementById("leaderboard");
var place_txt = document.getElementById("place");
var name_txt = document.getElementById("name");
var clicks_txt = document.getElementById("clicks_txt");
var score_txt = document.getElementById("score");
var time_txt = document.getElementById("time_txt");
var description_txt = document.getElementById("description_txt");
var desc_txt1 = document.getElementById("desc_txt1");
var desc_txt2 = document.getElementById("desc_txt2");
var desc_txt3 = document.getElementById("desc_txt3");
var desc_txt4 = document.getElementById("desc_txt4");
var desc_txt5 = document.getElementById("desc_txt5");
var desc_txt6 = document.getElementById("desc_txt6");
var desc_txt7 = document.getElementById("desc_txt7");
var desc_txt8 = document.getElementById("desc_txt8");
var desc_txt9 = document.getElementById("desc_txt9");
var desc_txt10 = document.getElementById("desc_txt10");
var desc_txt11 = document.getElementById("desc_txt11");
var footer_txt = document.getElementById("footer_txt");
var players = [];

function click1(){
    clicks.innerHTML++;
    btn1.disabled = true;
    btn2.disabled = false;
}

function click2(){
    clicks.innerHTML++;
    btn1.disabled = false;
    btn2.disabled = true;
}

function input_name(){
    if (player.value !== ''){
        start_btn.disabled = false;
    }
}

function start(){
    btn1.disabled = false;
    btn2.disabled = false;
    start_btn.disabled = true;

    var seconds = 60;

    interval = setInterval(function(){
        seconds--

        if (seconds > 0){
            time.innerHTML = seconds;
        }

        if (seconds === 0){
            time.innerHTML = "Game over";
            time.style.animation = "blink 1s infinite";
            
            btn1.disabled = true;
            btn2.disabled = true;       

            clicks_num = parseInt(clicks.textContent);

            if (players.length < 20){
                players.push([player.value, clicks_num]);
                players.sort(function(a, b){
                    return b[1] - a[1];
                });
            } else {
                for (var i = players.length - 1; i >= 0; i--){
                    if(clicks_num > players[i][1]){
                        players.push([player.value, clicks.textContent]);
                        players.sort(function(a, b){
                            return b[1] - a[1];
                        });
                        players.pop();
                        break;
                    }
                }
            }

            var result = '';
            for (var i = 0; i < players.length; i++){
                var place = players.indexOf(players[i]) + 1;
                var tr = '<tr>';
                tr += '<td width="100px">' + place + '.' + '</td>';
                tr += '<td width="200px">' + players[i][0] + '</td>';
                tr += '<td width="100px">' + players[i][1] + '</td>';
                tr += '</tr>';
                result += tr;
                }
            table.innerHTML = result;
        }
    }, 1000);
}

function reset(){
    btn1.disabled = true;
    btn2.disabled = true;
    start_btn.disabled = true;

    clearInterval(interval);
    time.style.animation = "blink 0s";

    clicks.innerHTML = 0;
    player.value = '';
    time.innerHTML = 60;
}

function eng_func(){
    eng.classList.remove("eng");
    eng.classList.add("eng1");

    hr.classList.remove("hr1");
    hr.classList.add("hr");

    h1_txt.innerHTML = "Clicker Master";
    btn1.innerHTML = "Button 1";
    btn2.innerHTML = "Button 2";
    start_btn.innerHTML = "Start";
    reset_btn.innerHTML = "Reset";
    leaderboard_txt.innerHTML = "Leaderboard";
    place_txt.innerHTML = "Place";
    name_txt.innerHTML = "Name";
    clicks_txt.innerHTML = "Score";
    score_txt.innerHTML = "Score";
    time_txt.innerHTML = "Time";
    description_txt.innerHTML = "Description";
    desc_txt1.innerHTML = "Welcome to the game Clicker Master.";
    desc_txt2.innerHTML = "The goal is to click on the Button 1 and Button 2 as many times as possible in a 60 second period.";
    desc_txt3.innerHTML = "The only rule is that you have to click in one of these two orders:";
    desc_txt4.innerHTML = "Button 1, Button 2, Button 1, Button 2...";
    desc_txt5.innerHTML = "Button 2, Button 1, Button 2, Button 1...";
    desc_txt6.innerHTML = "First, you need to enter any name you want (max. 15 characters).";
    desc_txt7.innerHTML = "Then, button Start will become enabled and you can start the game by clicking on the button Start.";
    desc_txt8.innerHTML = "When time expires, your name and score will be automatically added to the Leaderboard if your score is in top 20.";
    desc_txt9.innerHTML = "Clicking on the button Reset, time and score will reset, and input for name will become empty to enter a new name.";
    desc_txt10.innerHTML = "Compete against yourself, your family, friends...";
    desc_txt11.innerHTML = "Good luck and have fun.";
    player.setAttribute("placeholder", "Please enter your name");
    footer_txt.innerHTML = "Made by Karlo Šimunec";
}

function hr_func(){
    hr.classList.remove("hr");
    hr.classList.add("hr1");

    eng.classList.remove("eng1");
    eng.classList.add("eng");

    h1_txt.innerHTML = "Clicker Master";
    btn1.innerHTML = "Gumb 1";
    btn2.innerHTML = "Gumb 2";
    start_btn.innerHTML = "Pokreni";
    reset_btn.innerHTML = "Resetiraj";
    leaderboard_txt.innerHTML = "Ljestvica";
    place_txt.innerHTML = "Mjesto";
    name_txt.innerHTML = "Ime";
    clicks_txt.innerHTML = "Bodovi";
    score_txt.innerHTML = "Bodovi";
    time_txt.innerHTML = "Vrijeme";
    description_txt.innerHTML = "Upute";
    desc_txt1.innerHTML = "Dobrodošli u igru Clicker Master.";
    desc_txt2.innerHTML = "Cilj je kliknuti na Gumb 1 i Gumb 2 što je više puta moguće unutar perioda od 60 sekundi.";
    desc_txt3.innerHTML = "Jedino pravilo je da morate klikati u jednom od ova dva redoslijeda:";;
    desc_txt4.innerHTML = "Gumb 1, Gumb 2, Gumb 1, Gumb 2...";
    desc_txt5.innerHTML = "Gumb 2, Gumb 1, Gumb 2, Gumb 1...";
    desc_txt6.innerHTML = "Prvo morate unijeti neko svoje ime (maks. 15 znakova).";
    desc_txt7.innerHTML = "Nakon toga će se gumb Start otključati i moći ćete započeti igru pritiskom na gumb Start.";
    desc_txt8.innerHTML = "Kada vrijeme istekne, vaše ime i bodovi automatski će se dodati u Ljestvicu ako su vaši bodovi u top 20.";
    desc_txt9.innerHTML = "Pritiskom na gumb Reset, vrijeme i bodovi će se resetirati te će polje za unos biti prazno kako biste mogli unijeti novo ime.";
    desc_txt10.innerHTML = "Natječite se protiv sebe, svoje obitelji, prijatelja...";
    desc_txt11.innerHTML = "Zabavite se i sretno.";
    player.setAttribute("placeholder", "Unesite svoje ime");
    footer_txt.innerHTML = "Napravio Karlo Šimunec";
}

if(eng.hasAttribute("selected")){
    eng_func();
}