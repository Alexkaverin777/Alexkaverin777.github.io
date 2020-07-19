const tabs = document.querySelectorAll('.tabs');
const tabsBtn = document.querySelectorAll('.tabs-btn');
const promoCode = document.querySelectorAll('.promo-code');
const carSlider = document.getElementById('cadSlider');
let tabName;

tabsBtn.forEach(item => {
	item.addEventListener('click', e => {
		let et = e.target;
		tabName = et.getAttribute('data-tab-name');
		if (tabName === 'tabs-score') {
			carSlider.style.transform = "translateX(-450px)"
		} else if (tabName === 'tabs-basket') {
			carSlider.style.transform = "translateX(-900px)"
		} else if (tabName === 'tabs-home') {
			carSlider.style.transform = "translateX(0px)"
		}
	})
});

promoCode.forEach(item => {
	item.addEventListener('click', e => {
		let et = e.target;
		et.classList.add('codeActive')
	})
});
