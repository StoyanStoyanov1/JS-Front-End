function inventory(arrInventory) {
    const heroes = [];
    const result = [];

    arrInventory.forEach(currentInventory => {
        const [heroName, heroLevel, items] = currentInventory.split(' / ');
        const hero = {name: heroName, level: heroLevel, items: items};
        heroes.push(hero);
    })

    const sortedHeroes = heroes.sort((a, b) => a.level - b.level)

    sortedHeroes.forEach(hero => {
        const consoleHero = `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`;
        result.push(consoleHero);
    })

    return result.join('\n')
}

console.log(inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]))