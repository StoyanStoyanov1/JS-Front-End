function addAndSubtract (num1, num2, num3) {
    function sum (num1, num2) {
        return num1 + num2;
    }

    function  subtract (num1, num2) {
        return num1 - num2;
    }

    console.log(subtract(sum(num1, num2), num3));
}

addAndSubtract(23, 6, 10)
addAndSubtract(1, 17, 30)
addAndSubtract(42, 58, 100)
