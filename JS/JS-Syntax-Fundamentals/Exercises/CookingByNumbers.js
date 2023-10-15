function cookingByNumbers(strNumber, ...operations) {
    let number = parseInt(strNumber)
    for (let operation of operations) {
        switch (operation) {
            case "chop":
                number = number / 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number = number + 1;
                break;
            case "bake":
                number = number * 3;
                break;
            case "fillet":
                number *= 0.8;
                break

        }

        if (Number.isInteger(number)) {
            console.log(number)
        } else {
            console.log(number.toFixed(1))
        }
    }

}