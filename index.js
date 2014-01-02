var im = require('node-imagemagick');
im.convert(['1.jpg', '-resize', '25x120', '2.jpg'], 
function(err, stdout){
  if (err) throw err;
  console.log('stdout:', stdout);
});