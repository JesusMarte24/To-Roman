const MainForm = document.getElementById('main--form');
const MainInput = document.getElementById('main--input');
const MainBtn = document.getElementById('main--button');
const result1 = document.getElementById('result--1');
const result2 = document.getElementById('result--2');
const romans = {
	M: 1000,
	CM: 900,
	D: 500,
	CD: 400,
	C: 100,
	XC: 90,
	L: 50,
	XL: 40,
	X: 10,
	IX: 9,
	V: 5,
	IV: 4,
	I: 1,
};

const toRoman = (value) => {
	if (value > 3999) {
		alert("Oh I'm really sorry, this app just works until 3,999");
		MainInput.value = '';
		return null;
	}

	result1.innerText = value;
	result1.style.color = '#000000';

	let result = '';

	for (const key in romans) {
		while (romans[key] <= value) {
			result = result + key;
			value = value - romans[key];
		}
	}

	result2.innerText = result;
	result2.style.color = '#0e83cd';
	MainInput.value = '';
};

MainForm.addEventListener('submit', (e) => {
	e.preventDefault();
});

MainBtn.addEventListener('click', () => {
	toRoman(MainInput.value);
});
