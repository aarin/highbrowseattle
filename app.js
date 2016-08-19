/***********************************************************************************************/
/*****************************          Setup Server              ******************************/
/***********************************************************************************************/

var express                 = require("express"),                 // server-side
    app                     = express();
    
    

/********** App Config **********/
app.set("view engine", "ejs");                          // set view engine to ejs
app.use(express.static(__dirname + "/public"));         // serve contents of /public directory (stylesheets, scripts)



    
/***********************************************************************************************/
/*****************************          ROUTES                    ******************************/
/***********************************************************************************************/
    
app.get("/", function(req,res){
    res.render("home");
});

app.get("/services", function(req,res){
    res.render("services");
});

app.get("/portfolio", function(req,res){
    res.render("portfolio");
});

app.get("/faq", function(req,res){
    res.render("faq");
});

app.get("/contact", function(req,res){
    res.render("contact");
});

app.get("/book", function(req,res){
    res.render("book");
});    

/******************* IMPORTANT! ********************/
// listen for the port and host of environment on cloud9
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started.");
});