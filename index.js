let songIndex=0;
let progress;
let audioN=new Audio("1.mp3");
let masterPlay=document.getElementById("masterPlay");
var myProgressBar=document.getElementById("myProgressBar");
var a;
let song=[
    {songName:"Yaara", filePath: "1.mp3",coverPath :"covers/1.jpg"},
    {songName:"Let Me Down Slowly", filePath: "2.mp3",coverPath :"covers/2.jpg"},
    {songName:"Love Me Like You Do", filePath: "3.mp3",coverPath :"covers/3.jpg"},
    {songName:"Man Mera", filePath: "4.mp3",coverPath :"covers/4.jpg"},
    {songName:"Ishq Bulawa", filePath: "5.mp3",coverPath :"covers/5.jpg"},
    {songName:"Jeena Jeena", filePath: "6.mp3",coverPath :"covers/6.jpg"},
    {songName:"Apna Bana Le", filePath: "7.mp3",coverPath :"covers/7.jpg"},
    {songName:"Kyun Dhunde", filePath: "8.mp3",coverPath :"covers/8.jpg"}
];
masterPlay.addEventListener("click",function(){
    if(audioN.paused || audioN.currentTime<=0){    
        audioN.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        $("#gif").css("opacity","1");
        a.removeClass("fa-play-circle");
        a.addClass("fa-pause-circle");
    }
    else {
        audioN.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        $("#gif").css("opacity","0");
        makeAllSongsPlay();
    }
});
audioN.addEventListener("timeupdate",function(){
    progress=parseInt((audioN.currentTime/audioN.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",function(){
    audioN.currentTime=(myProgressBar.value*audioN.duration)/100;
})
function makeAllSongsPlay(){
    a.removeClass("fa-pause-circle");
    a.addClass("fa-play-circle");
}
$(".playSong").click(function(){
    if(audioN.paused){
        a=$(this);
        makeAllSongsPlay();
        a.removeClass("fa-play-circle");
        a.addClass("fa-pause-circle");
        songIndex=$(a).attr("id");
        audioN.src=songIndex+".mp3";
        audioN.currentTime=0;
        audioN.play();
        masterPlay.classList.add("fa-pause-circle");
        masterPlay.classList.remove("fa-play-circle");
        $("#gif").css("opacity","1");
        $("p").text(song[songIndex-1].songName);
    }
    else{
        audioN.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        $("#gif").css("opacity","0");
        makeAllSongsPlay();
    }
})
$("#next").click(function(){
    if(songIndex>=8)songIndex=1;
    else songIndex=Number(songIndex)+1;
    audioN.src=songIndex+".mp3";
    audioN.currentTime=0;
    audioN.play();
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
    $("#gif").css("opacity","1");
    $("p").text(song[songIndex-1].songName);
})
$("#previous").click(function(){
    if(songIndex<=1)songIndex=8;
    else songIndex=Number(songIndex)-1;
    audioN.src=songIndex+".mp3";
    audioN.currentTime=0;
    audioN.play();
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
    $("#gif").css("opacity","1");
    $("p").text(song[songIndex-1].songName);
})
