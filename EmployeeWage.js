console.log("Welcome to Employee payroll program");

// UC1 :Check Employee Presence 

const IS_ABSENT = 0
let empCheck = Math.floor(Math.random()*10)%2;
if (empCheck == IS_ABSENT)
{
    console.log("Employee is Absent");
}
    else
    {
        console.log("Emplooyee is Present");
    }
