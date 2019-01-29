$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1414488489',
        limit: 28,
        resolution: 'standard_resolution',
        accessToken: '1414488489.63184e7.7950d138180e485d8c359044eea2c0d7',
        sortBy: 'most-recent',
        type: 'image',
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid insta-img"/></a>',
        filter: function(image) {
          console.log(image.type);
          return (image.type === "image" || image.type ==="carousel");
        }
    });
    userFeed.run();
});
