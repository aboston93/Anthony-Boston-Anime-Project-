


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

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
let ArtistSchema = mongoose.Schema({
    name: String,
    works: String,
    style: String,
    popularwork: String,
    collab: String,
    careerDate:Date,
    recent:String,
    
  });


 

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */const ArtistCollection = mongoose.model('artist', ArtistSchema)


/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// function getHelloWorldString() {
//   return 'hello world'
// }
const CreateArtist = () =>
ArtistCollection.create({ name: "kishimoto", works: "naruto", style: "Harem ", popularwork: "dxd",
collab:"studio ghibli", careerDate:"Saitama" , recent:"shounen", 
      })
     

function getAllArtist() {
        return ArtistCollection.find()
      }
function addNewArtist(newartist) {
        //make sure that the isActive is either true or false.
        //if you're using a checkbox in an HTML form then
        //if the checkbox is unselected and you submit the form
        //isActive will not be in the account object
      
        return ArtistCollection.create(newartist);
      }
      
function DeleteArtist(artistid){

    return ArtistCollection.deleteOne({ _id: artistid });

}


function GetArtist(artistid) {
    return ArtistCollection.findById(artistid);
  }

  function updateArtist(artistid, updatedartist) {
    //make sure that the isActive is either true or false.
    //if you're using a checkbox in an HTML form then
    //if the chec kbox is unselected and you submit the form
    //isActive will not be in the account object


    return ArtistCollection.findByIdAndUpdate(artistid, updatedartist)
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
    CreateArtist,
    getAllArtist,
    addNewArtist,
    DeleteArtist,
    GetArtist,
    updateArtist
  
}
