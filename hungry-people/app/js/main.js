const selectHeader = document.getElementById('select-header'),
	selectBodyItem = document.querySelectorAll('.select-body__item'),
	selectHeaderOut = document.getElementById('select-header__out'),
	boxMenuLeft = document.querySelector('.menu__box_left'),
	menuTop = document.querySelector('.menu '),
	boxMenuRight = document.querySelector('.menu__box_right'),
	closeMenuLeft = document.querySelector('.close-menu-left'),
	closeMenuRight = document.querySelector('.close-menu-right'),
	timerOut = document.querySelector('.header-timer__time');

menuTop.addEventListener('click', (e) => {
	const target = e.target;

	const iconMenuRight = target.closest('.fa-align-right');
	const iconMenuLeft = target.closest('.fa-align-left');

	if (iconMenuRight) {
		boxMenuRight.classList.add('menu-open');
		document.body.style.overflow = 'hidden'
	} else if (iconMenuLeft) {
		boxMenuLeft.classList.add('menu-open');
		document.body.style.overflow = 'hidden'
	} else {
		boxMenuRight.classList.remove('menu-open');
		boxMenuLeft.classList.remove('menu-open');
		document.body.style.overflow = 'auto'
	}

});

const formatMonth = num => {
	let resalt = '';
	num < 10 ? resalt = `0${num + 1}` : num;
	return resalt

};
const addFormDate = () => {
	const inputDate = document.querySelector('.form__item_date');
	const date = new Date();
	const month = formatMonth(date.getMonth());
	const day = date.getDate();
	const year = date.getFullYear();
	const resalt = `${year}-${month}-${day}`;
	inputDate.value = resalt;
};
addFormDate();

for (items of selectBodyItem) {
	items.addEventListener('click', (e) => {
		let text = e.target.innerText;
		selectHeaderOut.innerText = text


		selectHeader.classList.remove('isActiveSelect');
	})
}

selectHeader.addEventListener('click', () => {
	selectHeader.classList.toggle('isActiveSelect');
});

// TABS

const tabs = document.querySelectorAll('.tabs-menu__link');
const tabContents = document.querySelectorAll('.tabs-content__box');

tabs.forEach(elem => {
	elem.addEventListener('click', e => {
		e.preventDefault();
		const elemAttribut = e.target.getAttribute('data-tab');

		tabContents.forEach(elem => {
			const tabContentsAttribut = elem.getAttribute('data-tab-content');
			if (elemAttribut === tabContentsAttribut) {
				elem.classList.add('tabsActive')
			} else {
				elem.classList.remove('tabsActive')
			}
		})
	});
});


const anchors = document.querySelectorAll('.menu__link');

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const blockID = anchor.getAttribute('href');

		document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

//slider 

const swiper = new Swiper(".specialtiesSlider", {
	spaceBetween: 0,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
let startTimer = 10 * 60;
// timer
const timer = setInterval(() => {	
	const seconds = startTimer%60;
	const minuts = startTimer/60%60;
	if (startTimer <= 0 ) {
		clearInterval(timer);
	}else {
		timerOut.innerHTML = `${Math.trunc(minuts)}:${Math.trunc(seconds)}`
	}
	--startTimer
}, 1000);