### scrabble

### install npm (node package manager)

    curl http://npmjs.org/install.sh | sh

### install node packages

    [~/Code/github/scrabble]% npm install 
        nib@0.2.0 ./node_modules/nib
        mkdirp@0.0.7 ./node_modules/express/node_modules/mkdirp
        mime@1.2.4 ./node_modules/express/node_modules/mime
        qs@0.3.1 ./node_modules/express/node_modules/qs
        connect@1.7.2 ./node_modules/express/node_modules/connect
        express@2.5.0 ./node_modules/express
        mkdirp@0.0.7 ./node_modules/stylus/node_modules/mkdirp
        growl@1.1.0 ./node_modules/stylus/node_modules/growl
        cssom@0.2.0 ./node_modules/stylus/node_modules/cssom
        stylus@0.19.0 ./node_modules/stylus
        mkdirp@0.0.7 ./node_modules/jade/node_modules/mkdirp
        commander@0.2.1 ./node_modules/jade/node_modules/commander
        jade@0.16.4 ./node_modules/jade
        policyfile@0.0.4 ./node_modules/socket.io/node_modules/policyfile
        redis@0.6.6 ./node_modules/socket.io/node_modules/redis
        websocket-client@1.0.0 ./node_modules/socket.io/node_modules/socket.io-client/node_modules/websocket-client
        xmlhttprequest@1.2.2 ./node_modules/socket.io/node_modules/socket.io-client/node_modules/xmlhttprequest
        uglify-js@1.0.6 ./node_modules/socket.io/node_modules/socket.io-client/node_modules/uglify-js
        socket.io-client@0.8.0 ./node_modules/socket.io/node_modules/socket.io-client
        socket.io@0.8.0 ./node_modules/socket.io


### run server

    [~/Code/github/scrabble]% node app.js                             
        info  - socket.io started
        app listening on http://0.0.0.0:3000
