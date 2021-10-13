const { expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test('Test Engineer Class', () => {
    const Nikola = new Engineer("Nikola", 13, "njokic13@yahoo.com", "jokerNik93")
    let boolean
    if(typeof Nikola === "object") {
        boolean = true
    } else {
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(Nikola.getRole()).toBe("Engineer")
    expect(Nikola.getGitHub()).toBe("jokerNik93")
})