export function compactGausSchemeFor3x3Matrix(Matrix){
    for(let i= 1; i<4; i++){
        Matrix[0][i] /= Matrix[0][0];  
    };
    for(let i=1; i<3; i++){
        Matrix[i][1] -= Matrix[i][0] * Matrix[0][1];
    };
    for(let i =2; i < 4; i++){
        Matrix[1][i] =(Matrix[1][i] - Matrix[1][0]*Matrix[0][i]) / Matrix[1][1] ;
    };
    Matrix[2][2] -= Matrix[2][0]*Matrix[0][2] + Matrix[2][1]*Matrix[1][2];
    Matrix[2][3] = (Matrix[2][3] - (Matrix[2][0]*Matrix[0][3]+Matrix[2][1]*Matrix[1][3])) / Matrix[2][2];
    return Matrix
}

export function xFinderFor3x3Matrix(Matrix){
    let x3 = Matrix[2][3];
    let x2 = Matrix[1][3] - Matrix[1][2]*x3
    let x1 = Matrix[0][3] - Matrix[0][1]*x2 - Matrix[0][2]*x3
    return [x1, x2, x3]
}