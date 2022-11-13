var threeCavCount=0;
var fourCavCount=0;
var fiveCavCount=0;
var fiveNexCavCount=0;
var sixNexCavCount=0;
var sixCavCount=0;
var totalCavCount=0;
var addchmp;
var hist;
var x;
var r=[3];
var champ;
var cloudinary="https://res.cloudinary.com/dtpybxseq/image/upload/pfp_mcoc/";
var git="https://irasnalida.github.io/crystals/"

function readjson(level){
    x=level;
    let requestURL = '..\\script\\poolinfo.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        champ = request.response;
        //champ=superHeroes;
        //console.log(champ['fivestarbasicpool'].length);
        //console.log(superHeroes['fivestarbasicpool'][5]);
        //populateHeader(superHeroes);
        //showHeroes(superHeroes);
        //makeArray2(superHeroes);
      }
}

function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function openCavCrystal(x){
    for(var i=0;i<x;i++){
        n=Math.random();
        if(n>=0.0 && n<0.006){
            sixNexCavCount+=1;
            openNexSix();
        }
        else if(n>=0.006 && n<0.03){
            sixCavCount+=1;
            //addchmp=get6Champ(1);
            //hist="<six>6* "+addchmp+"</six><br>";
            //document.getElementById("showChamp").innerHTML= hist.concat(document.getElementById("showChamp").innerHTML);
            var r=randomInt(0,champ['fivestarbasicpool'].length-1);
            hist=document.getElementById("showChamp");
            document.getElementById("showChamp").innerHTML="<img class=\"border\" src=\""+cloudinary+"frame6.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ['sixstarbasicpool'][r]+".png\"><br>"+document.getElementById("showChamp").innerHTML;
        }
        else if(n>=0.03 && n<0.062){
            fiveNexCavCount+=1;
            openNexFive();
        }
        else if(n>=0.062 && n<0.19){
            fiveCavCount+=1;
            //addchmp=get5Champ(1);
            //hist="5* "+addchmp+"<br>";
            //document.getElementById("showChamp").innerHTML= hist.concat(document.getElementById("showChamp").innerHTML);
            var r=randomInt(0,champ['fivestarbasicpool'].length-1);
            hist=document.getElementById("showChamp");
            document.getElementById("showChamp").innerHTML="<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ['fivestarbasicpool'][r]+".png\"><br>"+document.getElementById("showChamp").innerHTML;
        }
        else if(n>=0.19 && n<0.5){
            fourCavCount+=1;
        }
        else{
            threeCavCount+=1;
        }
        totalCavCount=threeCavCount+fourCavCount+fiveCavCount+fiveNexCavCount+sixCavCount+sixNexCavCount;
    } 
    document.getElementById("countCavTotal").innerHTML = totalCavCount;
    document.getElementById("countCavThree").innerHTML = threeCavCount;
    document.getElementById("countCavFour").innerHTML = fourCavCount;
    document.getElementById("countCavFive").innerHTML = fiveCavCount;
    document.getElementById("countCavFiveNex").innerHTML = fiveNexCavCount;
    document.getElementById("countCavSix").innerHTML = sixCavCount;
    document.getElementById("countCavSixNex").innerHTML = sixNexCavCount;
}

function openNexFive(){
    //for(var i=0;i<1;i++){
        hist=document.getElementById("showChamp").innerHTML;
        //document.getElementById("showChamp2").innerHTML=hist+"<br>"+document.getElementById("showChamp2").innerHTML;
        getChamp(champ['fivestarbasicpool'].length-1);
        document.getElementById("showChamp").innerHTML ="<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ['fivestarbasicpool'][r[0]]+".png\"><img class=\"border\" src=\""+git+"featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ['fivestarbasicpool'][r[1]]+".png\"><img class=\"border\" src=\""+git+"featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ['fivestarbasicpool'][r[2]]+".png\"><br>"+document.getElementById("showChamp").innerHTML;
    //}
}

function openNexSix(){
    //for(var i=0;i<1;i++){
        hist=document.getElementById("showChamp").innerHTML;
        //document.getElementById("showChamp2").innerHTML=hist+"<br>"+document.getElementById("showChamp2").innerHTML;
        getChamp(champ['sixstarbasicpool'].length-1);
        document.getElementById("showChamp").innerHTML ="<img class=\"border\" src=\""+cloudinary+"frame6.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ['sixstarbasicpool'][r[0]]+".png\"><img class=\"border\" src=\""+cloudinary+"frame6.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ['sixstarbasicpool'][r[1]]+".png\"><img class=\"border\" src=\""+cloudinary+"frame6.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ['sixstarbasicpool'][r[2]]+".png\"><br>"+document.getElementById("showChamp").innerHTML;
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
}

function clearWindow(){
    totalCavCount=0;
    threeCavCount=0;
    fourCavCount=0;
    fiveCavCount=0;
    fiveNexCavCount=0;
    sixCavCount=0;
    sixNexCavCount=0;
    document.getElementById("countCavTotal").innerHTML = totalCavCount;
    document.getElementById("countCavThree").innerHTML = threeCavCount;
    document.getElementById("countCavFour").innerHTML = fourCavCount;
    document.getElementById("countCavFive").innerHTML = fiveCavCount;
    document.getElementById("countCavFiveNex").innerHTML = fiveNexCavCount;
    document.getElementById("countCavSix").innerHTML = sixCavCount;
    document.getElementById("countCavSixNex").innerHTML = sixNexCavCount;
    document.getElementById("showChamp").innerHTML="";
}