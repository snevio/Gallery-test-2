import { gsap } from "gsap";

const loader = () => {

    var id = 1;
    const body = document.body
    const loader = document.querySelector("#loader")
    const progress = document.querySelector(".progress")
    const welcome = document.querySelector(".welcome")
    const tl = gsap.timeline({
        paused: "true"
    })
    tl.to(progress, {
        y: 80,
        duration: 1.5,
        ease: "bounce.out",
        delay: 1
    })

    tl.to(welcome, {
        y: 0,
        duration: 1.5,
        ease: "bounce.in",
    })

    tl.to(loader, {
        width: "0",
        duration: 1.2,
        ease: "power2.out",
        delay: 1,
        onComplete: () => {
            loader.remove();
        }

    })

    function loading() {
        id = setInterval(frame, 30)
    }

    function frame() {
        if (id >= 100) {
            clearInterval(id)
            tl.play();
        }

        else {
            id++
            progress.innerHTML = id + "%"
            //console.log(id)
        }
    }

    loading();
}

export default loader