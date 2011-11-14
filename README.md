### scrabble

### install npm (node package manager)

    curl http://npmjs.org/install.sh | sh

### install node packages

    [~/Code/github/scrabble]% npm install                          
    nib@0.2.0 ./node_modules/nib 
    stylus@0.19.2 ./node_modules/stylus 
    ├── growl@1.1.0
    ├── mkdirp@0.0.7
    └── cssom@0.2.0
    express@2.5.0 ./node_modules/express 
    ├── mime@1.2.4
    ├── mkdirp@0.0.7
    ├── qs@0.3.2
    └── connect@1.7.3
    jade@0.17.0 ./node_modules/jade 
    ├── commander@0.2.1
    └── mkdirp@0.1.0
    socket.io@0.8.7 ./node_modules/socket.io 
    ├── policyfile@0.0.4
    ├── redis@0.6.7
    └── socket.io-client@0.8.7

### run server

    [~/Code/github/scrabble]% node app.js                             
        info  - socket.io started
        app listening on http://0.0.0.0:3000
