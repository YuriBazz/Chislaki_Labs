import * as gaus from './Gaus.js';
import * as yacobi from './Yakobi.js';
import * as zeydel from './Zeyadel.js';

let Matrix = [[1.58, -0.12, 1.6, 6.14],[-0.8, 0.92, 0.16, 1.52],[-0.22, -0.28, -0.5, -2.28]];

console.log("Метод Гаусса:")
console.log("X = ", gaus.xFinderFor3x3Matrix(gaus.compactGausSchemeFor3x3Matrix(Matrix)));

console.log("Собственные числа матрицы B в методе Якоби:");
yacobi.Yacobi();

console.log("Собственные числа матрицы B в методе Зейделя:");
zeydel.Zeydel();