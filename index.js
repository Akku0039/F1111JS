


const d = new color();
let color = d.getcolor();

const col = ["yellow","green","blue","red"];



function OpeningCeremony(){
   
    setTimeout( function(){ console.log("Let the games begin");
        
     }, 1500 );
     Race100M();
     LongJump();
     HighJump();
     AwardCeremony();
     

    


};
function Race100M(){
    setTimeout( function(){
    let x = Math.floor((Math.random() * 10) + 1);
},3000);

}


function LongJump(){

}
function HighJump(){

    let scorer,scoreb,scoreg,scorey;
    let color = prompt("Please enter the color:");
    if (color == red ) {
      scorer=scorer+100;
    } else  if(color == green){
scoreg=scoreg+100;
    }
     else  if(color == blue){
        scoreb=scoreb+100;
    }
     else  if(color == yellow){
       scorey=scorey+100;
    }
    document.getElementById("demo").innerHTML = color;
  }
  
function processThis(message, callback) {
    console.log("Running function first with message: " + message);

    if (typeof callback == "function")
        callback();
}
function AwardCeremony(){
    console.log(${color} came first with ${score});
    console.log(${color} came second with ${score});
    console.log(${color} came third with ${score});
    console.log(${color} came fourth with ${score});
}