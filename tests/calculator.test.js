const ax = require("../dist/main.js")

const log = console.log

// Clock.calculateDaysBetweenDates
test('Clock.calculateDaysBetweenDates', () => {
    expect(ax.Clock.calculateDaysBetweenDates('2022-03-03', '2022-06-20')).toBe(109)
});

// Operations.toRoman
test('Operations.toRoman', () => {
    expect(ax.Operations.toRoman(120)).toBe('CXX')
})

// Percentage
test('Percentage.whatPercentageIs', () => {
    expect(ax.Percentage.whatPercentageIs(12, 30)).toBe('40.00%')
})

// hypotenuse
test('Operations.hypotenuse', () => {
    expect(ax.Operations.hypotenuse(3, 4)).toBe(5)
})

// combinatorial
test('Operations.combinatorial', () => {
    expect(ax.Operations.combinatorial(7,3)).toBe(35)
})

// Vectors.sum
test('Vectors.sum', () => {
    expect(ax.Vectors.sum([3, 6],  [2, -7])).toStrictEqual({
        x: 5,
        y: -1,
        expression: '5i - 1j',
        cartesian: [ 5, -1 ],
        unit_vector: [ 0.98, -0.19 ]
    })
})
