const fs = require('fs');
let lugares = require("./df_coordenadas.json");
let lugares2 = [];
for (let i = 0; i <= 53; i++) {
    lugares2.push({
        direccion: lugares.Direccion[`${i}`],
        telefono: lugares.Telefono[`${i}`],
        coordenadas: lugares.point[`${i}`]
    })
}

fs.writeFile('C:\Users\maria\Desktop\lugares.json', JSON.stringify(lugares2), 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); 