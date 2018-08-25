// import {Authors} from "./models"
const Authors = require("./models");
// const Quotes = require("./models");
function createOne(req, res){
    Authors.create(req.body)
    .then(data => {
        console.log("got to controller-create")
        res.json(data)})
    .catch(errs => res.json(errs))
}
function allauthors(req, res) {
    Authors.find({})
      .then(data =>{
            console.log("got to controller-allauthors") 
            res.json(data)})
      .catch(errs => res.json(errs));
}

function deleteOne(req, res){
    Authors.findByIdAndRemove(req.params.id)
        .then(data =>{ 
            console.log("got to controller-delete") 
            res.json({status: 'gucci',data: 'data'})})
        .catch(errs => res.json(errs))
}

function updateOne(req, res){
    Authors.findByIdAndUpdate(req.params.id, req.body,{runValidators: true, context:'query'})
    .then(data => {
        console.log("got to controller-edit") 
        res.json(data)})
    .catch(errs => res.json(errs))
}
function getOne(req, res) {
    Authors.findById(req.params.id)
        .then(data => {
            console.log("got to controller-getone") 
            res.json(data)})
        .catch(errs => res.json(errs));
}

function createQuote(req, res){
    Authors.findById(req.params.id)
    .then(authordata => {

        authordata.quotes.push(req.body);
        authordata.save((data)=>
        res.json(data)
    );
        // res.json(data)
    })
    .catch(errs => res.json(errs))
}
function voteQuote(req, res){
    Authors.findOneAndUpdate({_id:req.params.authorid, 'quotes._id': req.params.quoteid}, {$inc: {'quotes.$.votes': req.body.voting}})
      .then(data => console.log('updated my quote voting',data,req.params.authorid,  req.params.quoteid))
      .then(data => res.json({author: data}))
      .catch(err => console.log('error!', err))
  }
function deleteQuote(req, res){
    console.log(req.params.id);
    console.log(req.params.quid);
    Authors.findById(req.params.id)
        .then(authordata =>{ 
            console.log("got to controller-delete")
            authordata.quotes.id(req.params.quid).remove(); 
            authordata.save((data)=>
            res.json(data)
        );
    })        
        .catch(errs => res.json(errs))
}




module.exports = {
    createOne: createOne,
    allauthors: allauthors,
    deleteOne: deleteOne,
    updateOne: updateOne,
    getOne: getOne,
    createQuote: createQuote,
    deleteQuote: deleteQuote,
    voteQuote: voteQuote

};