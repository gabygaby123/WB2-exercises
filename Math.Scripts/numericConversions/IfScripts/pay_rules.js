let payRate = 17.30;
let hoursWorked = 45;
let regularHours = 40;
regulaPay = payRate * regularHours
overTimeRate = 1.5;

if ( hoursWorked <= regularHours ) { 
    console.log(regulaPay); 
    } 
    else{
        let overTimeHours = hoursWorked - regularHours;

        // 5 hours 
        
        let incRate = (payRate * overTimeRate);  
        let overTimePay = incRate * overTimeHours;
        let totalPay = overTimePay + regulaPay;
        console.log(totalPay.toFixed(2));

    }

