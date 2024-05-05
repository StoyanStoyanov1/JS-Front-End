function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {

        class Worker {
            constructor(name, salary) {
                this.name = name;
                this.salary = salary;
            }
        }

        class Restaurant {
            constructor(name) {
                this.name = name;
                this.workers = [];
            }

            avgSalary() {

                const sumOfSalaries = this.workers.reduce((sum, worker) => sum + worker.salary, 0);
                const avgSalary = sumOfSalaries / this.workers.length;

                return avgSalary.toFixed(2);

            }
        }

        const input = document.querySelector('#inputs textarea')
        const inputTextarea = JSON.parse(input.value);
        const bestRestaurant = document.querySelector('#bestRestaurant p');
        const bestRestaurantsWorkers = document.querySelector('#workers p');
        const restaurants = [];

        bestRestaurant.textContent = '';
        bestRestaurantsWorkers.textContent = '';


        for (const text of inputTextarea) {
            const [restaurantName, workers] = text.split(' - ');
            let objRestaurant = restaurants.find((restaurant => restaurant.name === restaurantName));
            if (!objRestaurant) {
                objRestaurant = new Restaurant(restaurantName);
                restaurants.push(objRestaurant)
            }
            for (const workersInfo of workers.split(', ')) {
                const [workerName, salary] = workersInfo.split(' ')
                const objWorker = new Worker(workerName, parseInt(salary));
                objRestaurant.workers.push(objWorker);
            }

            objRestaurant.workers.sort((a, b) => b.salary - a.salary);

        }

        restaurants.sort((a, b) => b.avgSalary() - a.avgSalary());

        const theBestRestaurant = restaurants[0];


        bestRestaurant.textContent = `Name: ${theBestRestaurant.name} Average Salary: ${theBestRestaurant.avgSalary()} Best Salary: ${theBestRestaurant.workers[0].salary.toFixed(2)}`;


        const allSortedWorkers = theBestRestaurant.workers
            .reduce((result, worker) => {
                result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
                return result;
            }, []);

        bestRestaurantsWorkers.textContent = allSortedWorkers.join(' ');

        input.value = '';
    }
}