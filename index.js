function wakeDog(dogName, dogBreed){
    let response = (`Wake ${dogName} the ${dogBreed}`);
    console.log(response);
    return response
}

function leashDog(dogName, dogBreed){
    let response = (`Leash ${dogName} the ${dogBreed}`);
    console.log(response);
    return response;
}

function walkToPark(dogName, dogBreed){
    let response = (`Walk to the park with ${dogName} the ${dogBreed}`);
    console.log(response);
    return response
}

function throwFrisbee(dogName, dogBreed){
    let response = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
    console.log(response);
    return response
}

function walkHome(dogName, dogBreed){
    let response = (`Walk home with ${dogName} the ${dogBreed}`);
    console.log(response);
    return response
}

function unleashDog(dogName, dogBreed){
    let response = (`Unleash ${dogName} the ${dogBreed}`);
    console.log(response);
    return response
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
    let array = [];
    for(let i = 0; i < routine.length; i++){
        array.push(routine[i](dogName, dogBreed));
    }
    return array
}