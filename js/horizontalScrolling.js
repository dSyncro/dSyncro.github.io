let approximatelyEqual = (x, y, epsilon) => Math.abs(x - y) <= epsilon;

let horizontalElements = document.querySelectorAll('[data-simplebar][data-hscroll]');

for (let element of horizontalElements) {
    element.onwheel = (event) => {
        let elementToScroll = element.querySelector('.simplebar-content-wrapper');
        let remainingScrollWidth = elementToScroll.scrollWidth - elementToScroll.scrollLeft;
        if (
            (approximatelyEqual(elementToScroll.clientWidth, remainingScrollWidth, 1) && event.deltaY > 0) ||
            (approximatelyEqual(elementToScroll.scrollLeft, 0, 1) && event.deltaY < 0)
        ) return;
        event.preventDefault();
        elementToScroll.scrollTo(
            {
                // left: event.deltaY > 0 ? elementToScroll.scrollLeft + 250 : elementToScroll.scrollLeft - 250, 
                left: event.deltaY + elementToScroll.scrollLeft,
                // behavior: 'smooth' 
            }
        );
    };
}