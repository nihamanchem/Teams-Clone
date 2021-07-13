ABOUT THE PROJECT

# Basic Teams Clone

A basic Microsoft Teams Clone App that enables communication with a group of people implemented using WebRTC, socket.io and NodeJS.

# Implemented functinalities

- Enables video call comforatbly with a group of 8 people.
- Allows you to mute and unmute your audio while on the call.
- Allows you to hide and unhide your video while on the video call.
- Allows you to share your screen with fellow participants.
- Allows you to record your video or screen while on the meeting.
- There is also a chat feature on the header navbar of the meeting screen that allows you to view and send in-call messages.
- Messages displayed specify details of the sender as well as the time at which the message has been sent.
- Allows you to full-screen a particular participant on the call
- Allows you to mute a particular participant on the call.
- Allows you to view a particular participant's video on an picture-in-picture window on the screen.
- Allows you to view your streaming video on an overlay picture-in-picture window on the screen.

# You can try the app by yourself on https://shrouded-bastion-11973.herokuapp.com/

Just a quick fun fact: Shrouded figure is one of the characters who guides you through Bastion arena in the game of World of Warcraft.

The present project has been built with INDIVIDUAL AGILE SCRUM METHODOLOGY

As u can see. I have divided my work into the following sprints initially and each problem I faced in one sprint I tried to resolve it in the next one along with its own targets.

# INITIAL PLAN
- Sprint 1: 
Link generation and connection between peers.
- Sprint 2: 
Flaws in the first sprint 1 have been rectified by changing the approach of generating the link for meeting.
Toggle video and audio have to be implemented
- Sprint 3:
CSS of the site has to be improved and in-call chat functionality has to be implemented.
- Sprint 4:
Changes were accommodated satisfactorily.
Picture-in-picture functionality to be checked.

# PROBLEMS
- Sprint 1: 
Flaws surfaced and proper link generation was not being possible.
- Sprint 2: 
Toggle video and audio buttons worked well and share screen and record functionalities documentation was also done.
- Sprint 3:
Minor CSS changes were not being adjusted.

It is evident that the app can be improved a thousand fold by adding new features to it. So, I have left a small comment at the start of each block so that further development in the project becomes convenient. 

While going through the code, let me brief you as to what part of kind you can find where.

# src/index.html
 The front-end code of the host screen, attendee screen and the meeting screen can be found in this file.

# src/components/css/app.cs
  Contains the styling part of index.html

# webstream/stream.js
 Contains the code for socket connections while in the meeting.

# src/components/javascript/helpers.js
 Contains helpers used all across the app. For example. credentials required to connect to XIRSYS server, helpers to check if the user media is made available, for sharing screen, helpers to adjust attendees' window size, etc.

# src/components/javascript/autolink.js
 The code is required to use the the function autoLink() which takes a string of text, finds URLs within it, and hyperlinks them, at different parts in the other code files.

# src/components/javascript/webrtc.js
 WebRTC related connections are being handled in this file,i.e., offer being create, recieving ice candidates, adding participants to the call, request to share screen, record video and screen and recieving messages, etc related code is in this file.

# src/components/javascript/events.js
 Code related to the change in screen and buttons upon clicking various buttons ,and contact between one screen to another is being handled in this file.

VULNERABILITIES OF THE PROJECT:
- In-order for the icons in the footer to change properly, they have to be clicked exactly at the center.
- When the app is reloaded, in-call messages are lost.
- When the participant's video is exited from the picture-in-picture window, the restored video gets stuck and the app has to be reloaded again.
- Doesn't work properly under low network bandwidth.
