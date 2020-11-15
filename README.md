# p5js_sketches
Repo for experimenting with p5js

# Running sketchbook locally

The following command can be used to start a docker container with the 
sketchbook:

`sudo docker run -dit --name p5js-apache -p 8080:80 -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4`

The following commands can be executed to stop the container and remove it:

`sudo docker stop p5js-apache && sudo docker rm p5js-apache`

# Scripts

`mk-index.py` 

Used to generate the landing page with the sketch directory contents.

`./mk-video.sh ccapture/frames/square_rotate.tar`

Used to create a video file from ccapture png output.
