const joinNames = (namesObj) => {
    const namesArray = namesObj.map(item => item.name);
    // console.log(namesArray);

    let namesString = '';
    if (namesArray.length === 1){
        namesString = namesArray[0];    
    }
    if (namesArray.length === 2){
        namesString = namesArray[0] + ' & ' + namesArray[1];
    }
    if (namesArray.length > 2){
        namesString = namesArray.slice(0, -1).join(', ') + ' & ' + namesArray.slice(-1);
    }

    return namesString;
}

module.exports = joinNames;
