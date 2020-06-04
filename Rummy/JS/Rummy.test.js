const testing = require ("./app.js");
let t0 = [];
let t1 = ["ram"];
let t2;

test('combine two array Element and update in one Empty array.', () => { 
expect(testing(t0)).toEqual(['H2', 'H3', 'H4', 'D2', 'D3', 'D4']);
})

test('combine two array Element and update in one NonEmpty array.', () => { 
    expect(testing(t1)).toEqual(['ram', 'H2', 'H3', 'H4', 'D2', 'D3', 'D4']);
})

test('combine two array Element and update in one Non array.', () => { 
    expect(testing(t2)).toEqual(false);
})