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
const AuthorApi = require('../models/author.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const Router = express.Router()
const AuthorRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */
Router.get('/newanime', (req, res) => {

    res.render("anime/createform");


})
AuthorRouter.get('/newauthor', (req, res) => {

    res.render("author/createform");


})


AuthorRouter.get('/updateauthor', (req, res) => {

    res.render("author/editauthor");


})



AuthorRouter.get("/authorlist", (req, res) => {
    AuthorApi.getAllAuthor()
        .then(author => {
            console.log(author)


            //res.render("issues/issues", { issues });
            // res.send(issues)
            res.render("author/favoriteauthor", { author })
        });
});
Router.get("/animelist", (req, res) => {
    AnimeApi.getAllAnime()
        .then(anime => {
            console.log(anime)


            //res.render("issues/issues", { issues });
            // res.send(issues)
            res.render("anime/favoriteanime", { anime })
        });
});



Router.get("/:id", (req, res) => {
    AnimeApi.GetAnime(req.params.id)
        .then(animeid => {
            //create a View on the single account and send it to the user
            //note: { account } the same as writing { account: account }
            res.render("anime/singleanime", { animeid });

        });
});
Router.post("/animelist", (req, res) => {
    console.log("Post hit")
    AnimeApi.addNewAnime(req.body)
        .then(() => {
            console.log("Post hit0")
            res.redirect("/anime/animelist");

        });
});

AuthorRouter.post("/authorlist", (req, res) => {
    console.log("Post hit")
    AuthorApi.addNewAuthor(req.body)
        .then(() => {
            console.log("Post hit0")
            res.redirect("/author/authorlist");

        });
    });


    AuthorRouter.put("/:id", (req, res) => {
        AuthorApi.updateAuthor(req.params.id, req.body)
          .then(() => {
            res.redirect("/author/authorlist", { authorupdate});
          });
      });

Router.delete("/:id", (req, res) => {
    console.log('delete anime run')
    AnimeApi.DeleteAnime(req.params.id)
        .then(() => {
            res.redirect("/anime/animelist");
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
    Router,
    AuthorRouter
}
