export const sampleCode = `
  function miniMaxSum(arr) {

    arr.sort((a, b) => a - b);

    let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
    let maxSum = arr.slice(1).reduce((a, b) => a + b, 0);

    console.log(minSum, maxSum);
  }

  let arr = [1, 2, 3, 4, 5];
  miniMaxSum(arr);

`;

export const codeDesc = [
  {
    title: 'Sorting Array',
    code: `arr.sort((a, b) => a - b);`,
    description: 'Mengurutkan nilai array dari terkecil hingga terbesar, maka hasil array yang ditampilkan pada `arr.short` yaitu [1, 2, 3, 4, 5]'
  },
  {
    title: 'Calculating Minimum Sum',
    code: `let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);`,
    description: 'Nilai array yang di ambil yaitu dari slice(0, 4) jadi nilai array yaitu [1, 2, 3, 4], setelah itu dilakukan reduce untuk nilai array yang tersedia ditambahkan menjadi 1 + 2 + 3 + 4 = 10'
  },
  {
    title: 'Calculating Maximum Sum',
    code: `let maxSum = arr.slice(1).reduce((a, b) => a + b, 0);`,
    description: 'Nilai array yang di ambil yaitu dari di slice(1) jadi nilai array tersebut melewati array index pertama maka [2, 3, 4, 5], setelah itu dilakukan reduce untuk nilai array yang tersedia ditambahkan menjadi 2 + 3 + 4 + 5 = 14'
  }
];