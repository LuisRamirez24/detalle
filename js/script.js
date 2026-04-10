const cartman = document.getElementById("cartman");
const bubble1 = document.getElementById("bubble1");
const bubble2 = document.getElementById("bubble2");
const repeatBtn = document.getElementById("repeatBtn");
const effects = document.getElementById("effects");
const audio = document.getElementById("bgAudio");
const timings = [0, 3.5, 9, 11.5];


let audioReady = false;

audio.addEventListener("canplaythrough", () => {
    audioReady = true;
});

// velocidad del texto
let speed = 45;


function startAnimation(){

    cartman.style.left = "-200px";
    bubble1.style.display = "none";
    bubble2.style.display = "none";
    repeatBtn.style.display = "none";

    audio.currentTime = 0;
    audio.pause();

    setTimeout(() => {
        cartman.classList.add("walk");
        cartman.style.left = "40%";
    }, 3000);

    setTimeout(() => {
        cartman.classList.remove("walk");
        bubble1.style.display = "block";
        bubble1.innerText = "Hola Denisse!!";
    }, 6000);

    setTimeout(() => {
        bubble1.style.display = "none";
        bubble2.style.display = "block";
        if(audioReady){
    audio.currentTime = 0;
    audio.play();
}

typeText();
    }, 8000);
}

function typeText(){

    const lines = [
        "Kyle, Te Amo bebe, Puedes vivir escapando, fingir que te gustan las niñas",
        "Pero cuando nos besamos, hay magia, no lo perdamos Kyle...",
        "Quiero abrazarte por las mañanas y amarte por las noches Kyle",
        "Te prometo solo amor y felicidad plena."
    ];

    bubble2.innerHTML = '<div class="tail"></div>';

    let lineIndex = 0;

    function writeLine(){

        if(lineIndex < lines.length){

            let lineDiv = document.createElement("div");
            lineDiv.classList.add("line");

            bubble2.appendChild(lineDiv);

            let text = lines[lineIndex];
            let i = 0;

            function writeChar(){

                if(i < text.length){

                    let span = document.createElement("span");
                    span.textContent = text[i];

                    // 🔥 efecto letras locas
                    span.style.transform = `rotate(${Math.random()*6-3}deg)`;
                    span.style.fontSize = (Math.random()*0.5 + 1.5) + "rem";

                    // 🔥 resaltar "Te Amo"
                    if(text.includes("Te Amo")){
                        span.style.color = "red";
                    }

                    lineDiv.appendChild(span);

                    i++;
                    setTimeout(writeChar, speed);

                } else {
                    lineIndex++;
                    setTimeout(writeLine, 500);
                }
            }

            writeChar();

        } else {
            repeatBtn.style.display = "block"; // 👈 vuelve el botón
        }
    }

    writeLine();
}

repeatBtn.onclick = startAnimation;

startAnimation();