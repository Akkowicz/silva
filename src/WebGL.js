"use strict";
let gGL = null;

function initializeGL() {
    const canvas = document.getElementById("GLCanvas");
    gGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (gGL !== null) {
        gGL.clearColor(0.0, 0.8, 0.0, 1.0); // set the color to be cleared
    } else {
        document.write("<br><b>WebGL is not supported!</b>");
    }
}

function clearCanvas() {
    gGL.clear(gGL.COLOR_BUFFER_BIT); // clear color
}

function doGLDraw() {
    initializeGL();
    clearCanvas();
}