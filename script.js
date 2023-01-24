console.log("welocme to Spotify")
//Initialize the value
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let song =[
    {songName:"salam-e-Ishq1",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"salam-e-Ishq 2",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songName:"salam-e-Ishq 3",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songName:"salam-e-Ishq4",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songName:"salam-e-Ishq5",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"}
    {songName:"salam-e-Ishq6",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"}
]

// Hendle play pouse GamepadButton
masterplay.addEventListener('click',()=>{
    if(audioElement.pause || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove(' fa-pause-circle');
        masterplay.classList.add('fa-circle-play');
    }
})

// listen to Event
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log('progress');
    myProgressBar.value =progress;
})
//update seakbar
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration;
})