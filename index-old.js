const http = require("node:http");

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Disposition", "attachment; fiilename=lista.csv");
  //   res.writeHead(200, { "Content-Type": "application/csv" });

  res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.write("hello world");
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

server.listen(8000, () => {
  console.log("web server escuchando en: http://localhost:8000");
});
