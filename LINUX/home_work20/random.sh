#!/bin/bash

DIR1="/opt/090924-wdm/Sergius/home_work/dir1"
DIR2="/opt/090924-wdm/Sergius/home_work/dir2"

mkdir -p "$DIR1" "$DIR2"
 for i in {1..100}; do
  FILE_NAME=$RANDOM
  touch "$DIR1/$FILE_NAME"
  echo "Create file: $DIR1/$FILE_NAME"
  done
  echo "File gibt"
