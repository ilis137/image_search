const express = require("express")
const hbs = require("hbs")

const cors = require("cors")
const mongoose = require("mongoose")


const app = express()
const PORT = process.env.PORT || 3000


app.set("view engine", hbs)
app.use(cors())
app.use(require("body-parser").json())
app.use(require("body-parser").urlencoded({ extended: true }))

const history = require("./models/searchhistory")



mongoose.promise = global.promise;
mongoose.connect(require("./config/keys").mongodb.dbURI, { useNewUrlParser: true }, () => {
    console.log("successfully connected to mongodb")
})


require("./routes/routes")(app)

app.listen(PORT, () => {
    console.log("server is listening at " + PORT)
})