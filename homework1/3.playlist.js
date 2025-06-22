// https://maxcode.dev/problems/playlist/

function getSecondsFromFormattedTimeString(str) {
    const splittedDuration = str.split(":").map(x => Number.parseInt(x));

    if (splittedDuration.length === 2) {
        return splittedDuration[1] + (splittedDuration[0] * 60)
    }

    if (splittedDuration.length === 3) {
        return splittedDuration[2] + (splittedDuration[1] * 60) + (splittedDuration[0] * 3600);
    }

    return splittedDuration[0]
}

function getPaddedTimeString(timeUnit) {
    return timeUnit.toString().padStart(2, "0");
}

function getFormattedTimeStringFromSeconds(secondsCount) {
    let availableSeconds = secondsCount;
    let hours = 0;
    let minutes = 0;

    if (availableSeconds / 3600 > 0) {
        hours = Math.floor(availableSeconds / 3600);
        availableSeconds = availableSeconds - hours * 3600;
    }

    if (availableSeconds / 60 > 0) {
        minutes = Math.floor(availableSeconds / 60);
        availableSeconds = availableSeconds - minutes * 60;
    }

    return `${hours ? getPaddedTimeString(hours) + ":" : ""}${getPaddedTimeString(minutes) + ":"}${getPaddedTimeString(availableSeconds)}`
}

function playlistDuration(playlist) {
    const totalSeconds = playlist.reduce((acc, [_, duration]) => {
        acc = acc + getSecondsFromFormattedTimeString(duration);

        return acc;
    }, 0)

    return getFormattedTimeStringFromSeconds(totalSeconds)
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
