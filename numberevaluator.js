
function printMultiplicationTable(num) {
    console.log("=== Multiplication Table for " + num + " ===");
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}


function generatePattern(num, isEven) {
    console.log("=== Star Pattern ===");
    

    if (isEven === true) {

        for (let row = 1; row <= num; row++) {
            let patternRow = "";
            for (let col = 1; col <= num; col++) {
                patternRow += "* ";
            }
            console.log(patternRow);
        }
    } else {
        
        for (let row = 1; row <= num; row++) {
            let patternRow = "";
            for (let col = 1; col <= row; col++) {
                patternRow += "* ";
            }
            console.log(patternRow);
        }
    }
}


function startAnalyzer() {
    let runAgain = true;

    while (runAgain === true) {
        
        let userInput = prompt("Enter a positive number to analyze:");
        let numberToAnalyze = Number(userInput);

        
        if (isNaN(numberToAnalyze) || numberToAnalyze <= 0) {
            alert("Invalid input! Please enter a valid positive number.");
        } else {

            let isEven = false;
            let typeMessage = "";
            
            if (numberToAnalyze % 2 === 0) {
                isEven = true;
                typeMessage = "The number " + numberToAnalyze + " is EVEN.";
            } else {
                isEven = false;
                typeMessage = "The number " + numberToAnalyze + " is ODD.";
            }


            printMultiplicationTable(numberToAnalyze);

            let sum = 0;
            for (let i = 1; i <= numberToAnalyze; i++) {
                sum += i; 
            }
            generatePattern(numberToAnalyze, isEven);

            
            alert(typeMessage + "\nThe sum of all natural numbers from 1 to " + numberToAnalyze + " is: " + sum + "\n\n(Check the console for the multiplication table and star pattern!)");
        }


        runAgain = confirm("Would you like to analyze another number?");
    }
    
    alert("Thank you for using the Number Analyzer!");
}