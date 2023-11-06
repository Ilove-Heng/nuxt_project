function findPermutations (num: string): string[] {
    const result: string[] = [];

    const helper = (arr: string[], perm: string) => {
        if (arr.length === 0) {
            result.push(perm);
        } else {
            for (let i = 0; i < arr.length; i++) {
                const remaining = arr.filter((_, index) => index !== i);
                helper(remaining, perm + arr[i]);
            }
        }
    };
    helper(num.split(''), '');

    return result;
}
//todo: usage
// const uniquePermutations = [...new Set(findPermutations('511'))];
// console.log(uniquePermutations);


function findNormalDrag(start: string, end: string): string[] {
    let result: string[] = [];

    let startNum = parseInt(start, 10);
    let endNum = parseInt(end, 10);

    if (endNum - startNum < 30) {
        for (let i = startNum; i <= endNum; i++) {
            // Adding leading zeros if i is less than 10
            result.push(i < 10 ? '0' + i.toString() : i.toString());
        }
    }

    return result;
}
//todo: usage
// console.log(findNormalDrag('10','19')); (10) ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"] 


function findDoubleDigit(start: string, end: string): string[] {
    let result: string[] = [];
    let startNum = parseInt(start);
    let endNum = parseInt(end);

    if (endNum / 11 - startNum / 11 < 10) {
        for (let i = startNum; i <= endNum; i += 11) {
            let strNum = i.toString();
            // Add leading zero if necessary
            if (strNum.length === 1) {
                strNum = "0" + strNum;
            }
            result.push(strNum);
        }
    }

    return result;
}

//todo: usage
// console.log(findDoubleDigit('55','99')) ["55", "66", "77", "88", "99"] 


function findLastSequence(start: string, end: string): string[] {
    let result: string[] = [];
    let startNum = parseInt(start);
    let endNum = parseInt(end);
    let step = start.length === 2 ? 10 : 1; // Step based on the length of the start number

    for (let i = startNum; i <= endNum; i += step) {
        let strNum = i.toString();
        // Add leading zeros if necessary
        while (strNum.length < start.length) {
            strNum = "0" + strNum;
        }
        result.push(strNum);
    }

    return result;
}

//todo: usage
// console.log(findLastSequence("10","90")) ["10", "20", "30", "40", "50", "60", "70", "80", "90"]

function findEvenOrOdd(start: string, end: string, isEven: boolean): string[] {
    let result: string[] = [];
    let startNum = parseInt(start);
    let endNum = parseInt(end);

    for (let i = startNum; i <= endNum; i++) {
        let strNum = i.toString().padStart(2, '0');
        result.push(strNum);
    }

    result = result.filter(num => isEven ? parseInt(num) % 2 === 0 : parseInt(num) % 2 !== 0);

    return result;
}

//todo: usage
//console.log(findEvenOrOdd('00', '12', true));
//console.log(findEvenOrOdd('12','19', false));

function findTripleDigit(start: string, end: string): string[] {
    let result: string[] = [];
    let startNum = parseInt(start);
    let endNum = parseInt(end);
    let step = 111; // Step based on the length of the start number

    for (let i = startNum; i <= endNum; i += step) {
        let strNum = i.toString();
        // Add leading zeros if necessary
        while (strNum.length < 3) {
            strNum = "0" + strNum;
        }
        result.push(strNum);
    }

    return result;
}
//todo: usage
// console.log(findTripleDigit('000', '777')) ["000", "111", "222", "333", "444", "555", "666", "777"]

function findTripleDigitEvenOrOdd(start: string, end: string, isEven: boolean): string[] {
    let result: string[] = [];
    let startNum = parseInt(start);
    let endNum = parseInt(end);
    let step = start.length === 2 ? 11 : 111; // Step based on the length of the start number

    for (let i = startNum; i <= endNum; i += step) {
        let strNum = i.toString();
        // Add leading zeros if necessary
        while (strNum.length < 3) {
            strNum = "0" + strNum;
        }
        result.push(strNum);
    }

    result = result.filter(num => isEven ? parseInt(num) % 2 === 0 : parseInt(num) % 2 !== 0);

    return result;
}

//todo: usage
// console.log(findTripleDigitEvenOrOdd('000', '999', false)) ["111", "333", "555", "777", "999"]
// console.log(findTripleDigitEvenOrOdd('000', '999', true)) ["000", "222", "444", "666", "888"] 

function findMiddleNumber(start: string, end: string): string[] {
    let result: string[] = [];

    let startNum = parseInt(start);
    let endNum = parseInt(end);

    for (let i = startNum; i <= endNum; i += 10) {
        // Convert number to string and add leading zeros if necessary
        let strNum = i.toString();
        while (strNum.length < start.length) {
            strNum = "0" + strNum;
        }
        result.push(strNum);
    }

    return result;
}

//todo: usage
// console.log(findMiddleNumber('001','191')) ["001", "011", "021", "031", "041", "051", "061", "071", "081", "091", "101", "111", "121", "131", "141", "151", "161", "171", "181", "191"] 

function findFirstNumber(start: string, end: string): string[] {
    let result: string[] = [];

    let startNum = parseInt(start);
    let endNum = parseInt(end);

    for (let i = startNum; i <= endNum; i += 100) {
        // Convert number to string and add leading zeros if necessary
        let strNum = i.toString();
        while (strNum.length < start.length) {
            strNum = "0" + strNum;
        }
        result.push(strNum);
    }

    return result;
}


//todo: usage
// console.log(findFirstNumber('011','911')) ["011", "111", "211", "311", "411", "511", "611", "711", "811", "911"] 

function findLastNumber(start: string, end: string): string[] {
    let result: string[] = [];

    let startNum = parseInt(start);
    let endNum = parseInt(end);

    for (let i = startNum; i <= endNum; i++) {
        // Convert number to string and add leading zeros if necessary
        let strNum = i.toString();
        while (strNum.length < start.length) {
            strNum = "0" + strNum;
        }
        result.push(strNum);
    }

    return result;
}

//todo: usage
//console.log(findLastNumber('110','119')); ["110", "111", "112", "113", "114", "115", "116", "117", "118", "119"]


export {
    findPermutations,
    findNormalDrag,
    findDoubleDigit,
    findLastSequence,
    findEvenOrOdd,
    findTripleDigit,
    findTripleDigitEvenOrOdd,
    findMiddleNumber,
    findFirstNumber,
    findLastNumber,
}



