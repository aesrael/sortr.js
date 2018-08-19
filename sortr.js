const fs = require('fs');
const os = require('os');

//sortr code
const dirs = [
  'Downloads',
  'Music',
  'Desktop',
  'Videos',
  'Pictures',
  'Documents'
];

//check if 'new' folders exist in each parent dir, else create
for (let i = 0; i < dirs.length; i++) {
  if (!fs.existsSync(os.homedir() + '/' + dirs[i] + '/' + 'new')) {
    fs.mkdirSync(os.homedir() + '/' + dirs[i] + '/' + 'new');
  }
}

// fs.mkdirSync(os.homedir() + '/' + dirs[i]  + '/' + 'new');
//folder to loop through
const downloads = os.homedir() + '/' + 'Downloads/test';

//folders to sort to
const music = os.homedir() + '/' + 'Music' + '/' + 'new';
const desktop = os.homedir() + '/' + 'Desktop' + '/' + 'new';
const video = os.homedir() + '/' + 'Videos' + '/' + 'new';
const pictures = os.homedir() + '/' + 'Pictures' + '/' + 'new';
const documents = os.homedir() + '/' + 'Documents' + '/' + 'new';

function sort(extension, dir) {
  fs.readdir(downloads, function(err, files) {
    if (err) throw err;

    //loop through the files array;
    files.forEach(function(file) {
      extension.map(function(ext) {
        if (file.indexOf('.' + ext) != -1) {
          console.log(file + ' ' + 'found');

          //rename paths
          const oldpath = downloads + '/' + file;
          const newpath = dir + '/' + file;

          fs.rename(oldpath, newpath, function(err) {
            if (err) throw err;
          });
        }
      });
    });
  });
}

// remove files
function unlink(ext) {
  fs.readdir(downloads, function(err, files) {
    files.forEach(function(file) {
      if (file.indexOf('.' + ext) != -1) {
        fs.unlink(downloads + '/' + file, function(err) {
          console.log('faulty file removed');
        });
      }
    });
  });
}

//sort mp3 files
sort(['mp3', 'ogg', 'wav'], music);
//sort video files
sort(['mp4', 'avi', 'flv', 'vob', 'mpg', 'mpeg'], video);
//sort books
sort(['pdf', 'epub'], documents);
//sort zip,gzip and rar files
sort(['zip', 'gzip', 'rar'], documents);
//sort apps
sort(['dmg', 'exe'], documents);
//sort pictures
sort(['png', 'jpeg', 'jpg'], pictures);
//sort documents
sort(['doc', 'ppt'], documents);

//Remove unfinished downloads
unlink('.crdownload');