import * as ax from "../src/main.js";

// Clock.calculateDaysBetweenDates

test('Calcular la cantidad de días que hay entre fechas', () => {
    expect(ax.Clock.calculateDaysBetweenDates('2022-03-03', '2022-06-20')).toBe(109)
});

// Operations.toRoman
test('Verificar que se pueda convertir un número a romano', () => {
    expect(ax.Operations.toRoman(120)).toBe('CXX')
})

// Percentage
test('Percentage.whatPercentageIs', () => {
    expect(ax.Percentage.whatPercentageIs(12, 30)).toBe('40.00%')
})