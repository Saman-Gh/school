let schools = {
    schoolId : "SCH-1000",
    schoolName: "Cheng",
    phone: "+6018-3410502",
    email: "info@chengon.com",
    country: "China",
    language: "Mandari",
    classes: [
        {
            classId: "C-1",
            name: "UOA1",
            teacher: "Brouse",
            floor: "First",
            students: [
                {
                    studentId: "S1-1000",
                    firstName: "Jack",
                    lastName: "Robbin",
                    gender: "male",
                    grade: 3,
                    age: 16,
                    email: "jachrobiin@hotmail.com",
                    fullName: function (){
                        return `${this.firstName} ${this.lastName}`
                    }
                }
            ]
        },
        {
            classId: "C-2",
            name: "UOA2",
            teacher: "Frank",
            floor: "seconf",
            students: []
        }
    ]
};

module.exports =  schools