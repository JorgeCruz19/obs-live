const bodyEl = document.getElementById("main");

let selectedChannel =
	window.location.search?.split("&room=")[1]?.split("&", 1) || "";
let [channel] = selectedChannel;

if (channel == "canal1") {
	bodyEl.style.backgroundImage = "url('./media/TELEVICENTRO.gif')";
	console.log(channel);
} else if (channel == "canal2") {
	bodyEl.style.backgroundImage = "url('./media/bg_sample2.webp')";
	console.log(channel);
} else if (channel == "canal3") {
	bodyEl.style.backgroundImage = "url('./media/vdoNinja_logo_full.png')";
	console.log(channel);
} else if (channel == "canal4") {
	bodyEl.style.backgroundImage =
		"url('https://static8.depositphotos.com/1160465/822/i/600/depositphotos_8228852-stock-photo-full-color-old-wood-room.jpg')";
	console.log(channel);
} else {
	bodyEl.style.background = "rgb(17, 24, 39)";
}
