const addZero = number => {
	const resalt = number < 10 ? '0' + number : number;
	return resalt
};
const getMonth = (item) => {
	let dateDay = new Date(item.publishedAt);
	let month = dateDay.getMonth();
	return month
};

const getDay = (item) => {
	let dateDay = new Date(item.publishedAt);
	let day = dateDay.getDate();
	return day
};


export {getMonth, getDay, addZero}