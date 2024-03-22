function attachEventsListeners() {

    const buttons = Array.from(document.querySelectorAll('input[type="button"]'));

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            switch (button.id) {
                case 'daysBtn':
                    convertFromDays(Number(daysInput.value));
                    break;
                case 'hoursBtn':
                    convertFromHours(Number(hoursInput.value));
                    break;
                case 'minutesBtn':
                    convertFromMinutes(Number(minutesInput.value));
                    break;
                case 'secondsBtn':
                    convertFromSeconds(Number(secondsInput.value));
                    break;
            }
        });
    });

    function convertFromDays(days) {
        daysInput.value = days;
        hoursInput.value = days * 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    }

    function convertFromHours(hours) {
        const days = hours / 24;
        convertFromDays(days);
    }

    function convertFromMinutes(minutes) {
        const hours = minutes / 60;
        convertFromHours(hours);
    }

    function convertFromSeconds(seconds) {
        const minutes = seconds / 60;
        convertFromMinutes(minutes);
    }
}
