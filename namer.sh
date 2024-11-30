#!/bin/bash

# Set the starting number
start_num=1

# Loop through the images and rename them
for file in *.jpg; do
    mv "$file" "image$start_num.jpg"
    ((start_num++))
done
