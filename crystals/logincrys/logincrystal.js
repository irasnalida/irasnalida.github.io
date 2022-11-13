var r=0;
function openCrystal(n){
    for(var i=0;i<n;i++){
        r=Math.random();
        if(r>=0.0 && r<0.98){
            document.getElementById("countThree").innerHTML=Number(document.getElementById("countThree").innerHTML)+1;
        }
        else{
            document.getElementById("countFour").innerHTML=Number(document.getElementById("countFour").innerHTML)+1;
        }
    }
    document.getElementById("countTotal").innerHTML = Number(document.getElementById("countThree").innerHTML)+Number(document.getElementById("countFour").innerHTML);
}
function clearWindow(){
    document.getElementById("countTotal").innerHTML = "0";
    document.getElementById("countThree").innerHTML = "0";
    document.getElementById("countFour").innerHTML = "0";
}