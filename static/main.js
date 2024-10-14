// references to dom

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');

let papers = document.querySelectorAll("[id^='paper'")
console.log(papers);
//Logic
let currentLocation = 1; //which front page is seen
let numberOfPages = 4;
let maxLocation = numberOfPages + 1; //to be able to see the back cover

//event listeners
prevBtn.addEventListener('click', goPrevPage);
nextBtn.addEventListener('click', goNextPage);


function openBook() {
    let toTranslate = document.getElementById('book').offsetWidth;
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = `translateX(-${toTranslate / 2}px)`;
    nextBtn.style.transform = `translateX(${toTranslate / 2}px)`;
}

function closeBook(isAtStart) {
    if (isAtStart) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = 'translateX(100%)'
    }
    prevBtn.style.transform = 'translateX(0)';
    nextBtn.style.transform = 'translateX(0)';
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        // if (currentLocation == 1) {
        //     openBook();
        // } else if (currentLocation == numberOfPages) {
        //     closeBook(false);
        // } else if (currentLocation == numberOfPages + 1) return;
        // papers[currentLocation - 1].classList.add('flipped');
        // papers[currentLocation - 1].style.zIndex = currentLocation;

        switch (currentLocation) {
            case 1:
                openBook();
                papers[0].classList.add('flipped');
                papers[0].style.zIndex = 1;
                break;
            case 2:
                papers[1].classList.add('flipped');
                papers[1].style.zIndex = 2;
                break;
            case 3:
                papers[2].classList.add('flipped');
                papers[2].style.zIndex = 3;
                break;
            case 4:
                papers[3].classList.add('flipped');
                papers[3].style.zIndex = 4;
                closeBook(false);
                break;
            default:
                throw new Error('Invalid page number');
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        // papers[currentLocation - 2].classList.remove('flipped');
        // papers[currentLocation - 2].style.zIndex = numberOfPages - currentLocation + 2;
        // if (currentLocation == numberOfPages + 1) {
        //     openBook();
        // } else if (currentLocation == 2) {
        //     closeBook(true);
        // } else if (currentLocation == 1) return;

        switch (currentLocation) {
            case 2:
                closeBook(true);
                papers[0].classList.remove('flipped');
                papers[0].style.zIndex = 4;
                break;
            case 3:
                papers[1].classList.remove('flipped');
                papers[1].style.zIndex = 3;
                break;
            case 4:
                papers[2].classList.remove('flipped');
                papers[2].style.zIndex = 2;
                break;
            case 5:
                openBook();
                papers[3].classList.remove('flipped');
                papers[3].style.zIndex = 1;
                break; 
            default:
                throw new Error('Invalid page number');
        }
        currentLocation--;
    }
}