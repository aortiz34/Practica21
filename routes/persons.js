const express = require('express');
const person = require('../models/person');
const router = express.Router();
const mongoose = require('../models/person');
let Person = require('../models/person');

router.get('/persons', function (req, res, next) {
    Person.find(function(err, persons) {
        if (err) return next(err);
        //res.json(persons);
        res.render('personsIndex',{persons})
    });
});

router.get('/person', function(req, res){
    res.render('person');
});

router.post('/addPerson', function(req,res){
    // console.log(req.body);
    const myPerson = new Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    }); //aqui se crea la entidad

    myPerson.save(); // y se guarda en la base de datos
})

module.exports=router;