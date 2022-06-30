const axios = require('axios');


exports.homeRoute=(req, res)=>{

  //Make a get request to /api/users
  axios.get('http://localhost:9001/api/users')
    .then(function(resp){
      res.render('index', {users:resp.data});
    })
    .catch(error=>{
      res.send(error)
    })
}

exports.addUserRoute=(req, res)=>{
  res.render('add_user');
}

exports.updateUserRoute=(req, res)=>{
  axios.get('http://localhost:9001/api/users', {params:{id:req.query.id}})
    .then(function(userdata){
      res.render('update_user', {user:userdata.data})
    })
    .catch(error=>{
      res.send(error)
    })
}