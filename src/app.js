//requiring 
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");  
const hbs = require("hbs") 
// Public static path

const staticPath = path.join(__dirname , "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, '../templates/partials')
app.set('view engine' ,'hbs');
app.set('views', template_path)
hbs.registerPartials(partials_path)
app.use(express.static(staticPath));


// Routing all pages  
app.get("/", (req,res) => {
  res.render('index', {
    indexmsg : 'Home Page'
  }) 
}) 
app.get("/about", (req,res) => {
 res.render('about', {
    aboutmsg : 'About Page'
 })
});
app.get("/weather", (req,res) => {     
    res.render('weather' , {
        weathermsg : 'Weather Page'
    })  
})
app.get("*", (req,res) => {
    res.render('404error',  {
        errormsg : 'Opps! Page Not Found'
    })
})


app.listen(port, () => {
    console.log(`Server is running on port no. ${port}`)
})