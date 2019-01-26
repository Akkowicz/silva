'use strict';
// Operate in Strict mode
const gEngine = gEngine || {};
// initialize the variable while ensuring it is not redefined

gEngine.Core = (function () {
    // instance variable: the graphical context for drawing
    let mGL = null;
    
    // Accessor of the webgl context
    const getGL = function () { return mGL; };

    // initialize the WebGL, the vertex buffer and compile the shaders
    const initializeWebGL = function (htmlCanvasID) {
        const canvas = document.getElementById(htmlCanvasID);
        // Get the standard or experimental webgl and binds to the Canvas area
        // store the results to the instance variable mGL
        mGL = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (mGL === null) {
            document.write('<br><b>WebGL is not supported!</b>');
            return;
        }
        // now initialize the VertexBuffer
        gEngine.VertexBuffer.initialize();
    };

    // Clears the draw area and draws one square
    const clearCanvas = function (color) {
        mGL.clearColor(color[0], color[1], color[2], color[3]); // set the color to be cleared
        mGL.clear(mGL.COLOR_BUFFER_BIT); // clear to the color previously set
    };

    // Contains the functions and variables that will be accessible.
    const mPublic = {
        getGL: getGL,
        initializeWebGL: initializeWebGL,
        clearCanvas: clearCanvas
    };
    return mPublic;
}());