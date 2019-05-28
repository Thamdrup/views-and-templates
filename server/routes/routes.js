module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {
         "titel":"min fancy website",
         "page":"home"
      });
   });

   app.get('/product', (req, res, next) => {
      res.render('product', {
         "titel": "Product site",
         "page" : "product"
      });
      res.send("BROKEN SITE");
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact', {
         "titel": "Contact site",
         "page" : "contact"
      });
   });


//    app.get('/test', (req, res, next) => {
//       // res.render('contact', {
//       //    "titel": "Contact site"
//       // });
//       res.send();
//       console.log("Testing...")
//    });
};