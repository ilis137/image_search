const keys = require("../config/keys")
const Bing = require('node-bing-api')({ accKey: "0112a649fd944630b0954a20ac8c71f6" });
var History = require("../Models/searchhistory")()
module.exports = (app) => {

    app.get("/api/imagesearch/:searchname", (req, response) => {

        const query = req.params.searchname
        const per_page = parseInt(req.query.offset, 10)
        Bing.images(query, {
            count: 100,
            offset: 0
        }, (error, res, body) => {
            const hist = new History({
                search_name: query,
                date: new Date()
            })
            hist.save().then((doc) => {
                    console.log(doc)
                })
                // response.render("index")
            response.send(body)
        })
    })

    app.get("/api/history", (req, response) => {
        History.find().then(doc => {
            response.send(doc)
        })
    })
    app.get("/", (req, res) => {
        res.render("index")
    })
}