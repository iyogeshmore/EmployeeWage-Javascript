console.log("Welcome to Employee payroll program");

//UC6 :Store the Daily Wage along with the Total Wage - Save in an Array the Daily Wage

const IS_PART_TIME = 1;  
const IS_FULL_TIME = 2; 
const PART_TIME_HOURS = 4; 
const FULL_TIME_HOURS = 8; 
function getWorkingHours (empCheck)
{
 switch(empCheck)
{
    case IS_PART_TIME:
    return PART_TIME_HOURS;
    case IS_FULL_TIME:
    return FULL_TIME_HOURS;
    default:
    return 0;
}
}

const WAGE_PER_HOUR = 20; 
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days: "+totalWorkingDays + ", Total Hours: "+totalEmpHrs+ ", Employee Wage: "+empWage)
