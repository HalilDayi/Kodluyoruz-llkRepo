const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if (req.url === "/") {
        res.writeHead(200);
        res.end("<h2>Index sayfasına hoş geldiniz</h2>");
    } 
    else if (req.url === "/hakkimda") {
        res.writeHead(200);
        res.end("<h2>Hakkımda sayfasına hoş geldiniz</h2>");
    } 
    else if (req.url === "/iletisim") {
        res.writeHead(200);
        res.end("<h2>İletişim sayfasına hoş geldiniz</h2>");
    } 
    else {
        res.writeHead(404);
        res.end("<h2>404 - Sayfa Bulunamadı</h2>");
    }
});

// Sunucuyu 5000 portunda başlat
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
