function solve(arrInput) {
	const countHeroes = Number(arrInput.shift());

	const heroes = [];

	for (let i = 0; i < countHeroes; i++) {
		const [name, hp, bullets] = arrInput.shift().split(' ');
		const hero = {
			name: name,
			hp: Number(hp),
			bullets: Number(bullets),
		}
		heroes.push(hero);
	}

	while (arrInput[0] !== "Ride Off Into Sunset") {
		const [command, ...info] = arrInput.shift().split(' - ');

		if (command === 'FireShot') {
			const name = info[0];
			const target = info[1];
			console.log(fireShot(name, target))
		}

		else if (command === 'TakeHit') {
			const name = info[0];
			const damage = Number(info[1]);
			const attacker = info[2];
			console.log(takeHit(name, damage, attacker));
		}

		else if (command === 'Reload') {
			const name = info[0];
			console.log(reload(name));
		}

		else {
			const name = info[0];
			const amount = Number(info[1]);
			console.log(patchUp(name, amount));
		}
	}

	function fireShot(name, target) {
		const currentHero = heroes.find(hero => hero.name === name);

		if (currentHero.bullets > 0) {
			currentHero.bullets -= 1;
			return `${currentHero.name} has successfully hit ${target} and now has ${currentHero.bullets} bullets!`;
		}

		return `${currentHero.name} doesn't have enough bullets to shoot at ${target}!`;
	}

	function takeHit(name, damage, attacker) {
		const currentHero = heroes.find(hero => hero.name === name);
		currentHero.hp -= damage;
		if (currentHero.hp > 0) {
			return `${name} took a hit for ${damage} HP from ${attacker} and now has ${currentHero.hp} HP!`;
		}

		return `${name} was gunned down by ${attacker}!`
	}

	function reload(name) {
		const currentHero = heroes.find(hero => hero.name === name);

		if (currentHero.bullets === 6) {
			return `${name}'s pistol is fully loaded!`;
		}
		const reloadedBullets = 6 - currentHero.bullets;
		currentHero.bullets = 6;

		return `${name} reloaded ${reloadedBullets} bullets!`;
	}

	function patchUp (name, amount) {
		const currentHero = heroes.find(hero => hero.name === name);

		if (currentHero.hp === 100) {
			return `${name} is in full health!`;
		}

		currentHero.hp += amount;

		if (currentHero.hp > 100) {
			const restHp = currentHero.hp - 100;
			amount -= restHp;
			currentHero.hp = 100;
		}

		return `${name} patched up and recovered ${amount} HP!`;

	}

	heroes.forEach(hero => {
		if (hero.hp > 0) {
			console.log(`${hero.name}\n HP: ${hero.hp}\n Bullets: ${hero.bullets}`)
		}
	})

}

console.log(solve((["2",
	"Gus 100 0",
	"Walt 100 6",
	"TakeHit - Gus - 80 - Bandit",
	"PatchUp - Gus - 20",
	"Ride Off Into Sunset"])))