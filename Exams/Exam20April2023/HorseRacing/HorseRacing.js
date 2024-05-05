function horseRacing(arrInput) {
	let horses = arrInput.shift().split('|');

	while (arrInput[0] !== 'Finish') {
		const [command, ...horse] = arrInput.shift().split(' ');

		switch (command) {
			case 'Retake': horses = retake(horses, ...horse); break;
			case 'Trouble': horses = trouble(horses, ...horse); break;
			case 'Rage': horses = rage(horses, ...horse); break;
			case 'Miracle': horses = miracle(horses); break;
		}
	}

	console.log(horses.join('->'));
	console.log(`The winner is: ${horses[horses.length - 1]}`);
	function retake(horses, firstHorse, secondHorse) {
		const indexOfFirstHorse = horses.indexOf(firstHorse);
		const indexOfSecondHorse = horses.indexOf(secondHorse);

		if (indexOfFirstHorse < indexOfSecondHorse) {
			horses[indexOfFirstHorse] = secondHorse;
			horses[indexOfSecondHorse] = firstHorse;
			console.log(`${firstHorse} retakes ${secondHorse}.`);
		}

		return horses
	}

	function trouble(horses, horse) {
		let indexOfHorse = horses.indexOf(horse);

		if (indexOfHorse > 0) {
			horses[indexOfHorse] = horses[indexOfHorse - 1];
			horses[indexOfHorse - 1] = horse;
			console.log(`Trouble for ${horse} - drops one position.`);
		}

		return horses
	}

	function rage(horses, horse) {
		let indexOfHorse = horses.indexOf(horse);

		horses.splice(indexOfHorse, 1);

		indexOfHorse = indexOfHorse + 2 >= horses.length? horses.length : indexOfHorse + 2;
		horses.splice(indexOfHorse, 0, horse);
		console.log(`${horse} rages 2 positions ahead.`)

		return horses;
	}

	function miracle(horses) {
		const horse = horses.shift();
		horses.push(horse);

		console.log(`What a miracle - ${horse} becomes first.`);

		return horses;
	}
}

horseRacing((['Onyx|Domino|Sugar|Fiona',
	'Trouble Onyx',
	'Retake Onyx Sugar',
	'Rage Domino',
	'Miracle',
	'Finish'])
)