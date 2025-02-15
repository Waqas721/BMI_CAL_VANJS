document.getElementById("bmiForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById("result").innerHTML = "<p>Please enter valid weight and height.</p>";
        return;
    }

    let heightInMeters = height / 100;
    let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    document.getElementById("result").innerHTML = `<h3>Your BMI is ${bmi}</h3><p>${category}</p>`;
});
