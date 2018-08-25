
const Pets = require("./models");


function createOne(req, res){
    Pets.create(req.body)
    .then(data => {
        console.log("got to controller-createPet")
        res.json(data)})
    .catch(errs => res.json(errs))
}
function allpets(req, res) {
    Pets.find({})
      .then(data =>{
            console.log("got to controller-allpets") 
            res.json(data)})
      .catch(errs => res.json(errs));
}

function deleteOne(req, res){
    Pets.findByIdAndRemove(req.params.id)
        .then(data =>{ 
            console.log("got to controller-delete") 
            res.json({status: 'gucci',data: 'data'})})
        .catch(errs => res.json(errs))
}

function updateOne(req, res){
    Pets.findByIdAndUpdate(req.params.id, req.body,{runValidators: true, context:'query'})
    .then(data => {
        console.log("got to controller-edit") 
        res.json(data)})
    .catch(errs => res.json(errs))
}
function getOne(req, res) {
    Pets.findById(req.params.id)
        .then(data => {
            console.log("got to controller-getonePet") 
            res.json(data)})
        .catch(errs => res.json(errs));
}
// function createVote(req, res){
//     Authors.findById(req.params.id)
//     .then(petdata => {

//         petdata.votes += push1;
//         Petdata.save((data)=>
//         res.json(data)
//     );
//         // res.json(data)
//     })
//     .catch(errs => res.json(errs))
// }


// function voteQuote(req, res){
//     Pets.findOneAndUpdate(req.params.id, req.body)
//       .then(data => console.log('updated my quote voting',req.params.id,data,))
//       .then(data => res.json(data))
//       .catch(err => console.log('error!', err))
//   }


module.exports = {
    createOne: createOne,
    allpets: allpets,
    deleteOne: deleteOne,
    updateOne: updateOne,
    getOne: getOne,
    // createVote: createVote

};