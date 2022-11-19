let boxes = 3;


function createBox(color) {
    return `<div class="col-4 px-2 pb-4"><button type="button" class="btn" style="background: ${color}" value="${color}"></button></div>`;
} 

function rgb() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`
}

function createColorBoxes() {
    document.querySelector("#score").innerHTML = "";
    let data = "";
    const boxColors = []
    for (var i = 0; i < boxes; i++) {
        let generate = rgb();
        boxColors.push(generate);
        data += createBox(generate);
    }
    let correctColor = boxColors[Math.round(Math.random() * (boxColors.length - 1))];

    document.querySelector("#color").innerHTML = correctColor;
    document.querySelector("#color-boxes .row").innerHTML = data;
    document.querySelectorAll("#color-boxes .row button").forEach(function(each) {
        each.addEventListener("click", function(ev) {
            const color = ev.target.value;
            document.querySelector("#background").style.backgroundColor = color;
          
            if (correctColor === color) {
                // Win
                document.querySelector("#score").innerHTML = "YOU WIN!"
                document.querySelectorAll("#color-boxes .row button").forEach(function(box) {
                    box.style.opacity = 1;
                    box.style.backgroundColor = correctColor;
                    box.style.pointerEvents = "none";
                })
            } else {
                // Please try again
                document.querySelector("#score").innerHTML = "TRY AGAIN!"
                each.style.opacity = 0;
            }       
        })
    });
}

document.addEventListener("DOMContentLoaded", function() {
    createColorBoxes()
});

// Click events on  level
const levelBtns = document.querySelectorAll("#level .btn");
levelBtns.forEach(function(each, index) {
    each.addEventListener("click", function(ev) {
        boxes = ev.target.value;
        levelBtns.forEach(function(ea) {
            ea.classList.remove("btn-warning");
            ea.classList.add("btn-dark");
        });
        each.classList.remove("btn-dark");
        each.classList.add("btn-warning");
        createColorBoxes();
    })
});

// Click on New Colors
document.querySelector("#new-colors").addEventListener("click", function() {
    createColorBoxes();
});

