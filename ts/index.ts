import "./contactForm";
import "./darkModeSwitch";
import "./navbar";
import "./preloader";
import "./scrollIntoView";
import "./skillsSelector";

// Libs
import AOS from "../libs/aos/aos";
AOS.init({
    startEvent: "onPreloadEnd"
});

import Typewriter from '../libs/typewriter-js/typewriter';
document.addEventListener("onPreloadEnd", () => {
    const titleTypeWriter = new Typewriter(".title h2");

    setTimeout(() => {
        titleTypeWriter.typeString("I am Domenico Mancini").callFunction(() => {
            titleTypeWriter.stop();
            setTimeout(() => {
                const caret = document.querySelector<HTMLElement>(".title h2 .Typewriter__cursor");
                caret.style.animation = "none";
                caret.style.opacity = "0";
            }, 1000);
        }, null).start();
    }, 1500);
});

// Style
import "../style/reset.scss";
import "../style/utility.scss";
import "../style/preloader.scss";
import "../style/core.scss";
import "../style/main.scss";
import "../style/contact.scss";
import "../style/navbar.scss";
import "../style/header.scss";
import "../style/is.scss";
import "../style/mouseScroll.scss";
import "../style/skills.scss";
import "../style/works.scss";
import "../style/footer.scss";
import "../style/scrollbar.scss";