#!/bin/bash
#With thanks to https://github.com/pbeshai/p5js-ccapture

final_output_dir=~/Documents/GoshDarnGames/processing/p5js_sketches/ccapture/videos
frames_tmp_dir="/tmp/ccapture_frames" 

display_usage ()
{
    printf "\n"
    printf "mk-video [tar]\n"
    printf "\n"
}

frames_tar=$(readlink -m $1)

if [ ! -e $frames_tar ]
then
    display_usage
    exit 1
fi

frames_file="$(basename -- $frames_tar .tar)" 
frames_dir="$(dirname -- $frames_tar)"

printf "Using frames from $frames_file\n"
printf "Directory $frames_dir\n"

if [ -d $frames_tmp_dir ]
then
    printf "Cleaning $frames_tmp_dir\n"
    rm -rf $frames_tmp_dir
fi

printf "Creating $frames_tmp_dir\n"
mkdir $frames_tmp_dir

printf "Unpacking tar\n"
tar -xf $frames_tar -C $frames_tmp_dir

cd $frames_tmp_dir

outputName="$frames_file.mp4"
dimensions="640x640"
fps=60
frameName="%07d.png"
crf=17 # CRF should be between 17 and 28. Lower is higher quality

ffmpeg -r $fps -f image2 -s $dimensions -i $frameName -vcodec libx264 -crf $crf  -pix_fmt yuv420p $outputName

rm *.png

final_file=$final_output_dir/$(date +%s).$outputName

cp $outputName $final_file

printf "Video complete $final_file\n"
