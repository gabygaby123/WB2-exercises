let payRate = 17.30;
let hoursWorked = 45;
let regularHours = 40;
regulaPay = payRate * regularHours

if ( hoursWorked <= regularHours ) { 
    console.log(regulaPay); 
    } 
    else{
        let overTimeHours = hoursWorked - regularHours;

        // 5 hours 
        
        let incRate = (payRate * 1.5 );  
        let overTimePay = incRate * overTimeHours;
        let totalPay = overTimePay + regulaPay;
        // let totalPay = regulaPay + overTimepay;
        // console.log(totalPay);
        console.log(totalPay.toFixed(2));

    }

