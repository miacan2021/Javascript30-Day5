const panels = document.querySelectorAll('.panel');

function wordTransition(e) {
    if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
}
}
function open() {
    panels.forEach(panel => {
        panel.classList.remove('open');
    })
    if(!this.classList.contains('open-active')){
        this.classList.toggle('open');
    }
}

panels.forEach(panel => {
    panel.addEventListener('click', open);
    panel.addEventListener('transitionend', wordTransition);
});