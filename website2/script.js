 //penambahan
 function tambahkan(num1, num2){
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  return (num1 + num2 );
}

	var penambahan = document.getElementById("penambahan");
	if (penambahan) {
		penambahan.onsubmit = function () {
			this.hasil.value = tambahkan
      (this.num1.value, this.num2.value);
			return false;
		};
	}



//perkalian
   function dikali(num1, num2){
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  return (num1 * num2 );
}

	var perkalian= document.getElementById("perkalian");
	if (perkalian) {
		perkalian.onsubmit = function () {
			this.hasil.value = dikali
      (this.num1.value, this.num2.value);
			return false;
		};
	}


  //pembagian
     function dibagi(num1, num2){
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  return (num1 / num2 );
}

	var pembagian = document.getElementById("pembagian");
	if (pembagian) {
		pembagian.onsubmit = function () {
			this.hasil.value = dibagi
      (this.num1.value, this.num2.value);
			return false;
		};
	}


//pengurangan
    function kurangkan(num1, num2){
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  return (num1 - num2 );
}

	var pengurangan = document.getElementById("pengurangan");
	if (pengurangan) {
		pengurangan.onsubmit = function () {
			this.hasil.value = kurangkan
      (this.num1.value, this.num2.value);
			return false;
		};
	}

