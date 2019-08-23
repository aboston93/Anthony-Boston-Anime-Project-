/* Step 1 import express
 *
 */
const express = require('express')


/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const AnimeApi = require('../models/anime.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const Router = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */
Router.get('/newanime', (req, res) => {
  
    res.render("anime/createform");


})
Router.get("/:id", (req, res) => {
    AnimeApi.GetAnime(req.params.id)
      .then(animeid => {
        //create a View on the single account and send it to the user
        //note: { account } the same as writing { account: account }
        res.render("single anime", { animeid }); 
      
      });
  });

Router.get("/favoriteanime", (req, res) => { 
    AnimeApi.getAllAnime()
      .then(anime => {
          console.log(anime)
          
 
        //res.render("issues/issues", { issues });
        // res.send(issues)
        res.render("anime/favoriteanime", { anime })
      });
  });
  
  Router.post("/", (req, res) => {
    console.log("Post hit")
    AnimeApi.addNewAnime(req.body)
      .then(() => {
          console.log("Post hit0")
        res.redirect("/");
        
      });
  });
  

   Router.delete("/:id", (req, res) => { 
    AnimeApi.DeleteAnime(req.params.id)
      .then(() => {
        res.redirect("/");
      });
  });


 
/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
// Router.get('/', (req, res) => {
//   res.send(AnimeApi.getHelloWorldString())
// })

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  Router
}
