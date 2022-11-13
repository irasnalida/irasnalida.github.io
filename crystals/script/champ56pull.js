var champ5;
var champ6;
var res5;
var r;
var res6;
var champNex=[3];
var r=[3];
var champ;

function read5File(file){
    var f = new XMLHttpRequest();
    f.open("GET", file, true);
    f.onreadystatechange = function (){
        if(f.readyState === 4){
            if(f.status === 200 || f.status == 0){
                res5= f.responseText;
                champ5=res5.split("\n");
            }
        }
    }
    f.send(null);
}
function read6File(file){
    var f = new XMLHttpRequest();
    f.open("GET", file, true);
    f.onreadystatechange = function (){
        if(f.readyState === 4){
            if(f.status === 200 || f.status == 0){
                res6= f.responseText;
                champ6=res6.split("\n");
            }
        }
    }
    f.send(null);
}
function read56Star(){
    read5File("https://irasnalida.github.io/crystals/champsfive.txt");
    read6File("https://irasnalida.github.io/crystals/champssix.txt");
    readjson();
}
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function get5Champ(n){
    for(var i=0;i<n;i++){
        r=randomInt(0,champ5.length-1);
        return champ5[r];
    }
}
function get6Champ(n){
    for(var i=0;i<n;i++){
        r=randomInt(0,champ6.length-1);
        return champ6[r];
    }
}

function readjson(){
    let requestURL = "..\\script\\poolinfo.json";
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const superHeroes = request.response;
        //console.log(superHeroes['fivestarbasicpool'].length);
        //console.log(superHeroes['fivestarbasicpool'][5]);
        champ=superHeroes;
        //populateHeader(superHeroes);
        //showHeroes(superHeroes);
      }
}

function openNexFive(){
    //for(var i=0;i<1;i++){
        hist=document.getElementById("showChamp").innerHTML;
        //document.getElementById("showChamp2").innerHTML=hist+"<br>"+document.getElementById("showChamp2").innerHTML;
        getChamp(champ['fivestarbasicpool'].length-1);
        document.getElementById("showChamp").innerHTML = hist+"<img class=\"border\" src=\""+git+"featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champNex[0]+".png\"><img class=\"border\" src=\""+git+"featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champNex[1]+".png\"><img class=\"border\" src=\""+git+"featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champNex[2]+".png\"><br>-------------------";
    //}
}

function getChamp(len){
    r[0]=randomInt(0,len);
    r[1]=randomInt(0,len);
    r[2]=randomInt(0,len);
    while(r[0]==r[1]){
        r[1]=randomInt(0,len);
    }
    while(r[2]==r[0] || r[2]==r[1]){
        r[2]=randomInt(0,len);
    }
    champNex[0] = champ['fivestarbasicpool'][r[0]];
    champNex[1] = champ['fivestarbasicpool'][r[1]];
    champNex[2] = champ['fivestarbasicpool'][r[2]]; 
}