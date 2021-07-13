const stream = ( socket ) => {
    socket.on( 'subscribe', ( data ) => {
        // Subscribe the socket to a given meeting
        socket.join( data.room );
        socket.join( data.socketId );

        //Inform other members in the room of new user's arrival
        if ( socket.adapter.rooms[data.room].length > 1 ) {
            socket.to( data.room ).emit( 'new user', { socketId: data.socketId } );
        }
    } );

    socket.on( 'newUserStart', ( data ) => {
        socket.to( data.to ).emit( 'newUserStart', { sender: data.sender } );
    } );

    // Upon recieving sdp info regarding media transfer endpoint, the server will re-emit the description to all the sockets
    socket.on( 'sdp', ( data ) => {
        socket.to( data.to ).emit( 'sdp', { description: data.description, sender: data.sender } );
    } );

    // Upon recieving info of the ice candidates from the STUN server, the data is again transmitted to all the sockets
    socket.on( 'ice candidates', ( data ) => {
        socket.to( data.to ).emit( 'ice candidates', { candidate: data.candidate, sender: data.sender } );
    } );

    // Chat connection 
    socket.on( 'chat', ( data ) => {
        socket.to( data.room ).emit( 'chat', { sender: data.sender, msg: data.msg } );
    } );
};

module.exports = stream;
