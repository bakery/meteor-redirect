if(Meteor.isServer){
  Router.route('/:path1?/:path2?/:path3?', function () {
    var redirectUrl = Meteor.settings['REDIRECT_URL'] || 'http://google.com';
    this.response.writeHead(302, {
      'Location': redirectUrl
    });
    this.response.end();
  }, {where: 'server'});
}