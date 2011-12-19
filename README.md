###  [scrabble](http://scrabble.nodejitsu.com)

### install [npm](http://npmjs.org/)

    $ curl http://npmjs.org/install.sh | sh

### install node packages

    scrabble $ npm install
    npm http GET https://registry.npmjs.org/nib
    npm http GET https://registry.npmjs.org/jade
    npm http GET https://registry.npmjs.org/express
    npm http GET https://registry.npmjs.org/socket.io
    npm http GET https://registry.npmjs.org/stylus
    npm http 304 https://registry.npmjs.org/express
    npm http 304 https://registry.npmjs.org/socket.io
    npm http 304 https://registry.npmjs.org/nib
    npm http 304 https://registry.npmjs.org/jade
    npm http 200 https://registry.npmjs.org/stylus
    npm http GET https://registry.npmjs.org/stylus/-/stylus-0.21.0.tgz
    npm http 200 https://registry.npmjs.org/stylus/-/stylus-0.21.0.tgz
    npm http GET https://registry.npmjs.org/mkdirp/0.0.7
    npm http GET https://registry.npmjs.org/mime
    npm http GET https://registry.npmjs.org/qs
    npm http GET https://registry.npmjs.org/connect
    npm http GET https://registry.npmjs.org/mkdirp
    npm http GET https://registry.npmjs.org/commander
    npm http 304 https://registry.npmjs.org/mkdirp/0.0.7
    npm http 304 https://registry.npmjs.org/qs
    npm http 304 https://registry.npmjs.org/connect
    npm http 304 https://registry.npmjs.org/mime
    npm http 304 https://registry.npmjs.org/mkdirp
    npm http 304 https://registry.npmjs.org/commander
    npm http GET https://registry.npmjs.org/socket.io-client/0.8.7
    npm http GET https://registry.npmjs.org/redis/0.6.7
    npm http GET https://registry.npmjs.org/policyfile/0.0.4
    npm http 304 https://registry.npmjs.org/policyfile/0.0.4
    npm http 304 https://registry.npmjs.org/redis/0.6.7
    npm http 304 https://registry.npmjs.org/socket.io-client/0.8.7
    npm http GET https://registry.npmjs.org/mkdirp/0.0.7
    npm http GET https://registry.npmjs.org/growl/1.1.0
    npm http GET https://registry.npmjs.org/cssom/0.2.0
    npm http 304 https://registry.npmjs.org/mkdirp/0.0.7
    npm http 304 https://registry.npmjs.org/cssom/0.2.0
    npm http 200 https://registry.npmjs.org/growl/1.1.0
    npm http GET https://registry.npmjs.org/growl/-/growl-1.1.0.tgz
    npm http 200 https://registry.npmjs.org/growl/-/growl-1.1.0.tgz
    npm http GET https://registry.npmjs.org/formidable
    npm http 304 https://registry.npmjs.org/formidable
    npm http GET https://registry.npmjs.org/websocket-client/1.0.0
    npm http GET https://registry.npmjs.org/xmlhttprequest/1.2.2
    npm http GET https://registry.npmjs.org/uglify-js/1.0.6
    npm http 304 https://registry.npmjs.org/websocket-client/1.0.0
    npm http 304 https://registry.npmjs.org/uglify-js/1.0.6
    npm http 304 https://registry.npmjs.org/xmlhttprequest/1.2.2
    nib@0.3.1 ./node_modules/nib 
    jade@0.19.0 ./node_modules/jade 
    ├── commander@0.2.1
    └── mkdirp@0.2.1
    stylus@0.21.0 ./node_modules/stylus 
    ├── growl@1.1.0
    ├── mkdirp@0.0.7
    └── cssom@0.2.0
    express@2.5.2 ./node_modules/express 
    ├── mkdirp@0.0.7
    ├── qs@0.4.0
    ├── mime@1.2.4
    └── connect@1.8.3
    socket.io@0.8.7 ./node_modules/socket.io 
    ├── policyfile@0.0.4
    ├── redis@0.6.7
    └── socket.io-client@0.8.7

### run server

    scrabble $ node app.js 
       info  - socket.io started
       app listening on http://0.0.0.0:3000

