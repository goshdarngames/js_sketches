#!/bin/bash

sketch_dir=~/Documents/GoshDarnGames/processing/p5js_sketches/sketches
template_dir=~/Documents/GoshDarnGames/processing/p5js_sketches/template

display_usage ()
{
    printf "\n"
    printf "mk-sketch [name]\n"
    printf "\n"
}

if [ $# -eq 0 ]
then
    display_usage
    exit 1
fi

if [ ! -d $sketch_dir ]
then
    printf "$sketch_dir not found\n"
    exit 1
fi

if [ ! -d $template_dir ]
then
    printf "$template_dir not found\n"
    exit 1
fi

cp -vr $template_dir $sketch_dir/$(date -I)-$1
