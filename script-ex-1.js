const weight = document.getElementById('weight');
const height = document.querySelector('#height');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Calculating BMI...');
    const w = parseFloat(weight.value);
    const h = parseFloat(height.value) / 100;

    if (isNaN(w) || isNaN(h) || w <=0 || h <=0) {
        resultDiv.innerText = 'Please enter valid weight and height values.';
        resultDiv.style.color = 'red';
        return
    }
    
    const bmi = w / (h * h);

    let category;
    
    
        resultDiv.style.removeProperty('color');

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }       
    resultDiv.innerText = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
}); 
