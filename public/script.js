async function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;
    const resultDiv = document.getElementById("result");

    try {
        const response = await fetch(`/api/calculate?num1=${num1}&num2=${num2}&operation=${operation}`);
        const data = await response.json();

        if (data.success) {
            resultDiv.textContent = `Résultat : ${data.result}`;
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = `Erreur : ${data.error}`;
            resultDiv.style.color = "red";
        }
    } catch (error) {
        resultDiv.textContent = "Erreur serveur";
        resultDiv.style.color = "red";
    }
}