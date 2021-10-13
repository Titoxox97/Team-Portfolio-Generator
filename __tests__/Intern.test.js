const { expect } = require("@jest/globals")
const Intern = require('../lib/Intern');

test('Test Intern Class', () => {
    const Zion = new Intern("Zion", 37, "zwilliamson23@gmail.com", "Duke University")
    let boolean
    if(typeof Zion === "object") {
        boolean = true
    } else {
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(Zion.getRole()).toBe("Intern")
    expect(Zion.getSchool()).toBe("Duke University")
})