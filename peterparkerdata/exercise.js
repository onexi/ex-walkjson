var exercise = {};
exercise.hobbies = [];
exercise.getCourseList = function(name) {
    var people = [];
    var dataLength = exercise.data.contacts.length;
    var target = exercise.data.contacts;
    var person;
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
exercise.getHobbies = function(salary) {
    var dataLength = exercise.data.contacts.length;
    var target = exercise.data.contacts;
    var person;
    for (var i = 0; i < dataLength; i++) {
        person = target[i];
        person.hobbies.forEach(check);
    }
    return exercise.hobbies;
};

exercise.test = function() {
    return {"a": true};
}