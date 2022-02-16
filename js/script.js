// needed variables
const errorMessage = document.getElementById('error-message');
const totalExpenseField = document.getElementById('expense');
const totalBalanceField = document.getElementById('balance');
// Calculate and show expense total
function getAndCalculateExpenseTotal() {
    const foodInput = document.getElementById('food-input');
    const foodCost = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentCost = parseFloat(rentInput.value);
    const clothsInput = document.getElementById('cloths-input');
    const clothsCost = parseFloat(clothsInput.value)
    // Handle errors
    // The input type is number. So there are no option to type string in input. This why i have used one error handling.
    if(foodCost < 0) {
        errorMessage.innerText = 'Please Input a positive number in Food Field';
    }
    else if(rentCost < 0) {
        errorMessage.innerText = 'Please Input a positive number in Rent Field';
    }
    else if(clothsCost < 0) {
        errorMessage.innerText = 'Please Input a positive number in Cloth Field';
    }
    else {
        const total = foodCost + rentCost + clothsCost;
        const totalField = document.getElementById('expense');
        totalField.innerText = total;
        return total;
    }
}
// Calculate and show balance total
function calculateBalance() {
    const income = document.getElementById('income-input');
    const incomeAmount = parseFloat(income.value);
    const expenseAmount = getAndCalculateExpenseTotal();
    const balanceField = document.getElementById('balance');
    const balance = incomeAmount - expenseAmount;
    balanceField.innerText = balance;
    if(isNaN(balanceField.innerText)) {
        balanceField.innerText = '0';
    }
    return incomeAmount;
}
// Error Handler and combinder
function incomeExpense() {
    if(calculateBalance() < getAndCalculateExpenseTotal()) {
        errorMessage.innerText = "You don't have enought money to expense";
        totalExpenseField.innerText = '0';
        totalBalanceField.innerText = '0';
    }
    else {
        errorMessage.innerText = '';
        getAndCalculateExpenseTotal();
        calculateBalance();
    }
}
// Claculate the save option
function calculateSave() {
    const balance = document.getElementById('balance');
    const balanceAmount = parseFloat(balance.innerText);
    const income = calculateBalance();
    const percentInput = document.getElementById('percent');
    const percent = parseFloat(percentInput.value);
    const totalSave = (income / 100) * percent;
    const savingAmountField = document.getElementById('save-amount');
    savingAmountField.innerText = totalSave;
    const saveAmount = parseFloat(savingAmountField.innerText);
    const remainingBalanceField = document.getElementById('remaining-balance');
    const saveErrorMessage = document.getElementById('save-error-message');

    if(balanceAmount < saveAmount) {
        saveErrorMessage.innerText = "You don't have enough money to save";
        savingAmountField.innerText = '0';
        remainingBalanceField.innerText = '0';
    }
    else {
        saveErrorMessage.innerText = '';
        const remainingBalance = balanceAmount - saveAmount;
        remainingBalanceField.innerText = remainingBalance;
    }
    
}

// Event listener on calculate button
document.getElementById('calculate').addEventListener('click', function() {
    incomeExpense();
})
// Event listener on save button
document.getElementById('save').addEventListener('click', function() {
    calculateSave();
})