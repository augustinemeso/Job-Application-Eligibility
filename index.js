function checkEligibility() {
    const age = Number(document.getElementById('ageInput').value);
    const yearsExperience = Number(document.getElementById('experienceInput').value);
    const knowsJavaScript = document.getElementById('knowsJavaScript').value === 'true';
    const resultDiv = document.getElementById('result');

    let message;

    const ageEligible = age > 25 && age < 50;
    const experienceEligible = (yearsExperience > 5) || (age < 30 && yearsExperience >= 3);

    if (ageEligible && experienceEligible && knowsJavaScript) {
        message = "Eligible for the job";
    } else {
        message = "Not eligible";
    }

    resultDiv.textContent = message;
}
