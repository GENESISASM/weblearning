document.getElementById('form-tambah-peserta').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const umur = document.getElementById('umur').value;
    const pendidikan = document.getElementById('pendidikan').value;
    const alamat = document.getElementById('alamat').value;

    const table = document.querySelector('#data-peserta tbody');
    const newRow = table.insertRow();
    
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = nama;
    cell2.textContent = umur;
    cell3.textContent = pendidikan;
    cell4.textContent = alamat;

    // Clear the form after submission
    document.getElementById('form-tambah-peserta').reset();
});
