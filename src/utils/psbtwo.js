export const sampleCode = `
  function plusMinus(arr) {
    let n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    arr.forEach(num => {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    });

    let positiveRatio = (positiveCount / n).toFixed(6);
    let negativeRatio = (negativeCount / n).toFixed(6);
    let zeroRatio = (zeroCount / n).toFixed(6);

    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
  }

  // Example usage:
  let arr = [1, 1, 0, -1, -1];
  plusMinus(arr);


`;

export const codeDesc = [
  {
    title: 'Positive Ratio',
    code: `let positiveRatio = (positiveCount / n).toFixed(6);`,
    description: `Dicari value positiveRatio berapa ?
    Jadi positiveCount tersebut memiliki positif [1, 1] jadi elemen dijumlahkan menjadi 2,
    untuk nilai 'n' adalah jumlah total elemen array pada [1, 1, 0, -1, -1] yaitu 5,
    setelah itu toFixed(6) akan mengubah angka menjadi string dengan 6 angka di belakang koma desimal. Maka Output: "0.400000"`
  },
  {
    title: 'Negative Ratio',
    code: `let negativeRatio = (negativeCount / n).toFixed(6);`,
    description: `Dicari value negativeRatio berapa ?
    Jadi negativeCount tersebut memiliki negatif [-1, -1] jadi elemen dijumlahkan menjadi 2,
    untuk nilai 'n' adalah jumlah total elemen array pada [1, 1, 0, -1, -1] yaitu 5,
    setelah itu toFixed(6) akan mengubah angka menjadi string dengan 6 angka di belakang koma desimal. Maka Output: "0.400000`
  },
  {
    title: 'Zero Ratio',
    code: `let zeroRatio = (zeroCount / n).toFixed(6);`,
    description: `Dicari value zeroRatio berapa ?
    Jadi zeroCount tersebut memiliki positif [0] jadi elemen dijumlahkan menjadi 1,
    untuk nilai 'n' adalah jumlah total elemen array pada [1, 1, 0, -1, -1] yaitu 5,
    setelah itu toFixed(6) akan mengubah angka menjadi string dengan 6 angka di belakang koma desimal. Maka Output: "0.200000"`
  }
];