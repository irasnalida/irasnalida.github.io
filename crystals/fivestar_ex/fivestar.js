var champ;
var curpulls="";
var cloudinary="https://res.cloudinary.com/dtpybxseq/image/upload/pfp_mcoc/";

function openCrystal(n){
    document.getElementById("countTotal").innerHTML = Number(document.getElementById("countTotal").innerHTML)+n;
    document.getElementsByClassName("pulledChamp")[0].style.display = 'block';
    document.getElementById("showChamp2").innerHTML ="";
    for(var i=0;i<n;i++){
        var champname = getFiveStarChamp();
        if(document.getElementById(""+champname)== 'undefined' || document.getElementById(""+champname)== null){
            document.getElementById("showChamp").innerHTML ="<div class=\"framewithport\"><a class=\"ani\" id=\""+champname+"i\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+champname+".png\"><span class=\"dot\" id=\""+champname+"\">1</span></a></div>"+document.getElementById("showChamp").innerHTML;
        }
        else{
            document.getElementById(""+champname).innerHTML = Number(document.getElementById(""+champname).innerHTML)+1;        
        }
        document.getElementById("showChamp2").innerHTML="<div class=\"framewithport showpopup\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" id=\"i"+champname+"\" src=\""+cloudinary+champname+".png\"></div>"+document.getElementById("showChamp2").innerHTML;
    }
    
}
function clearWindow(){
    document.getElementById("countTotal").innerHTML="0";
    document.getElementById("showChamp").innerHTML="";
    document.getElementById("showChamp2").innerHTML="";
    document.getElementsByClassName("pulledChamp")[0].style.display = 'none';
}
