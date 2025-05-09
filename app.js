const http = require('http')
const fs = require('fs')
const url =  require('url')

const server = http.createServer((req, res) => {
    const d = url.parse(req.url, true)
    let fileLocation
    switch(d.pathname) {
        case "/" :
            fileLocation = "pages/dashboard/Mantis.html"
            break;
        case "/dashboard" :
            fileLocation = "pages/dashboard/Mantis.html"
            break;
        case "/mhs/surat" :
            fileLocation = "pages/mhs/Mantis.html"
            break;
        case "/dsn/surat" :
            fileLocation = "pages/dosen/Mantis.html"
            break;
        case "/tu/surat" :
            fileLocation = "pages/tu/Mantis.html"
            break;
        case "/adm/users" :
            fileLocation = "pages/admin/Mantis.html"
            break;
        case "/adm/users/create" :
            fileLocation = "pages/admin/addUser.html"
            break;
        default :
            fileLocation = "pages/dashboard/Mantis.html"
            break
    }

    fs.readFile(fileLocation, (err, data) => {
        if(err) {
            res.writeHead(404, {"Content-type" : "text/html"})

            return res.end()
        }

        res.writeHead(200, {"Content-type" : "text/html"})
        res.write(data)
        return res.end()
    })
})
server.listen(8000, () => {
    console.log("server run at port 8000")
})