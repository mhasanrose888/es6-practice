class Parent {
    constructor(name){
        this.fatherName = "Maniruzzaman Suiden";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Jibon");
const baby2 = new Child("Faiyaz");
console.log(baby.getFullName());
console.log(baby2);