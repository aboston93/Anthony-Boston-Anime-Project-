


  /* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
global.sampleModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
let AnimeSchema = mongoose.Schema({
    name: String,
    created: Date,
    genre: String,
    type: String,
    StartDate:Date,
    mainCharacter:String,
    EndDate:Date,
    creator:String
  });


  let AuthorSchema = mongoose.Schema({
    name: String,
    created: Date,
    genre: String,
    type: String,
    StartDate:Date,
    mainCharacter:String,
    EndDate:Date,
    creator:String
  });

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */const animeCollection = mongoose.model('anime', AnimeSchema)


/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// function getHelloWorldString() {
//   return 'hello world'
// }
const CreateAnime = () =>
  animeCollection.create({ name: "One Punch Man", created: new Date(), genre: "Harem ", StartDate: new Date(),
  EndDate:new Date(), mainCharacter:"Saitama" , type:"shounen", creator:"mikashi" 
      })

function getAllAnime() {
        return animeCollection.find()
      }
function addNewAnime(newanime) {
        //make sure that the isActive is either true or false.
        //if you're using a checkbox in an HTML form then
        //if the checkbox is unselected and you submit the form
        //isActive will not be in the account object
      
        return animeCollection.create(newanime);
      }
      
function DeleteAnime(animeid){

    return animeCollection.deleteOne({ _id: animeid });

}


function GetAnime(animeid) {
    return animeCollection.findById(animeid);
  }

  











//       const CreateAuthor = () =>
//   AuthorCollection.create({ name: "One Punch Man", created: new Date(), genre: "Harem ", StartDate: new Date(),
//   EndDate:new Date(), mainCharacter:"Saitama" , type:"shounen", creator:"mikashi" 
//       })

// function getAllAuthor() {
//     return AuthorCollection.find()
//   }

//  * TODO: export all functions from this file by adding their names as keys to this
//  * object
//  */
module.exports = {
  CreateAnime,
  getAllAnime,
  addNewAnime,
  DeleteAnime,
  GetAnime
  
}
