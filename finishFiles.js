var fs = require('fs');

var files = fs.readdirSync('build/json')
files.forEach(file => {
    if(file.split('.')[1] == 'json' && file != '_metadata.json')
    {
        var data = require(`./build/json/${file}`);
        delete data.dna;
        delete data.date;
        delete data.edition;

        fs.writeFileSync(`./build/json/${file}`, JSON.stringify(data));
    }
})