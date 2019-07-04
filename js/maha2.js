class employee{
    constructor(firstname,lastname,jobtitle,salary){
        this.firstname =firstname;
        this.lastname =lastname ;
        this.fullname =()=>`${this.firstname}${this.lastname}`
        this.jobtitle =jobtitle;
        this.salary = salary;
       // this.gender = gender;
        this.active = true
    }

   /* printGender=()=>{
        console.log(this.gender);
    }*/
    fire(){this.active=false};


    info(){
        if(this.active){
            const info = `${this.fullname()} is a  ${this.jobtitle} and her salary is  ${this.salary}$'s per hour`;
            console.log(info);
        }
        else{
            const info = "employee is not available";
            console.log(info);
        }
    }
}

let nanu= new employee("");
//nanu.printGender();
//nanu.fire();
//console.log(nanu.info());