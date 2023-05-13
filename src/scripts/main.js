AOS.init();

const bDay = new Date("Dec 8 2023 20:00:00");
const timeForEvent = bDay.getTime();

const countHours = setInterval(function() {
    const now = new Date();
    const realTime = now.getTime();

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;
    

    const timeUntilEvent = timeForEvent - realTime;
    const daysUntilEvent = Math.floor(timeUntilEvent / dayInMs);
    const hoursUntilEvent = Math.floor((timeUntilEvent % dayInMs) / hourInMs)
    const minutsUntilEvent = Math.floor((timeUntilEvent % hourInMs) / minuteInMs);
    const secondsUntilEvent = Math.floor((timeUntilEvent % minuteInMs) / 1000);


    document.getElementById('contador'). innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutsUntilEvent}m ${secondsUntilEvent}s`;

    if (timeUntilEvent < 0 ) {
        clearInterval(countHours);
        document.getElementById('contador').innerHTML = 'Evento expirado!'
    }

}, 1000); 
