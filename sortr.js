<<<<<<< HEAD
var os = require('os');
var fs = require('fs');
var express = require('express');

module.exports = function (app) {
    var downloads = os.homedir() + '/' + 'Downloads';
    fs.readdir(downloads, function (err, files) {
        if (err) throw err;

        //loop through the files array;
        files.forEach(function (file) {


            //sort mp3 files
        sort(['mp3','ogg','wav'],'music')
        //sort video files
        sort(['mp4','avi','flv','vob','mpg','mpeg'],'videos')
        //sort books
        sort(['pdf','epub'],'books')
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
                    fs.unlink(downloads + '/' + file, function (err) {
                    console.log('faulty file removed')
                     })
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
};           
=======
var os =require('os');
var fs=require('fs');
var express=require('express');

module.exports=function(app){
    var downloads=os.homedir() + '/' + 'Downloads/try'; 
    fs.readdir(downloads,function(err,files){
        if (err)throw err;
        
        //loop through the files array;
        var count=1;
        files.forEach(function(file){
            

            //sort mp3 files
            if    ( (  file.indexOf('.mp3') != -1) || (file.indexOf('.ogg') != -1) || (file.indexOf('.wav') != -1)  ){
                    console.log(file + ' ' + 'found');

                         //create  directories
                       if(!fs.exists(downloads + '/' + 'Music',function(err){})){
                             fs.mkdir( downloads + '/' + 'Music',function(err){
                                 console.log('downloads folder created');
                                  //rename paths
                                    var oldpath=downloads + '/' + file;
                                    var newpath=downloads + '/' + 'Music' +'/' + file;

                                        fs.rename(oldpath,newpath,function(err){
                                        if (err)throw err;
                        
                                 });                
                             });
                          }
                       
                 }
                 //sort video files
                else if  ( (  file.indexOf('.mp4') != -1) || (file.indexOf('.avi') != -1) || (file.indexOf('.3gp') != -1 )|| (file.indexOf('.flv') != -1) || (file.indexOf('.vob') != -1)|| (file.indexOf('.mpg') != -1)|| (file.indexOf('.mpeg') != -1) ){
                         console.log(file + ' ' + 'found');

                    
                       //create  directories
                       if(!fs.exists(downloads + '/' + 'Videos',function(err){})){
                             fs.mkdir( downloads + '/' + 'Videos',function(err){
                                  console.log('videos folder created');
                                    //rename paths
                                    var oldpath=downloads + '/' + file;
                                    var newpath=downloads + '/' + 'Videos' +'/' + file;

                                        fs.rename(oldpath,newpath,function(err){
                                        if (err)throw err;
                        
                                 });                
                             });
                          }
                    }
                    //sort pdf files
                      else if ( (  file.indexOf('.pdf') != -1) || (file.indexOf('.epub') != -1) ){
                         console.log(file + ' ' + 'found');

                      
                       //create  directories
                       if(!fs.exists(downloads + '/' + 'Books',function(err){})){
                             fs.mkdir( downloads + '/' + 'Books',function(err){
                                  console.log('books folder created');
                                  //rename paths
                                    var oldpath=downloads + '/' + file;
                                    var newpath=downloads + '/' + 'Books' +'/' + file;

                                        fs.rename(oldpath,newpath,function(err){
                                        if (err)throw err;
                        
                                 });                
                             });
                          }
                    }
                    //sort app files
                      else if ( (  file.indexOf('.dmg') != -1) || (file.indexOf('.exe') != -1) ){
                         console.log(file + ' ' + 'found');

                     
                       //create  directories
                       if(!fs.exists(downloads + '/' + 'Applications',function(err){})){
                             fs.mkdir( downloads + '/' + 'Applications',function(err){
                                  console.log('applications folder created');
                                   //rename paths
                                    var oldpath=downloads + '/' + file;
                                    var newpath=downloads + '/' + 'Applications' +'/' + file;

                                        fs.rename(oldpath,newpath,function(err){
                                        if (err)throw err;
                        
                                 });                
                             });
                          }
                    }
                    //sort image files
                        else if  ( (  file.indexOf('.png') != -1) || (file.indexOf('.jpg') != -1) || (file.indexOf('.jpeg') != -1 )|| (file.indexOf('.svg') != -1) || (file.indexOf('.jpeg2000') != -1) ){
                         console.log(file + ' ' + 'found');

                      
                       //create  directories
                       if(!fs.exists(downloads + '/' + 'Images',function(err){})){
                             fs.mkdir( downloads + '/' + 'Images',function(err){
                                  console.log('images folder created');
                                  //rename paths
                                    var oldpath=downloads + '/' + file;
                                    var newpath=downloads + '/' + 'Images' +'/' + file;

                                        fs.rename(oldpath,newpath,function(err){
                                        if (err)throw err;
                        
                                 });                
                             });
                          }
                    }
                    //sort zip files
                    else if ( (  file.indexOf('.zip') != -1) || (file.indexOf('.exe') != -1) ){
                         console.log(file + ' ' + 'found');

                     
                         //create  directories
                       if(!fs.exists(downloads + '/' + 'Zips',function(err){})){
                             fs.mkdir( downloads + '/' + 'Zips',function(err){
                                  console.log('zips folder created');
                                   //rename paths
                                    var oldpath=downloads + '/' + file;
                                    var newpath=downloads + '/' + 'Zips' +'/' + file;

                                        fs.rename(oldpath,newpath,function(err){
                                        if (err)throw err;
                        
                                 });               
                             });
                          }
                    }
                    //sort documents file
                      else if  ( (  file.indexOf('.doc') != -1) || (file.indexOf('.ppt') != -1) || (file.indexOf('.txt') != -1 ) ){
                         console.log(file + ' ' + 'found');

                    
                         //create  directories
                       if(!fs.exists(downloads + '/' + 'Documents',function(err){})){
                             fs.mkdir( downloads + '/' + 'Documents',function(err){
                                  console.log('documents folder created');
                                    //rename paths
                                    var oldpath=downloads + '/' + file;
                                    var newpath=downloads + '/' + 'Documents' +'/' + file;

                                        fs.rename(oldpath,newpath,function(err){
                                        if (err)throw err;
                        
                                 });               
                             });
                          }
                    }
                    //For other files
                    else {
                         console.log(file + ' ' + 'found');
                         
                          // (fs.lstat(path,function(err,stats){
                      //  if(stats.isDirectory()){
                      //      console.log('directory exists')
                      //  }else{}
                      // }))
                         //create  directories
                       if(!fs.exists(downloads + '/' + 'Alien',function(err){})){
                             fs.mkdir( downloads + '/' + 'Alien',function(err){
                                  console.log('alien folder created');
                                  //rename paths
                                    var oldpath=downloads + '/' + file;
                                    var newpath=downloads + '/' + 'Alien' +'/' + file;

                                        fs.rename(oldpath,newpath,function(err){
                                        if (err)throw err;
                        
                                 });              
                             });
                          }
                    }
           //close forEach loop
            });
        });
    };
>>>>>>> 7eadfe696774b516328cb5a07a0b509c555f519d
