class Student {
    constructor(name, age, marks) {
      this.name = name;
      this.age = age;
      this.marks = marks;
    }
    setPlacementAge(minPlacementAge) {
       return  (minMarks) => {
        if (this.marks >= minMarks && this.age >= minPlacementAge) {
          return true;
         }
        else {
          return false;
        }
      }
     
      //return a function which takes in argument -> minMarks
      //returns true if students marks are gretaer than minMarks and age gretaer than minPlacementAge
      //Complete this function only. Do not alter any other thing.
    }
  }
  