const connectionPool = require('../db/databaseConnection')

const initializeUi=(req,resp)=>{
    connectionPool.getConnection((error, connection)=>{    
        if(error){        
            throw error;    
        }    
        console.log(connection);

        const sql ="SELECT * FROM customer";        
        connection.query(sql,(err,rows)=>{            
            connection.release();            
            if(!err){                
                resp.render('home',{rows});            
            }else{                
                console.log(err);            
            }            console.log(rows);        
        });    
    }); 
      
}
module.exports={    
    initializeUi}