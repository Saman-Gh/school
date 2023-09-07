const schools = require('../../../objects');
const classHelper = require("../classHelper/index");

function createNewStudentId (){
    let studentChecker = false;
    let newStudentId = 0
    for(let i = 0; i < schools.classes.length; i++){
        for(let j = 0; j < schools.classes[i].students.length ; j++){
            if(schools.classes[i].students.length > 0){
                let tempId = schools.classes[i].students[schools.classes[i].students.length - 1].studentId;
                let splited = tempId.split('-')
                newStudentId = Number(splited[1])
                studentChecker = true;
            }
        }
    }
    if(studentChecker === true){
        return `S1-${newStudentId + 1}`
    }else{
        return "S1-1000"
    }
}

function createNewStudent(className, firstName, lastName, parentName, gender, grade, age, email) {
    if(className && firstName && lastName && parentName && gender&& grade && age && email){
        let classIndex = classHelper.classIndexFinder(className)
        if(typeof classIndex === "number"){
            let newStudent = {
                studentId: createNewStudentId(),
                firstName: firstName,
                lastName: lastName,
                parentName: parentName,
                gender: gender,
                grade : grade,
                age: age,
                email: email,
                fullName: function (){
                    return `${this.firstName} ${this.lastName}`
                }
            }
            schools.classes[classIndex].students.push(newStudent);
            return "The students has been created successfully."
        }else{
            return 'there is no such a class name'
        }
        
    }else{
        return "Make sure you have filled out the reuqired fields."
    }
}

function studentDetailsFinder(id){
    let classAddress;
    let classValidator = false;
    if(id){
        for(let i = 0 ; i < schools.classes.length; i++){
            for(let j = 0 ; j < schools.classes[i].students.length; j++){
                if(schools.classes[i].students[j].studentId === id){
                    classAddress = schools.classes[i].name;
                    classValidator = true
                    break ;
                }
            }
        }
        if(classValidator === true){
            return `Class name is: ${classAddress}`
        }else{
            return "There is no such a class name."
        } 
    }
    else{
        return "Please put the student id."
    }
}

module.exports = {
    createNewStudentId: createNewStudentId,
    createNewStudent: createNewStudent,
    studentDetailsFinder: studentDetailsFinder
}

