var hr =0 ;
var min =0 ;
var sec= 0;
var mili=0;

var timer = false;
function start(){
    timer =true;
    stopWatch();

}
function stop(){
    timer =false;
    
}
function reset(){
    timer =false;
    hr=0;
    min=0;
    sec=0;
    mili=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("mili").innerHTML="00";

}
function stopWatch() {
   if(timer==true){
    mili =mili+1;
    if(mili==100){
        sec =sec+1;
        mili=0;
    }
    if(sec==60){
        min= min+1;
        sec= 0;
    }
    if(min==60){
        hr =hr +1;
        min=0;
        sec=0;
    }
    var hrString= hr;
    var minString =min;
    var secString =sec;
    var miliString = mili;
    if(hr<10){
        hrString ='0'+hrString
    }
    if(min<10){
        minString ='0'+minString
    }
    if(sec<10){
        secString ='0'+secString
    }
    if(mili<10){
        miliString ='0'+miliString
    }
    document.getElementById("hr").innerHTML=hrString;
    document.getElementById("min").innerHTML=minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("mili").innerHTML = miliString;
    setTimeout("stopWatch()",10);
   }
}