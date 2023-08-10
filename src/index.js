module.exports = function toReadable(number) {
    const numberArr = number.toString().split('');

    const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return `${arr1[number]}`;
    } else if (number > 19 && number < 100) {
        if (numberArr[1] === '0') {
            return `${arr2[numberArr[0] - 2]}`;
        } else {
            return `${arr2[numberArr[0] - 2]} ${arr1[numberArr[1]]}`;
        }
    } else if (number > 99 && number < 1000) {
        if (numberArr[1] === '0' && numberArr[2] === '0') {
            return `${arr1[numberArr[0]]} hundred`;
        } else if (numberArr[1] === '1') {
            return `${arr1[numberArr[0]]} hundred ${arr1[Number(numberArr[1].toString() + numberArr[2].toString())]}`;
        } else if (numberArr[2] === '0') {
            return `${arr1[numberArr[0]]} hundred ${arr2[numberArr[1] - 2]}`;
        } else if (numberArr[1] === '0') {
            return `${arr1[numberArr[0]]} hundred ${arr1[numberArr[2]]}`;
        } else {
            return `${arr1[numberArr[0]]} hundred ${arr2[numberArr[1] - 2]} ${arr1[numberArr[2]]}`;
        }
    }
}
