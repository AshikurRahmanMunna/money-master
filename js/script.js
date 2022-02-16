// error message
const errorMessage = document.getElementById('error-message');
// Calculate and show expense total
function getAndCalculateExpenseTotal() {
    const foodInput = document.getElementById('food-input');
    const foodCost = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentCost = parseFloat(rentInput.value);
    const clothsInput = document.getElementById('cloths-input');
    const clothsCost = parseFloat(clothsInput.value)
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
    const balance = incomeAmount - expenseAmount;
    const balanceField = document.getElementById('balance');
    balanceField.innerText = balance;
    return incomeAmount;
}

function incomeExpense() {
    const totalExpenseField = document.getElementById('expense');
    const totalBalanceField = document.getElementById('balance');
    if(calculateBalance() < getAndCalculateExpenseTotal()) {
        errorMessage.innerText = "You doesn't have enought money to expense";
        totalExpenseField.innerText = '0';
        totalBalanceField.innerText = '0';
    }
    else {
        errorMessage.innerText = '';
        getAndCalculateExpenseTotal();
        calculateBalance();
    }
}

// Event listener on calculate button
document.getElementById('calculate').addEventListener('click', function() {
    incomeExpense();
})