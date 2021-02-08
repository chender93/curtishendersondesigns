const ghpages = require('gh-pages');

ghpages.publish('build', {
    repo: 'https://' + process.env.GH_TOKEN + '@github.com/chender93/curtishendersondesigns.git'
  },
  function(result) {
    console.log(result);
  }
  );