const http = require("http"); 
const fs = require("fs");

let provinces;

fs.readFile('provinces.json', 'utf8', (err, data) => {
    if (err) throw(err);
    provinces = JSON.parse(data);
}) ;

http.createServer((request, response) => 
{ 


    /* La fonction fs.readFile() est asynchrone elle ne bloque pas l'éxécution des instructions suivantes */
    
    console.log(provinces);

    let html = "<html>";
    html += "<style> td{border: 1px solid red;}";
    html += "</style>";
    html += "<thead>";
    html += "les provinces";
    html += "</thead>";

    html += "<table>";
    for (let province in provinces) {
        html += "<tr>";
        html += "<td>";
        html += provinces[province];
        html += "</td>";
        html += "<td>";
        html += province;
        html += "</td>";
        html += "</tr>";
    }
    html += "</table>";
    html += "</html>"

    response.writeHead(200, {"Content-Type": "text/html; Charset=UTF-8"});
    response.write(html); 
    response.end();

}).listen(3000);