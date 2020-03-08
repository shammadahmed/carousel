








const carousel = document.querySelector('.carousel');

const carouselImgs = document.querySelectorAll('.slide');

const carouselDots = document.querySelectorAll('.dots span');

const carouselArrows = document.querySelectorAll('.arrow');

let visibleImg = '1';

const changeVisibleImgTo = imageNumber => {
	carouselImgs.forEach(img => {
		if (img.dataset.cImg === imageNumber) {
			img.style.display = 'block';
			visibleImg = imageNumber;
		} else {
			img.style.display = 'none';
		}
	});
};

carouselDots.forEach(dot => {
	dot.addEventListener('click', () => changeVisibleImgTo(dot.dataset.cDot));
});

carouselArrows.forEach( arrow => {
	arrow.addEventListener('click', () => {
		let nextImg, prevImg;

		if (visibleImg == carouselImgs.length) {
			nextImg = '1';
		} else {
			nextImg = String(+visibleImg + 1);
		}

		if (visibleImg == '1') {
			prevImg = String(carouselImgs.length);
		} else {
			prevImg = String(+visibleImg - 1);
		}


		if (arrow.dataset.cArrow === 'f') {
			changeVisibleImgTo(nextImg);
		} else if (arrow.dataset.cArrow === 'b') {
			changeVisibleImgTo(prevImg);
		}
	});
});

document.addEventListener('DOMContentLoaded', () => changeVisibleImgTo('1'));