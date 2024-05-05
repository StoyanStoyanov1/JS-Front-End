function cats(arrCats) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }


    arrCats.forEach(cat => {
        const [name, age] = cat.split(' ');
        const classCat = new Cat(name, age);
        classCat.meow();
    });
}


cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);