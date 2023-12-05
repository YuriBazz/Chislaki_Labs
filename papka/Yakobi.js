import * as mathjs from 'mathjs';

let b = [[6.14], [1.52], [-2.28]];
let D = [[1.58, 0,0 ],[0, 0.92, 0],[0, 0, -0.5]];
let R = [[0,-0.12,1.6],[0,0,0.16],[0,0,0]];
let L = [[0,0,0],[-0.8,0,0],[-0.22,-0.28,0]];
let B = mathjs.multiply(-1, mathjs.inv(D), mathjs.add(L,R));
let c = mathjs.multiply(mathjs.inv(D), b);

export function Yacobi(){
    console.log(mathjs.eigs(B).values);
}