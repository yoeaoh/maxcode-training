// https://maxcode.dev/problems/playlist/

// parseInt("15px") === 15

function getSecondsFromFormattedTimeString(str) {
    const [ss, mm, hh = 0] = str.split(":").map(Number).reverse();
    return ss + mm * 60 + hh * 3600;

    // "HH:MM:SS"
    // "MM:SS"

    // if (splittedDuration.length === 2) {
    //     return splittedDuration[1] + (splittedDuration[0] * 60)
    // }

    // if (splittedDuration.length === 3) {
    // return splittedDuration[2] + (splittedDuration[1] * 60) + (splittedDuration[0] * 3600);
    // }

    // return splittedDuration[0]
}

function getPaddedTimeString(timeUnit) {
    return timeUnit.toString().padStart(2, "0");
}

function getFormattedTimeStringFromSeconds(secondsCount) {
//     let availableSeconds = secondsCount;
    
//     const hours = Math.floor(availableSeconds / 3600);
//     availableSeconds -= hours * 3600;
    
//     const minutes = Math.floor(availableSeconds / 60);
//     availableSeconds -= minutes * 60;

    // const hh = Math.floor(secondsCount / 3600);
    // const mm = Math.floor(secondsCount % 3600 / 60);
    // const ss = secondsCount % 60;

    // const timeUnits = hh > 0 ? [hh, mm, ss] : [mm, ss];

    // return timeUnits
    //     .map(timeUnit => timeUnit.toString().padStart(2, "0"))
    //     .join(":");

    // return `${hours ? getPaddedTimeString(hours) + ":" : ""}${getPaddedTimeString(minutes) + ":"}${getPaddedTimeString(availableSeconds)}`
}

// s = 0;
// [1, 2, 3].map((x) => {
//     x *= 2;
//     s += x
// })

// const pair = (x, y) => [x, y]
// pair(1, 2) !== pair(1, 2) 


function playlistDuration(playlist) {
    const totalSeconds = playlist.reduce((acc, [_, duration]) => {
        const [ss, mm, hh = 0] = duration.split(":").map(Number).reverse();
        const songSeconds = ss + mm * 60 + hh * 3600

        return acc + songSeconds;
    }, 0)

    // return getFormattedTimeStringFromSeconds(totalSeconds)

    const hh = Math.floor(totalSeconds / 3600);
    const mm = Math.floor(totalSeconds % 3600 / 60);
    const ss = totalSeconds % 60;

    const timeUnits = hh > 0 ? [hh, mm, ss] : [mm, ss];

    return timeUnits
        .map(timeUnit => timeUnit.toString().padStart(2, "0"))
        .join(":");
}

const innuendo = [
    ["Innuendo", "6:31"],
    ["I'm Going Slightly Mad", "4:22"],
    ["Headlong", "4:38"],
    ["I Can't Live with You", "4:33"],
    ["Don't Try So Hard", "3:39"],
    ["Ride the Wild Wind", "4:42"],
    ["All God's People", "4:21"],
    ["These Are the Days of Our Lives", "4:15"],
    ["Delilah", "3:35"],
    ["The Hitman", "4:56"],
    ["Bijou", "3:36"],
    ["The Show Must Go On", "4:35"],
];

console.log(playlistDuration(innuendo)); // "53:43"

const blackMirrorSeason4 = [
    ["USS Callister", "01:16:00"],
    ["Arkangel", "52:00"],
    ["Crocodile", "59:00"],
    ["Hang the DJ", "51:00"],
    ["Metalhead", "41:00"],
    ["Black Museum", "01:09:00"],
];

console.log(playlistDuration(blackMirrorSeason4)); // "05:48:00"
