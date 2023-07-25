
const errHandler =  (err, req, res, next)=> {

    const statuscode = res.statuscode ? res.statuscode : 500 
    
       if(statuscode){
          
     res.status(statuscode)
     res.json({

        message: err.message
     })
           
       }

       next()
}

      
module.exports = errHandler

