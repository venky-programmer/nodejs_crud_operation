var UserDB = require('../model/model.js')

//create and save new user api
exports.create= (req, res)=>{
  //validate request 
  if(!req.body){
    res.status(400).send({message:'Content can not be empty!'});
    return;
  }

  //new user
  const user = new UserDB({
    name:req.body.name,
    email:req.body.email,
    age:req.body.age,
    gender:req.body.gender,
    status:req.body.status
  })

  //Save user in the databse
  user
    .save(user)
    .then(data=>{
      // res.send(data)
      res.redirect('/add_user')
    })
    .catch(err=>{
      res.status(500).send({
        message:err.message || 'Some error occured while creating a create operation'
      });
    });
}


// retrieve and return all users / retrieve and return a single user
exports.find=(req, res)=>{
  
  if(req.query.id){
    const id= req.query.id;

    UserDB.findById(id)
      .then(data=>{
        if(!data){
          res.status(404).send({message:`Not found user with id ${id}`})
        }else{
          res.send(data);
        }
      })
      .catch(error=>{
        res.status(500).send({message:`Error retrieving user with id ${id}`})
      })

  }else{
    UserDB.find()
      .then(user=>{
        res.send(user)
      })
      .catch(error=>{
        res.status(500).send({message: error.message || "Error occurred while retrieving user information"})
      })
  }


} 


//Update a new identified user by user id
exports.update=(req, res)=>{
  if(!req.body){
    return res.status(400).send({message:"Data to update cannot not be empty"})
  }

  const id = req.params.id;

  UserDB.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
    .then(data=>{
      if(!data){
        res.status(404).send({message:`Cannot update user with ${id}. Maybe user not found`})
      }else{
        res.send(data)
      }
    })
    .catch(error=>{
      res.status(500).send({message:"Error update user information"})
    })

}


//Delete a user with specified user ID in the request
exports.delete=(req, res)=>{

  const id = req.params.id;

  UserDB.findByIdAndDelete(id)
    .then(data=>{
      if(!data){
        res.status(404).send({message:`Cannot delete with id ${id}. Maybe id is wrong.`})
      }else{
        res.send({message:"User was deleted successfully"})
      }
    })
    .catch(error=>{
      res.status(500).send({message:"Could not delete user with id" +id});
    });
}