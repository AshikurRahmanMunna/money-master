function getAndCalculateExpenseTotal() {
    const foodInput = document.getElementById('food-input');
    const foodCost = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentCost = parseFloat(rentInput.value);
    const clothsInput = document.getElementById('cloths-input');
    const clothsCost = parseFloat(clothsInput.value)
    const total = foodCost + rentCost + clothsCost;
    const totalField = document.getElementById('expense');
    totalField.innerText = total;
    return total;
}
function calculateBalance() {
    const income = document.getElementById('income-input');
    const incomeAmount = parseFloat(income.value);
    const expenseAmount = getAndCalculateExpenseTotal();
    const balance = incomeAmount - expenseAmount;
    const balanceField = document.getElementById('balance');
    balanceField.innerText = balance;
}

document.getElementById('calculate').addEventListener('click', function() {
    getAndCalculateExpenseTotal();
    calculateBalance();
})