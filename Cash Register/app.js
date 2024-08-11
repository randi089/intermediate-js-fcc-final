function checkCashRegister(price, cash, cid) {
  // total kembalian dikali 100
  let totalKembalian = cash * 100 - price * 100;

  //   hitung jumlah uang didalam mesin kasir dikali 100
  let totalUangDiMesinKasir = cid.map((el) => el[1]).reduce((acc, curr) => acc + curr * 100, 0);

  //   Panduan satuan dan pecahan uang dikalikan 100
  const rumusUang = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  };

  // pengecekan kondisi
  //   Kondisi 1, ketika kembalian tidak cukup
  if (totalKembalian > totalUangDiMesinKasir) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  //   Kondisi 2, ketika uang kembalian sama dengan total uang dikasir
  else if (totalKembalian === totalUangDiMesinKasir) {
    return { status: "CLOSED", change: cid };
  }

  //   Kondisi 3, jika total kembalian lebih kecil dari uang yang ada di kasir
  // kembalikan uang dengan urutan yang lebih besar dahulu
  else {
    // urutkan uang dikasir dari yang terbesar
    cid = cid.reverse();

    // siapkan uang kembalian dalam bentuk array
    const jumlahUangYangDikembalikan = [];

    // kita telusuri setiap slot uang di mesin kasir
    cid.forEach((uang) => {
      // set kondisi awal dari uang baru
      let kondisiUangBaru = [uang[0], 0];

      // satuan nama pecahan
      const satuan = uang[0];

      // jumlah uang
      let pecahan = uang[1] * 100;

      //   cek uang berdasarkan satuan kurangi jika kembalian masih memenuhi
      while (totalKembalian >= rumusUang[satuan] && pecahan > 0) {
        totalKembalian -= rumusUang[satuan];
        pecahan -= rumusUang[satuan];
        kondisiUangBaru[1] += rumusUang[satuan] / 100;
      }

      if (kondisiUangBaru[1] > 0) {
        jumlahUangYangDikembalikan.push(kondisiUangBaru);
      }
    });

    // Cek jika uangnya ada, tetapi pecahannya tidak ada
    if (totalKembalian > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: jumlahUangYangDikembalikan };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
