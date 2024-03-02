import * as mathjs from 'mathjs';
//Считал я тоже тут, но в ходе придумывания читаемого кода все удалил, поэтому рассчетов тут нету ;(
let B = [[0, 0.08,-1.01],[0,0.07,-1.05],[0,-0.07,1.04]];
export function Zeydel(){
    console.log(mathjs.eigs(B).values);
}