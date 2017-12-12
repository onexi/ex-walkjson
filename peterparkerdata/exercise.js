var exercise = {};
exercise.hobbies = [];
// return list of people taking 1.00
exercise.getCourseList = function(courseName) {
    var list = [];
    var dataLength = exercise.data.contacts.length;
    var people = exercise.data.contacts;
    var person;
    // enter code to list each person that takes this course
    for (var i = 0; i < dataLength; i++) {
        person = target[i];
        if (person.courses.includes(name))
            people.push(person);
    }
    
    return people;
};

var check = function(item) {
    if (!exercise.hobbies.includes(item)) {
        exercise.hobbies.push(item);
    }
}

// return list of hobbies
exercise.getHobbies = function() {
    var dataLength = exercise.data.contacts.length;
    var target = exercise.data.contacts;
    var person;
    // enter code to get person and their hobbies
    // add new hobby to exercise.hobbies;
    for (var i = 0; i < dataLength; i++) {
        person = target[i];
        person.hobbies.forEach(check);
    }

    return exercise.hobbies;
};

exercise.test = function() {
    return {"a": true};
}