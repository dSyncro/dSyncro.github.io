import "./contactForm";
import "./darkModeSwitch";
import "./navbar";
import "./preloader";
import "./scrollIntoView";
import "./skillsSelector";

// Libs
import Typewriter from '../libs/typewriter';

document.addEventListener("onPreloadEnd", () => {
    const titleTypeWriter = new Typewriter(".title h2");

    titleTypeWriter.typeString("I am Domenico Mancini").callFunction(() => {
        titleTypeWriter.stop();
        setTimeout(() => {
            const caret = document.querySelector<HTMLElement>(".title h2 .Typewriter__cursor");
            caret.style.animation = "none";
            caret.style.opacity = "0";
        }, 1000);
    }, null).start();
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