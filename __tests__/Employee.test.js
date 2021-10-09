const { expect } = require("@jest/globals")
const Employee = require("../lib/Employee")

test('Test Employee Class', () => {
    const Tito = new Employee("Tito", 69, "matiasahrensdorf@gmail.com")
    let boolean;
    if(typeof Tito === "object") {
        boolean = true
    }  else {
          boolean = false  
    }

    expect(boolean).toBe(true)
    expect(Tito.getRole()).toBe("Employee")
})