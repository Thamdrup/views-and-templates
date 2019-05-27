module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {
         "titel":"min fancy website"
      });
   });

   app.get('/product', (req, res, next) => {
      res.render('product', {
         "titel": "Product site"
      });
      res.send("BROKEN SITE");
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact', {
         "titel": "Contact site"
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