function minutesSinceMidnight ()    {
    const now = new Date();
    const minutesSinceMidnight = (now.getHours() * 60) + (now.getMinutes());
    return minutesSinceMidnight;
};

function guessVsActual (guess)   {
    if (guess === minutesSinceMidnight())   {
        return "You guessed correct!"
    };
    
    return `${guess} minutes is not correct`;
};

module.exports =  {
    minutesSinceMidnight,
    guessVsActual
};