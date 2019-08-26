


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
let AuthorSchema = mongoose.Schema({
    name: String,
    works: String,
    maingenre: String,
    popularanime: String,
    firstDate:Date,
    popularchar:String,
    recent:(String),
  
  });


 

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */const AuthorCollection = mongoose.model('Author', AuthorSchema)


/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// function getHelloWorldString() {
//   return 'hello world'
// }
const CreateAuthor = () =>
AuthorCollection.create({ name: "kishimoto", works: "naruto", maingenre: "Harem ", popularanime: "dxd",
firstDate:new Date(), popularchar:"Saitama" , recent:"shounen", 
      })

function getAllAuthor() {
        return AuthorCollection.find()
      }
function addNewAuthor(newauthor) {
        //make sure that the isActive is either true or false.
        //if you're using a checkbox in an HTML form then
        //if the checkbox is unselected and you submit the form
        //isActive will not be in the account object
      
        return AuthorCollection.create(newauthor);
      }
      
function DeleteAuthor(authorid){

    return AuthorCollection.deleteOne({ _id: authorid });

}


function GetAuthor(authorid) {
    return AuthorCollection.findById(authorid);
  }

  function updateAuthor(authorid, updatedauthor) {
    //make sure that the isActive is either true or false.
    //if you're using a checkbox in an HTML form then
    //if the chec kbox is unselected and you submit the form
    //isActive will not be in the account object


    return animeCollection.findByIdAndUpdate(authorid, updatedauthor)
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
  CreateAuthor,
  getAllAuthor,
  addNewAuthor,
  DeleteAuthor,
  GetAuthor,
  updateAuthor
  
}
