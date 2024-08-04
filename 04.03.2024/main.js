let students = [
    {id: "1", 
    name: "omer", grade: 100},
    {id: "2", 
    name: "avi", grade: 40},
    {id: "3", 
    name: "gaga", grade: 80},

];

function getValuesFromKey (array, key) {
    let newArrayNames = []
    
    for (i = 0; i < students.length; i++) {
        let studentNames = students[i][key]
        newArrayNames.push(studentNames)
    }
    return newArrayNames

}
// console.log(getValuesFromKey(students, `name`));


function getPassStudent(array, number) {
    let passStudents = [];
    
    for (let i = 0; i < array.length; i++) {
        let studentInfo = array[i];
        
        if (studentInfo.grade > number) {
            passStudents.push(studentInfo);
        }
    }
    
    return passStudents;
}

// console.log(getPassStudent(students, 70));

function createPersons(names) {
    let persons = []

    for (i = 0; i < 3; i++) {

        //What Omer did:
        // let newPerson = { "name:": name[i] };
        // persons.push(newPerson)

        let name = names[i] 
        persons.push([`name:`,name])
    }
    console.log(persons);
    
    return persons

    }


createPersons([`yossi`,`liraz`,`baba`])
