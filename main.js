var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("Text_Area").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("Text_Area").innerHTML = Content;
    if(Content=="take my selfie"){
        console.log("Taking selfie in 5 seconds-----");
        Speak();
    }
}

function Speak(){
    synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds";

    utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        TakeSnapshot();
        Save();
    }, 5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
function TakeSnapshot(){
    Webcam.snap(function(Data_URI){
        document.getElementById("Result").innerHTML = "<img id='selfie_image' src=" + Data_URI + ">";
    })
}
function Save(){
    Link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    Link.href = image;
    Link.click();
}