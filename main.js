var registeredEarly = true;
var runnerAge = 18;
var raceNumber = Math.floor(Math.random() * 1000);

if (runnerAge >= 18 && registeredEarly) {
    raceNumber += 1000;
}

if (runnerAge >= 18 && registeredEarly) {
    console.log(`Number ${raceNumber}: Early adults race at 9:30 AM`)
} else if (runnerAge >= 18 && !registeredEarly) {
    console.log(`Number ${raceNumber}: Late adults race at 11:00 AM`)
} else {
    console.log(`Number ${raceNumber}: Youth registrants race at 12:30 PM`)
}
