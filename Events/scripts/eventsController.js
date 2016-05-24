var fs=require('fs');

module.exports.get=function(req,res){
    
    var event=fs.readFileSync('app/data/event/'+req.params.id+'.json','utf8');
    res.setHeader("Content-Type","application/json");
    res.send(event);
}

module.exports.save=function(req,res){
    var event=req.body;
    debugger;
    fs.writeFileSync('app/data/event/'+req.params.id+'.json',JSON.stringify(event));
    res.setHeader("Content-Type","application/json");
    res.send(event);
}
//获取所有EVent数据
module.exports.getAll=function(req,res){
    var path='app/data/event';
    
    var files=[];
    try{
        files=fs.readdirSync(path);
    }
    catch(e){
        res.send('[]');
        res.end();
    }
    var results="[";
    for(var i=0;i<files.length;i++){
        if(files[i].indexOf(".json")==files[i].length-5){
            results+=fs.readFileSync(path+"/"+files[i])+",";
        }
    }
    results=results.substr(0,results.length-1);
    results+="]";
    
    res.setHeader("Content-Type","application/json");
    res.send(results);
    res.end();
}