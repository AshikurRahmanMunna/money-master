function getAndCalculateExpenseTotal() {
    const foodInput = document.getElementById('food-input');
    const foodCost = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentCost = parseFloat(rentInput.value);
    const clothsInput = document.getElementById('cloths-input');
    const clothsCost = parseFloat(clothsInput.value)
    const total = foodCost + rentCost + clothsCost;
    return total;
}
