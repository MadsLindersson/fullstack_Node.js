let minutesSinceMidnight;

function setMinutesSinceMidnight (value) {
    minutesSinceMidnight = value;
};

function getMinutesSinceMidnight () {
    return minutesSinceMidnight;
};

function guessVsActual (guess)   {

    const guessNumber = Number(guess);

    if (isNaN(guessNumber) || !guessNumber) {
        return "You need to enter a number";
    }

    if (guess === minutesSinceMidnight)   {
        return "You guessed correct!";
    } else if (guess > minutesSinceMidnight)    {
        return "You guessed too high";
    } else  {
        return "you guessed too low";
    };
};

module.exports =  {
    setMinutesSinceMidnight,
    getMinutesSinceMidnight,
    guessVsActual
};