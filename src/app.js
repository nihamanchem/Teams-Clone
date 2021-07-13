let express = require( 'express' );
let app = express();

let server = require( 'http' ).Server( app );

let io = require( 'socket.io' )( server );
let stream = require( './webstream/stream' );
let path = require( 'path' );

let favicon = require( 'serve-favicon' );
app.use( favicon( path.join( __dirname, 'logo.png' ) ) );
app.use( '/components', express.static( path.join( __dirname, 'components' ) ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );


io.of( '/stream' ).on( 'connection', stream );

const PORT = process.env.PORT || 3000

server.listen( PORT );
