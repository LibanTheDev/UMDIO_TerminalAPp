                           // create our app w/ express
                // log requests to the console (express4)
   // simulate DELETE and PUT (express4)
    var request = require('request');           //  used for making http calls to umd.io api
    var prompt = require('prompt'); //used for input


    var schema = {

    	properties:{

    		name: {
    			message:'Enter in the course_id (e.g CMSC or MATH)',
    			required:true
    		},

    	}
    };


    prompt.start();

    prompt.get(schema, function(err,result){

    	console.log('Input received');
    	request('http://api.umd.io/v0/courses?dept_id='+result.name, function(err, response, body){
    			var courseInfo = (JSON.parse(body));
    			console.log(courseInfo.course_id);
    			for(var i=0; i<courseInfo.length;i++){
    				console.log(courseInfo[i].course_id+ ' ' + courseInfo[i].name);
    			}
    	});

    });







   