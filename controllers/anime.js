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
const ArtistApi = require('../models/artist.js')

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
const ArtistRouter = express.Router()

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

ArtistRouter.get('/newartist', (req, res) => {

    res.render("artist/createform");


})

Router.get('/updateanime', (req, res) => {

    res.render("anime/editanime");


})



AuthorRouter.get('/updateauthor', (req, res) => {

    res.render("author/editauthor");


})

ArtistRouter.get('/updateanime', (req, res) => {

    res.render("artist/editartist");


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
ArtistRouter.get("/artistlist", (req, res) => {
    ArtistApi.getAllArtist()
        .then(artist => {
            console.log(artist)


            //res.render("issues/issues", { issues });
            // res.send(issues)
            res.render("artist/artistlist", { artist })
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

AuthorRouter.get("/:id", (req, res) => {
    AuthorApi.GetAuthor(req.params.id)
        .then(authorid => {
            //create a View on the single account and send it to the user
            //note: { account } the same as writing { account: account }
            res.render("author/singleauthor", { authorid });

        });
});

ArtistRouter.get("/:id", (req, res) => {
    ArtistApi.GetArtist(req.params.id)
        .then(artistid => {
            //create a View on the single account and send it to the user
            //note: { account } the same as writing { account: account }
            res.render("artist/singleartist", { artistid });

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

    ArtistRouter.post("/artistlist", (req, res) => {
        console.log("Post hit")
        ArtistApi.addNewArtist(req.body)
            .then(() => {
                console.log("Post hit0")
                res.redirect("/artist/artistlist");
    
            });
        });
    Router.put("/:id", (req, res) => {
        AnimeApi.updateAnime(req.params.id, req.body)
          .then((updatedanime) => {
            res.render("anime/singleanime",{updatedanime});
          });
      });




    AuthorRouter.put("/:id", (req, res) => {
        AuthorApi.updateAuthor(req.params.id, req.body)
          .then((updatedauthor) => {
            res.redirect("/author/authorlist", { updatedauthor});
          });
      });


      ArtistRouter.put("/:id", (req, res) => {
        ArtistApi.updateArtist(req.params.id, req.body)
          .then((updatedartist) => {
            res.render("artist/artistlist", { updatedartist});
          });
      });

Router.delete("/:id", (req, res) => {
    console.log('delete anime run')
    AnimeApi.DeleteAnime(req.params.id)
        .then(() => {
            res.redirect("/anime/animelist");
        });
});

AuthorRouter.delete("/:id", (req, res) => {
    console.log('delete anime run')
    AuthorApi.DeleteAuthor(req.params.id)
        .then(() => {
            res.redirect("/author/authorlist");
        });
});

ArtistRouter.delete("/:id", (req, res) => {
    console.log('delete anime run')
    ArtistApi.DeleteArtist(req.params.id)
        .then(() => {
            res.redirect("/artist/artistlist");
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
    AuthorRouter,
    ArtistRouter,
}
