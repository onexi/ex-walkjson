var exercise = {};
exercise.hobbies = [];
// return list of people taking 1.00
exercise.getCourseList = function(courseName) {
    var list = [];
    var dataLength = exercise.data.contacts.length;
    var people = exercise.data.contacts;
    var person;
    // enter code to list each person that takes this course
    for (var idx = 0; idx < dataLength; idx++) {
        if ( people[idx].courses.includes(courseName) ){
            list.push(people[idx]);
        } 
        
    }



    return list;
};
// return list of hobbies
exercise.getHobbies = function() {
    var dataLength = exercise.data.contacts.length;
    var target = exercise.data.contacts;
    var person;
    // enter code to get person and their hobbies
    // add new hobby to exercise.hobbies;
    for (var idx = 0; idx < dataLength; idx++){
        for (var i_h=0; i_h < target[idx].hobbies.length; i_h++){
            if(!exercise.hobbies.includes(target[idx].hobbies[i_h])){
                exercise.hobbies.push(target[idx].hobbies[i_h]);
            }
        }
    }

    return exercise.hobbies;
};