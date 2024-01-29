function diagonalDifference(arr) {

    const rowsLength = arr.length;
    const colsLength = arr[0].length;

    let d1 = 0, d2 = 0;

    for (let i = 0; i < rowsLength; i++) {
        for (let j = 0; j < colsLength; j++) {
            if (i === j) {
                d1 += arr[i][j];
            }

            if (i === rowsLength - j - 1) {
                d2 += arr[i][j];
            }
        }
    }

    return Math.abs(d1 - d2);
}
