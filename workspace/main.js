
function startNumberSmallerThanEndNumber(startParam, endParam){
    return startParam<=endParam;
}

function isInRangeOf1To1000(startParam, endParam){
    return startParam>0&&startParam<=1000&&endParam>0&&endParam<=1000;
}

function createMultiplicationEquation(startParam, endParam){
    let multiplicationTable = ``;
    for(let i=startParam;i<=endParam;i++){
        for(let j=startParam; j<=i; j++){
            multiplicationTable = multiplicationTable+`${j}*${i}    `;
        }
        multiplicationTable=multiplicationTable+'\n';
    }
    return multiplicationTable;
}

function outputMultiplicationTable(startNubmer, endNumber){
    if(startNumberSmallerThanEndNumber(startNubmer, endNumber)&&isInRangeOf1To1000(startNubmer, endNumber)){
        return createMultiplicationEquation(startNubmer, endNumber);
    }
    return null;
}

exports.startNumberSmallerThanEndNumber = startNumberSmallerThanEndNumber;
exports.isInRangeOf1To1000 = isInRangeOf1To1000;
exports.createMultiplicationEquation = createMultiplicationEquation;
exports.outputMultiplicationTable = outputMultiplicationTable;