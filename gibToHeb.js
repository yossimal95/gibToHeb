const releventAsciiTableGibToHeb = {
    96: 59,
    113: 47,
    39: 39,
    101: 1511,
    114: 1512,
    116: 1488,
    121: 1496,
    117: 1493,
    105: 1503,
    111: 1501,
    112: 1508,
    97: 1513,
    115: 1491,
    100: 1490,
    102: 1499,
    103: 1506,
    104: 1497,
    106: 1495,
    107: 1500,
    108: 1498,
    59: 1507,
    39: 44,
    122: 1494,
    120: 1505,
    99: 1489,
    118: 1492,
    98: 1504,
    110: 1502,
    109: 1510,
    44: 1514,
    46: 1509,
    47: 46,
};

const releventAsciiTableHebToGib = {};

const initHebToGib = () => {
    Object.keys(releventAsciiTableGibToHeb).forEach((item) => {
        releventAsciiTableHebToGib[releventAsciiTableGibToHeb[item]] = parseInt(item);
    });
}

initHebToGib();

const gibToHeb = (inputString) => {
    if (inputString.trim().length === 0 || inputString == null) {
        return inputString;
    }
    try {
        let outputString = '';
        inputString.trim().split('').forEach((char) => {
            if (releventAsciiTableGibToHeb.hasOwnProperty(char.toLowerCase().charCodeAt(0))) {
                return outputString += String.fromCharCode(releventAsciiTableGibToHeb[char.toLowerCase().charCodeAt(0)]);
            }
            return outputString += char;
        });
        return outputString;
    }
    catch (e) {
        console.error(e);
        return inputString;
    }
}

const hebToGib = (inputString) => {
    if (inputString.trim().length === 0 || inputString == null) {
        return inputString;
    }
    try {
        let outputString = '';
        inputString.trim().split('').forEach((char) => {
            if (releventAsciiTableHebToGib.hasOwnProperty(char.charCodeAt(0))) {
                return outputString += String.fromCharCode(releventAsciiTableHebToGib[char.charCodeAt(0)]);
            }
            return outputString += char;
        });
        return outputString;
    }
    catch (e) {
        console.error(e);
        return inputString;
    }
}