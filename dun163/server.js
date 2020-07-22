var express = require("express")
var sdk = require("./source/sdk")
var bodyParser = require("body-parser")


var api = express()

api.use(
    bodyParser.urlencoded(
        {
            parameterLimit: 50000,
            limit: "50mb",
            extended: false
        }
    )
)


api.get("/ramdom_str", function (req, res) {
    var ramdom_str = sdk.get_ramdom_str(7);
    res.send(ramdom_str);
})


api.get("/get_uuid", function (req, res) {
    var uuid = sdk.uuid(32);
    res.send(uuid);
})


api.get("/get_cb", function (req, res) {
    var cb = sdk.get_cb();
    res.send(cb);
})


api.get("/get_fp", function (req, res) {
    var fp = sdk.get_fp();
    res.send(fp);
})


api.get("/get_mycallback", function (req, res) {
    var cb_str = Math.random().toString(36).slice(2, 9);
    console.log(cb_str)
    res.send(cb_str);
})


var port = 8088;
var server = api.listen(port, function () {

})

console.log("server start listen on: http://127.0.0.1:"+port);



