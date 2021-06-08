function refreshScrollPosition() {
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
}

refreshScrollPosition();
setTimeout(() => {
    window.scrollTo(0, 100);
}, 1000);
setTimeout(() => {
    window.scrollTo(0, 150);
}, 1200);
setTimeout(() => {
    window.scrollTo(0, 250);
}, 1500);