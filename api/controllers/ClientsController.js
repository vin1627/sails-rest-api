

module.exports = {
    list: function(req, res){
        Clients.find({}).exec(function(err, results){
            if(err){
                res.send(500, {error: "DATABASE Error"});
            }
            res.view('homepage', {clients:results});
        })
       
    },

    add: function(req, res){
        res.view('add');
    },
    create: function(req, res){
        var name = req.body.uname;
        var email = req.body.email;
        var password = req.body.password;
        var formData = {name:name,
            email: email,
            password:password};
            console.log(name)
        Clients.create(formData).exec(function(err, result){
            console.log(result);
            res.redirect('/clients/list');
        })
           
        
    },
    edit: function(req, res){
        var id = req.params.id
        Clients.findOne({id:id}).exec(function(err, results){
            if(err){
                res.send(500, {error: "DATABASE Error"});
            }
            console.log(results)
            res.view('edit', {clients:results});
        })
    },
    update: function(req, res){

        var name = req.body.uname;
        var email = req.body.email;
        var password = req.body.password;
        var formData = {
            
            name:name,
            email: email,
            password:password};
            console.log(formData)
        Clients.update({id:req.params.id},formData).exec(function(err, result){
            console.log(result);
            res.redirect('/clients/list');
        })
           
    },
    delete: function(req, res){
        var id = req.params.id
        Clients.destroy({id:id}).exec(function(err, results){
            if(err){
                res.send(500, {error: "DATABASE error"});
            }
            res.redirect('/clients/list');
            console.log(results)
            
        })

    }
};

