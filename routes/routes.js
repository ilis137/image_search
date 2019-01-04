const Unsplash = require("unsplash-js").default
const keys = require("../config/keys")


module.exports = (app) => {

    app.get("/api/imagesearch/:searchname", (req, res) => {

        const query = req.params.searchname
        console.log(query)
        const per_page = parseInt(req.query.offset, 10)
        console.log(per_page)


    })

}