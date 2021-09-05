class Canvas {
    constructor(width=500, height=500) {
        this.width = width;
        this.height = height;
        this.canvas;
    }

    createCanvas() {
        const canvas = document.createElement("canvas");
        const canvasWidth = this.width.toString();
        const canvasHeight = this.height.toString();

        // Set canvas dimensions
        canvas.setAttribute("width", canvasWidth);
        canvas.setAttribute("height", canvasHeight);
        canvas.style.width = canvasWidth + "px";
        canvas.style.height = canvasHeight + "px";

        this.canvas = canvas;

    }

    // Getters
    getCanvas() {
        if (this.canvas === undefined) {
            this.createCanvas()
        }

        return this.canvas;
    }
}