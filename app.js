var fs =require('fs');
var os =require('os');
var express = require('express');

//var sortr=require('./sortr');
var app = express();


//set port
app.set('port', process.env.PORT || 8080);

//sortr code
    var downloads = os.homedir() + '/' + 'Downloads';
    fs.readdir(downloads, function (err, files) {
        if (err) throw err;

        //loop through the files array;
        files.forEach(function (file) {


        //sort mp3 files
        sort(['mp3','ogg','wav'],'music');
        //sort video files
        sort(['mp4','avi','flv','vob','mpg','mpeg'],'videos')
        //sort books
        sort(['pdf','epub'],'books')
	//sort zip,gzip and rar files
 	sort(['zip','gzip','rar'],'Zip')
        //sort apps
        sort(['dmg','exe'],'apps')
        //sort pictures
        sort(['png','jpeg','jpg'],'pictures')
        //sort documents
        sort(['doc','ppt'],'pictures')

        //Remove unfinished downloads
        unlink('.crdownload');

         // remove files
         function unlink(ext){
            if (file.indexOf('.' + ext) != -1)  {
                    fs.unlink(downloads + '/' + file, function (err) {
                    console.log('faulty file removed')
                        })
                    }
                }

         // sort files
        function sort(extension, mime){
            extension.map(function(ext){
                

            if (file.indexOf('.' + ext) != -1)  {
                        console.log(file + ' ' + 'found');

                    //create  directories
                    if (!fs.exists(downloads + '/' + mime, function (err) { })) {
                        fs.mkdir(downloads + '/' + mime, function (err) {
                            console.log(mime + 'folder created');
                            //rename paths
                            var oldpath = downloads + '/' + file;
                            var newpath = downloads + '/' + mime + '/' + file;

                            fs.rename(oldpath, newpath, function (err) {
                                if (err) throw err;

                                });
                            });
                        }
                    }
                });
            } 
        });
    });
            
//listen
app.listen(app.get('port'),function(){
    console.log('listening on' + app.get('port'))
});


