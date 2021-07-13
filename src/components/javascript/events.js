import helpers from './helpers.js';

window.addEventListener( 'load', () => {

    //When the 'Generate Meeting ID' button is clicked on the Host screen
    document.getElementById( 'create-room' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();

        let meetingId = document.querySelector( '#meeting-name' ).value;
        let hostName = document.querySelector( '#host-name' ).value;

        if ( meetingId && hostName ) {
            //Remove error message, if any
            document.querySelector( '#err-msg' ).innerHTML = "";

            //Saves the host's name in sessionStorage
            sessionStorage.setItem( 'username', hostName );

            //Creates meeting ID
            let meetingID = `${ location.origin }?room=${ meetingId.trim().replace( ' ', '_' ) }_${ helpers.generateRandomString() }`;

            //To show message that ID has been generated
            document.querySelector( '#room-created' ).innerHTML = 
            `
                Meeting ID generated successfully. 
                Click <a href='${ meetingID }'>here</a> to enter the meeting. 
                Share the meeting URL with your attendees.
            `;

            //Empties the values
            document.querySelector( '#meeting-name' ).value = '';
            document.querySelector( '#host-name' ).value = '';
        }

        //Incase any of the fields is unfilled, prompt to fill the details
        else {
            document.querySelector( '#err-msg' ).innerHTML = "Fill all the fields to generate the link.";
        }
    } );



   //When the 'Enter Meeting' button is clicked on the Attendees' screen
    document.getElementById( 'enter-meeting' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();

        let name = document.querySelector( '#username' ).value;
    
        if ( name ) {
            //Remove error message, if any
            document.querySelector( '#err-msg-username' ).innerHTML = "";
    
            //Saves the attendee's name in sessionStorage
            sessionStorage.setItem( 'username', name );
    
            //Reloads the meeting screen to add the new attendee
            location.reload();
        }
    
        //Incase any of the fields is unfilled, prompt to fill the details
        else {
            document.querySelector( '#err-msg-username' ).innerHTML = "Please input your name";
        }
    } );
    
    //Chat icon is enabled after the meeting commences
    //When the chat icon is clicked
    document.querySelector( '#toggle-chat-pane' ).addEventListener( 'click', ( e ) => {
        let chatElem = document.querySelector( '#chat-pane' );
        let mainSecElem = document.querySelector( '#main-section' );

        // For closing the opened chat panel
        if ( chatElem.classList.contains( 'chat-opened' ) ) {
            chatElem.setAttribute( 'hidden', true );
            mainSecElem.classList.remove( 'col-md-9' );
            mainSecElem.classList.add( 'col-md-12' );
            chatElem.classList.remove( 'chat-opened' );
        }

        // For opening the chat panel
        else {
            chatElem.attributes.removeNamedItem( 'hidden' );
            mainSecElem.classList.remove( 'col-md-12' );
            mainSecElem.classList.add( 'col-md-9' );
            chatElem.classList.add( 'chat-opened' );
        }

        //To remove the 'New' badge on chat icon once the chat window is opened.
        setTimeout( () => {
            if ( document.querySelector( '#chat-pane' ).classList.contains( 'chat-opened' ) ) {
                helpers.toggleChatNotificationBadge();
            }
        }, 300 );
    } );


    //To enable picture-in-picture video for my video by clicking on the video frame
    document.getElementById( 'local' ).addEventListener( 'click', () => {
        if ( !document.pictureInPictureElement ) {
            document.getElementById( 'local' ).requestPictureInPicture()
                .catch( error => {
                    // Video failed to enter Picture-in-Picture mode.
                    console.error( error );
                } );
        }

        //Upon clicking the picture-in-picture video, my video returns to original position on the meeting screen
        else {
            document.exitPictureInPicture()
                .catch( error => {
                    // Video failed to leave Picture-in-Picture mode.
                    console.error( error );
                } );
        }
    } );

    // Functionalities to implement on audience
    document.addEventListener( 'click', ( e ) => {
        //To enlarge any of the particular audience
        if ( e.target && e.target.classList.contains( 'expand-remote-video' ) ) {
            helpers.maximiseStream( e );
        }

        // To mute any of the audience
        else if ( e.target && e.target.classList.contains( 'mute-remote-mic' ) ) {
            helpers.singleStreamToggleMute( e );
        }
    } );

    //To close the record tab
    document.getElementById( 'closeModal' ).addEventListener( 'click', () => {
        helpers.toggleModal( 'recording-options-modal', false );
    } );
} );
