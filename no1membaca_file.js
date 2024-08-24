const fs = require('fs');

// Nama file yang ingin dibaca
const filename = 'linktugas2.txt';


fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error membaca file:', err);
        return;
    }
    console.log('Isi file:', data);
});
