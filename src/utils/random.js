export default class Random {
	getRandomNumber = () => {
		const randomNumber = Math.floor(Math.random() * 9 + 1);
	
		return randomNumber;
	}
}

