const keys = require("../config/keys")
const Bing = require('node-bing-api')({ accKey: "0112a649fd944630b0954a20ac8c71f6" });
//let History = require("../Models/searchhistory")
module.exports = (app) => {

    app.get("/api/imagesearch/:searchname", (req, response) => {

        const query = req.params.searchname
        const per_page = parseInt(req.query.offset, 10)
        Bing.images(query, {
            count: 100,
            offset: 0
        }, (error, res, body) => {
            // const hist = new History({

            //     })
            // hist.save().then(() => {

            // })
            // response.render("index")
            response.send(body)
        })
    })

    app.get("/", (req, res) => {
        res.render("index")
    })
}