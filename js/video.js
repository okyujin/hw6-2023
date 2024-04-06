var video;

// 1. Initialize the video element 
// Set autoplay and looping to false 
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.src = 'assets/marchingband.mov';
	video.autoplay = false;
	video.loop = false; 
});

// 2. Play Button. Play the video and update the volume Information 

document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

// 3. Pause Button. Pause the video

document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// 4. Slow Down. Slow the video speed by 10% each time the button is clicked. 

document.getElementById("slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// 5. Speed Up. Speed up the video by the inverse amount used to slow down. 

document.getElementById("faster").addEventListener("click", function() {
	video.playbackRate *= 1.1;
	console.log("New speed is " + video.playbackRate);
});

// 6. Skip Ahead - Advance the video by 10 seconds

document.getElementById("skip").addEventListener("click", function() {
	if(video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;

	}
	console.log("New Current location is " + video.currentTime);
});


// 7. Mute - Toggle mute/unmute and update button text

document.getElementById("mute").addEventListener("click", function() {
	if(video.muted) {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}

	else {
		video.muted = true;
        document.getElementById("mute").innerHTML = "Unmute";
	}

});


// 8. Volume Slider - Change the volume based on the slider and update the volume information 

document.getElementById("slider").addEventListener("input", function() {
	video.volume = document.getElementById("slider").value / 100;
	document.getElementById("volume").innerHTML = video.volume*100 + "%";
});

// 9. Styled. Utilize the existing oldSchool class on the video element

document.getElementById("vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");

});

// 10. Original. Remove the oldSchool class from the video
document.getElementById("orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});















// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

