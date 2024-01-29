 class car{
    // properties
    constructor(name,modelnumber,color){
        this.name=name;
        this.modelnumber=modelnumber;
        this.color=color;
    }
    // methods
    maxspeed(){};
    acceleration(){};
    gearchange(){};
    displaydata(){
    return this.name +
           this.modelnumber +
           this.color
       
}

}
var obj1=new car("toyta",20,"black")
var obj2=new car("kia",20,"white")
// printing
for (const key in obj1) {
    console.log(key+":"+obj1[key])
    }

console.log(obj1.modelnumber)
console.log(obj1.displaydata())