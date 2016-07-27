
var base64Img = require('base64-img');
// When the API-Gateway is finished it calls the callback and passes the image in
base64Img.base64('/home/alwinas/Downloads/pj-b5-38-ed-7d-prehome_dioraddictfragrance_v5585641300039869061.jpg', function(err, data) {
	var img64 =data;

})


function callback (image) {

}

// So the function for the API-Gateway should look like:
function getRelatedImages (image, callback) {

  callback(newImage);
}	