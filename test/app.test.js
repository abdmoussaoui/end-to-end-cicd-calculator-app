const request = require("supertest");
const { app, calculate } = require("../app");

describe("Tests fonction calculate()", () => {
    test("addition", () => {
        expect(calculate(5, 3, "add")).toBe(8);
    });

    test("soustraction", () => {
        expect(calculate(10, 4, "sub")).toBe(6);
    });

    test("multiplication", () => {
        expect(calculate(2, 6, "mul")).toBe(12);
    });

    test("division", () => {
        expect(calculate(8, 2, "div")).toBe(4);
    });

    test("division par zéro", () => {
        expect(() => calculate(8, 0, "div")).toThrow("Division par zéro impossible");
    });
});

describe("Tests API", () => {
    test("GET /api/calculate addition", async () => {
        const response = await request(app).get("/api/calculate?num1=7&num2=2&operation=add");
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(9);
    });

    test("GET /api/calculate erreur", async () => {
        const response = await request(app).get("/api/calculate?num1=7&num2=0&operation=div");
        expect(response.statusCode).toBe(400);
        expect(response.body.success).toBe(false);
    });
});