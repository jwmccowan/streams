# Streamio
### An old way to stream
**Streamio** is a pretty simple streaming webapp.  It authenticates with **Google** and allows the user to either create or watch streams.

Once logged in, the homepage lists all of the streams anyone has created.  From here, a user can delete or edit their stream.
### Using Streamio
With **OBS** or similar streaming software, users can stream to 

    rtmp://localhost/live

with a stream key of **1**, and you can watch your stream by viewing the first option in the list.  Likewise, a stream key of **2** can be watched on the second item, etc.  Look, it's not that in depth..
### Running Streamio
When running this app locally, be sure to run 

    npm start

in the **project directory**, as well as in the **api** and **rtmpserver** directories.  This will run the webapp, the REST backend, and the RTMP server, respectively.

This code was written using material from a ReactJS course.  Thanks for checking it out (maybe literally), it was written very quickly, so my checkins and comments aren't very clean.  Shame on me.  Hopefully the pretty code speaks for itself.
