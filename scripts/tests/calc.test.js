const addition = require("../calc");

describe("Calculator", () =>{
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () =>{
            expect(addition(20, 22)).toBe(42);
});
        test("should return 73 for 42 + 31", () =>{
              expect(addition(42, 31)).toBe(73);
});
    });
    describe("Subtraction function", () => {
        // test("should return 2 for 22 - 20", () =>{
        //     expect(addition(22, 20)).toBe(2);
// });
     });
    describe("Multiply function", () => {
        // test("should return 4 for 2 * 2", () =>{
        //     expect(addition(2, 2)).toBe(4);
// });
    });
     describe("Division function", () => {
//         test("should return 2 for 10 / 5", () =>{
//             expect(addition(10, 5)).toBe(2);
// });
    });
});