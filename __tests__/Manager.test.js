const { expect } = require("@jest/globals")
const Manager = require('../lib/Manager')

test('Test Manager Class', () => {
    const Dame = new Manager("Dame", 91, "dametime92@gmail.com", 541)
    let boolean
    if(typeof Dame === "object") {
        boolean = true
    } else {
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(Dame.getRole()).toBe("Manager")
})