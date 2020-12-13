import {
	MAXIMUM_RANDOM_NUMBER,
	MINIMUM_RANDOM_NUMBER,
} from '../constants/constants.js';

export default class Random {
	getRandomNumber = () => {
		const randomNumber = this.makeRandomNumber(MINIMUM_RANDOM_NUMBER, MAXIMUM_RANDOM_NUMBER);
	
		return randomNumber;
	}

	makeRandomNumber = (min, max) => {
		const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
		
		return randomNumber;
	}
}

