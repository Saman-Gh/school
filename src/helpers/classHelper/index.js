const schools = require("../../../objects")

function createNewClassId(){
    if(schools.classes.length !== 0){
        let lastIdNumber = schools.classes[schools.classes.length - 1].classId
        let splited = lastIdNumber.split('-')
        let newIdNumber = Number(splited[1]) + 1
        return `C-${newIdNumber}`
    }else{
        return "C-1"
    }
}

function createNewClass (className , teacherName, classFloor){
    if(className && teacherName && classFloor){
        let classChecker = true;
        for(let i = 0; i < schools.classes.length; i++){
            if(schools.classes[i].name === className){
                classChecker = false;
                return "The class with this name exists."
            }
        }
        if(classChecker === true){
            let newClass = {
                classId: createNewClassId(),
                name: className,
                teacherName: teacherName,
                floor: classFloor,
                students: []
            }
            schools.classes.push(newClass)
            return "The class has been created successfully."
            }
    }else{
        return "Make sure you have filled out the reuqired fields."
    }
}

function classIndexFinder (className){
    for(let i = 0 ; i < schools.classes.length; i++){
        if(schools.classes[i].name === className){
            return i
        }
    }
    return "There is no such a class name."
}

function classlistFinder () {
    let list = schools.classes.map((className) => className.name)
    return list
}

module.exports = {
    createNewClassId: createNewClassId,
    createNewClass: createNewClass,
    classIndexFinder: classIndexFinder,
    classlistFinder: classlistFinder
}