'use strict';

/* Создайте мини paint на canvas
- толщ. через ползунок +
- вибор цвета линнии +
- кнопка очистки полотна +
- по зажатию мішки на полотне и движению - рисует +
*/

let paintCanvas = document.getElementById("canvasPaint");
let context = paintCanvas.getContext("2d");
let color = "black";

document.getElementById("colorPaint").oninput = function () {
    color= this.value;
};

let translate = document.getElementById("inputRange");
document.getElementById("valueInputRange").textContent = translate.value
translate.addEventListener("change", function () {
    document.getElementById("valueInputRange").textContent = this.value
})

function paint(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    context.fillRect(x - 5, y - 5, translate.value, translate.value);
    context.fillStyle = color;

}

paintCanvas.onmousedown = function () {
    paintCanvas.onmousemove = function () {
        paint(event)
    }
    paintCanvas.onmouseup = function () {
        paintCanvas.onmousemove = null;
    }
}
paintCanvas.addEventListener("click", paint)

let clear = document.getElementById("clearPaint");
clear.addEventListener("click", () => {
    location.reload()
})