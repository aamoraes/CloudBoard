CloudBoard
===

Collborative web WhiteBoard built using HTML5, nodejs and socket.io.

## Installation

1. Install [nodejs](https://github.com/joyent/node) and [npm](https://github.com/isaacs/npm)
2. Clone this repo

        $ git clone git@github.com:chiragpat/CloudBoard.git

3. Install dependencies
        
        $ npm install

4. Set environment variable SWARM_DB_URL to the url of your mongo database.

        $ echo "export SWARM_DB_URL=\"Your mongodb url goes here\"" >> ~/.bash_profile

## Quick Start
To start webapp

    $ node app.js

Then go to URL

    http://localhost:3000

To change ports add environment variable PORT with the port you want to run the app on.
