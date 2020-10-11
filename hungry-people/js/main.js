const selectHeader = document.getElementById('select-header');
const selectBodyItem = document.querySelectorAll('.select-body__item');
const selectHeaderOut = document.getElementById('select-header__out');
const boxMenuLeft = document.querySelector('.menu__box_left');
const menuTop = document.querySelector('.menu ');
const boxMenuRight = document.querySelector('.menu__box_right');
const closeMenuLeft = document.querySelector('.close-menu-left');
const closeMenuRight = document.querySelector('.close-menu-right');

menuTop.addEventListener('click', (e) => {
	const target = e.target;

	const iconMenuRight = target.closest('.fa-align-right');
	const iconMenuLeft = target.closest('.fa-align-left');

	if (iconMenuRight) {
		boxMenuRight.classList.add('menu-open')
	}else if (iconMenuLeft){
		boxMenuLeft.classList.add('menu-open')
	}else {
		boxMenuRight.classList.remove('menu-open');
		boxMenuLeft.classList.remove('menu-open');
	}

});

const formatMonth = num => {
	let resalt = '';
	num < 10 ? resalt = `0${num + 1}` : num;
	return resalt

};
const addFormDate = () => {
	const inputDate  = document.querySelector('.form__item_date');
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

tabs.forEach(elem =>{
	elem.addEventListener('click', e =>{
		e.preventDefault();
		const elemAttribut = e.target.getAttribute('data-tab');

		tabContents.forEach(elem =>{
			const tabContentsAttribut = elem.getAttribute('data-tab-content');
			if (elemAttribut === tabContentsAttribut){
				elem.classList.add('tabsActive')
			}else{
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


