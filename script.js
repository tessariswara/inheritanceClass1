const kirim = document.getElementById("submit");
kirim.addEventListener("click", () => {
  class Polygon {
  constructor(sisi) {
    this.sisi = sisi;
  }

  perimeter() {
    return this.sisi.reduce((penambah, saatini) => 
        penambah + saatini, 0
      );
  }
}
  const sisiA = document.getElementById("a").value;
  const sisiB = document.getElementById("b").value;
  const sisiC = document.getElementById("c").value;

  const fA = parseFloat(sisiA);
  const fB = parseFloat(sisiB);
  const fC = parseFloat(sisiC);
  let segitiga = new Polygon([fA, fB, fC]);
  console.log(segitiga.perimeter());

  const hasil = document.getElementById("hasil");
  hasil.innerHTML = "Hasil : " + `${segitiga.perimeter()}`;
})


