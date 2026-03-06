const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function calculate(num1, num2, operation) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Valeurs invalides");
    }

    switch (operation) {
        case "add":
            return num1 + num2;
        case "sub":
            return num1 - num2;
        case "mul":
            return num1 * num2;
        case "div":
            if (num2 === 0) {
                throw new Error("Division par zéro impossible");
            }
            return num1 / num2;
        default:
            throw new Error("Opération non valide");
    }
}

app.get("/api/calculate", (req, res) => {
    try {
        const { num1, num2, operation } = req.query;
        const result = calculate(num1, num2, operation);
        res.json({ success: true, result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

module.exports = { app, calculate };