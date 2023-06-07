const express = require('express');
// const path = require('path');

const app = express();
const PORT = 5000;
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/views'));
app.set('views', __dirname + "/views");
const pages = [
    { route: '/', title: 'Home', content: 'Welcome to the homepage!' },
    { route: '/about', title: 'About', content: 'Learn more about us.' },
    { route: '/contact', title: 'Contact', content: 'Get in touch with us.' },
];


// pages.forEach((item) => {
//     app.get(item.route, (req, res) => {
//         const content = {
//             text: item.content,
//         };

//         res.render(item.title.toLowerCase(), content);
//     });
// });


app.get( '/', (req, res) => {
   const home = {
    route: '/', title: 'Home', content: 'Welcome to the homepage!'
     }  
     res.render('home', home)
})


app.get( `${pages[1].route}`, (req, res) => {  
      res.render('about', pages[1])
 })

 app.get( `${pages[2].route}`, (req, res) => {  
    res.render('contact', pages[2])
})

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});