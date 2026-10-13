
function displayMenu() {
    console.log("=== VENDING MACHINE MENU ===");
    console.log("1. Potato Chips - $2");
    console.log("2. Chocolate Bar - $3");
    console.log("3. Bottled Water - $1");
    console.log("4. Soda Can - $2");
    console.log("5. Gummy Bears - $4");
    console.log("============================");
}

function calculateChange(price, amount) {
    return amount - price;
}


function finishPurchase(itemName, itemNumber) {

    for (let i = 3; i >= 1; i--) {
        console.log("Dispensing in... " + i);
    }
    alert(itemName + " is ready! Enjoy!");

    console.log("Pattern for Item " + itemNumber + ":");
    for (let row = 1; row <= itemNumber; row++) {
        let patternRow = "";
        for (let col = 1; col <= row; col++) {
            patternRow += col + " ";
        }
        console.log(patternRow);
    }
}

function startMachine() {
    let runAgain = true;


    while (runAgain === true) {
        displayMenu();
        
        let itemInput = prompt("Enter the item number (1-5) from the console menu:");
        let itemNumber = Number(itemInput);

        if (itemNumber < 1 || itemNumber > 5 || isNaN(itemNumber)) {
            alert("Invalid selection! Please enter a number between 1 and 5.");
        } else {
    
            let moneyInput = prompt("How much money are you inserting ($)?");
            let money = Number(moneyInput);

            if (money < 0 || isNaN(money)) {
                alert("Invalid amount! Money cannot be negative or text.");
            } else {
                let price = 0;
                let itemName = "";

                if (itemNumber === 1) 
                    { price = 2; itemName = "Potato Chips"; }
                else if (itemNumber === 2) 
                    { price = 3; itemName = "Chocolate Bar"; }
                else if (itemNumber === 3) 
                    { price = 1; itemName = "Water Bottle"; }
                else if (itemNumber === 4) 
                    { price = 2; itemName = "Soda Can"; }
                else if (itemNumber === 5)
                     { price = 4; itemName = "Gummy Bears"; }

            
                if (money < price)
                     {
                    alert("Insufficient balance! " + itemName + " costs $" + price + ", but you only inserted $" + money + ".");
                } else if (money === price) 
                    {
                    alert("Exact payment accepted. Item selected: " + itemName + ". No change returned.");
                    finishPurchase(itemName, itemNumber);
                } else {
                    let change = calculateChange(price, money);
                    alert("Payment accepted. Item selected: " + itemName + ". Your change is $" + change + ".");
                    finishPurchase(itemName, itemNumber);
                }
                
            }
        }

        runAgain = confirm("Would you like to make another purchase?");
    }

    alert("Thank you for using the Smart Vending Machine. Have a great day!");
}
