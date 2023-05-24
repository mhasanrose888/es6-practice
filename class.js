class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Robertsiongonj High School."
    }
}

const student1 = new Student(13, "Muaz");
const student2 = new Student(17, "Faiyaz");
const student3 = new Student(15, "Diya")
console.log(student1, student2, student3);
