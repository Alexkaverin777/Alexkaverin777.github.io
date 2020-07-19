let quantityMore = document.getElementById('quantityMore');
let quantitySmaller = document.getElementById('quantitySmaller');
let quantityOut = document.getElementById('quantityOut');
let buyBtn = document.getElementById('buyBtn');
let imgOk = document.getElementById('imgOk');
let selectHeader = document.getElementById('select-header');
let selectBodyItem = document.querySelectorAll('.select-body__item');

let selectHeaderOut = document.getElementById('select-header__out');


for (items of selectBodyItem) {
	items.addEventListener('click', (e) => {
		let text = e.target.innerText;
		selectHeaderOut.innerText = text


		selectHeader.classList.remove('isActiveSelect');
	})
}

const increaseInNumber = (elem) => {
	+elem.innerHTML++
};

const subtractTheNumber = (elem) => {
	if (elem.innerHTML > 1){
		+elem.innerHTML--
	}
};

quantityMore.addEventListener('click', () =>{
	increaseInNumber(quantityOut)
});

quantitySmaller.addEventListener('click', () =>{
	subtractTheNumber(quantityOut)
});

buyBtn.addEventListener('click', () => {
	if (imgOk.src.indexOf("img/vector.png")> 0 ){
		imgOk.src="img/ok.png"
	}
});

selectHeader.addEventListener('click', () => {
	selectHeader.classList.toggle('isActiveSelect');
});