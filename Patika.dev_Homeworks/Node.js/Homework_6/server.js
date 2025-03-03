const Koa = require("koa");
const app = new Koa();

// Middleware (istekleri kontrol eden kısım)
app.use(async (ctx) => {
    if (ctx.path === "/") {
        ctx.body = "<h1>Index sayfasına hoş geldiniz</h1>";
    } else if (ctx.path === "/hakkimda") {
        ctx.body = "<h1>Hakkımda sayfasına hoş geldiniz</h1>";
    } else if (ctx.path === "/iletisim") {
        ctx.body = "<h1>İletişim sayfasına hoş geldiniz</h1>";
    } else {
        ctx.status = 404;
        ctx.body = "<h1>404 - Sayfa Bulunamadı</h1>";
    }
});

// Sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
