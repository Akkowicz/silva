"use strict";
// Operate in Strict mode
const gEngine = gEngine || {};
// The VertexBuffer object
gEngine.VertexBuffer = (function () {
    // First: define the vertices for a square
    const verticesOfSquare = [
        0.5, 0.5, 0.0,
        -0.5, 0.5, 0.0,
        0.5, -0.5, 0.0,
        -0.5, -0.5, 0.0
    ];
    // reference to the vertex positions for the square in the gl context
    let mSquareVertexBuffer = null;
    const getGLVertexRef = function () { return mSquareVertexBuffer; };
    const initialize = function () {
        const gl = gEngine.Core.getGL();
        // Step A: Create a buffer on the gGL context for our vertex positions
        mSquareVertexBuffer = gl.createBuffer();
        // Step B: Activate vertexBuffer
        gl.bindBuffer(gl.ARRAY_BUFFER, mSquareVertexBuffer);
        // Step C: Loads verticesOfSquare into the vertexBuffer
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesOfSquare),
            gl.STATIC_DRAW);
    };
    const mPublic = {
        initialize: initialize,
        getGLVertexRef: getGLVertexRef
    };
    return mPublic;
}());