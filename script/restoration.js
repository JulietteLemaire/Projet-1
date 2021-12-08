const leftButton = document.getElementById('leftBtn');
const rightButton = document.getElementById('rightBtn');
const container = document.getElementById('Slidecontainer');
const itemResto = document.getElementsByClassName('sliderItem')[0];
const leftBarButton = document.getElementById('leftBarBtn');
const rightBarButton = document.getElementById('rightBarBtn');
const barContainer = document.getElementById('SlideBarcontainer');

leftButton.addEventListener('click', () => {
    const widthDivItem = parseInt(window.getComputedStyle(itemResto).getPropertyValue('width'));
    let move = 0 - (widthDivItem + 5);
    container.scrollBy(move, 0);
    let maxMove = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft < (maxMove - widthDivItem)) {
        rightButton.classList.remove('hidden');
    }
    if (container.scrollLeft === 0) {
        leftButton.classList.toggle('hidden');
    }
});
rightButton.addEventListener('click', () => {
    const widthDivItem = parseInt(window.getComputedStyle(itemResto).getPropertyValue('width'));
    let move = widthDivItem + 5;
    container.scrollBy(move, 0);
    if (container.scrollLeft > 0) {
        leftButton.classList.remove('hidden');
    }
    let maxMove = container.scrollWidth - container.clientWidth
    if (container.scrollLeft >= (maxMove - widthDivItem)) {
        rightButton.classList.toggle('hidden');
    }
});
//Boutons bar
leftBarButton.addEventListener('click', () => {
    const widthDivItem = parseInt(window.getComputedStyle(itemResto).getPropertyValue('width'));
    let move = 0 - (widthDivItem + 5);
    barContainer.scrollBy(move, 0);
    let maxMove = barContainer.scrollWidth - barContainer.clientWidth;
    if (barContainer.scrollLeft < (maxMove - widthDivItem)) {
        rightBarButton.classList.remove('hidden');
    }
    if (barContainer.scrollLeft === 0) {
        leftBarButton.classList.toggle('hidden');
    }
});
rightBarButton.addEventListener('click', () => {
    console.log('toto');
    const widthDivItem = parseInt(window.getComputedStyle(itemResto).getPropertyValue('width'));

    let move = widthDivItem + 5;
    barContainer.scrollBy(move, 0);
    if (barContainer.scrollLeft > 0) {
        leftBarButton.classList.remove('hidden');
    }
    let maxMove = barContainer.scrollWidth - barContainer.clientWidth
    if (barContainer.scrollLeft >= (maxMove - widthDivItem)) {
        rightBarButton.classList.toggle('hidden');
    }
});