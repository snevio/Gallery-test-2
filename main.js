import './style.css'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import timer from './utils/clock';
import loader from './utils/loader';



gsap.registerPlugin(Flip);

const fullScreen = document.querySelector(".fullscreen")
const images = document.querySelectorAll(".thumbnail")
const container = document.querySelector(".text-container")

const body = document.body
let isActive;
let text;

loader();

timer();



function createText() {
    const newDiv = document.createElement("div")
    newDiv.classList.add("text")
    const divContext = document.createTextNode("AI Generated Images")
    newDiv.appendChild(divContext)

    return newDiv
}



images.forEach((image) => {

    const itemParent = image.parentElement;

    image.addEventListener("click", () => {

        isActive = image.classList.toggle("active")
        let state = Flip.getState(image)

        if (isActive) {

            fullScreen.appendChild(image)

        }
        else {

            itemParent.appendChild(image)

        }


        Flip.from(state, {
            duration: 2,
            ease: "power2.inOut",
            absolute: true,
            zIndex: 10,
            onStart: () => {

                pointersHandlerStart();
                textHandlerStart();
                //console.log(isActive)
            },

            onComplete: () => {
                pointersHandlerComplete();
                textHandlerComplete();
                //console.log(isActive)

            }
        })

        const pointersHandlerComplete = () => {
            fullScreen.style.pointerEvents = "auto"
            body.style.pointerEvents = "auto"

            if (!isActive) {
                fullScreen.style.pointerEvents = "none"
            }
        }

        const pointersHandlerStart = () => {
            fullScreen.style.pointerEvents = "none"
            body.style.pointerEvents = "none"
        }

        const textHandlerStart = () => {

            if (!isActive) {
                gsap.to(text, {
                    opacity: 0,
                    y: -40,
                    duration: 0.8,
                    filter: "blur(100px)",
                    onComplete: () => {
                        text.remove();
                    }
                })
            }
        }

        const textHandlerComplete = () => {
            if (isActive) {
                text = createText();
                container.prepend(text)

                gsap.to(text, {
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 100,
                    lazy: false,
                    duration: 1.2,
                })
            }
        }

    })

})






