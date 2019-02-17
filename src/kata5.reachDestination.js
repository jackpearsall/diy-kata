const reachDestination = (distance, speed) => {

    const time = distance / speed;

    return Math.round(time*2)/2;


}

module.exports = reachDestination;
