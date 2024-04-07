// We have the following arrays ; color = ["Blue","Green","Red","Orange","Violet","Indigo","Yellow"];
//  o = ["th","st","nd","rd"] Write a program to display the colors in the following way : "1st choice is Blue".
//  "2nd Choice is Green". "3rd Choice is Red".

let color = ["Blue","Green","Red","Orange","Violet","Indigo","Yellow"];
let o = ["th","st","nd","rd"];

function displayColor(color, o){
    for(let i=0; i<color.length; i++){
        if(i < 3) {
            console.log(i+1+o[i+1] +" choice is "+color[i]) 
        }
        else{
            console.log(i+1+o[0]+" choice is "+color[i]);
        }
    }
}

displayColor(color, o)


