function selection() {
  var nsIFilePicker = Components.interfaces.nsIFilePicker;
  var fp = Components.classes["@mozilla.org/filepicker;1"]
          .createInstance(nsIFilePicker);
  fp.init(window, "", nsIFilePicker.modeOpen);
  fp.appendFilters(nsIFilePicker.filterVideo | nsIFilePicker.filterAll);
  if (fp.show() != nsIFilePicker.returnOK) {
  }
  var path = fp.file.path;
  var videoNode = document.querySelector('video');
  videoNode.src = "file://" + path;
 }

function fullscreen() {
var video = document.querySelector('video');
if (!document.mozFullScreen) {
video.mozRequestFullScreen();
} 
else {
document.mozCancelFullScreen();
}
}

function playpause() {
var video = document.querySelector('video');
if (video.paused == false) {
video.pause();			
} 
else {
video.play();
}
}

function increasevolume() {
var video = document.querySelector('video');
if (video.volume < 1) {
video.volume = Math.round((video.volume + 0.1)*10)/10;
volume.firstChild.nodeValue = Math.round(video.volume*10);
}
}

function decreasevolume() {
var video = document.querySelector('video');
if (video.volume > 0) {
video.volume = Math.round((video.volume - 0.1)*10)/10;
volume.firstChild.nodeValue = Math.round(video.volume*10);
}
}

function mute() {
var video = document.querySelector('video');
video.muted = !video.muted;
}

function openurl()
{
var win = window.open("chrome://woggplayer/content/url.xul", 
                      "aboutMyExtension", "chrome,alwaysRaised=yes,dependent=yes,dialog=yes,modal=yes,centerscreen"); 
}

function url() {
var urlbar = document.getElementById('urlbar').value;
var videoNode = opener.document.querySelector('video');
if (urlbar) {
videoNode.src = urlbar;
window.close();
}
}