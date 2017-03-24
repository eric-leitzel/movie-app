describe('calculator', function() {
    it('should add two numbers', function() {
        expect(add(1,2)).toBe(3);
    })
    it('should multiply two numbers', function() {
        expect(multiply(2,3)).toBe(6);
    })
});