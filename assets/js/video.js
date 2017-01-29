"use strict";

var Video = document.getElementById("background-video");
var Controls = document.getElementById("video-controls");

Controls.addEventListener("click", function()
{
    if (Video.paused)
        Video.play();
    else
        Video.pause();

    Controls.classList.toggle("fa-play");
    Controls.classList.toggle("fa-pause");
});

Video.addEventListener("loadeddata", function()
{
/*
 *  Autoplay is not respected by mobile browsers,
 *  (which is a good thing, we don't want to
 *  waste bandwidth) so we can use it to detect
 *  if we are running on mobile and remove the
 *  video controls.
 */
    if (Video.paused)
        Controls.remove();
    else
        Controls.classList.remove("hidden");
});
