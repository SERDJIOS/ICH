#!/bin/bash

DIR1="/opt/090924-wdm/Sergius/home_work/dir1"
DIR2="/opt/090924-wdm/Sergius/home_work/dir2"

mkdir -p "$DIR1" "$DIR2"
 for FILE in "$DIR1"/*; do
  FILE_NAME=$(basename "$FILE")
      if (( FILE_NAME % 2 == 0 )); then
    mv "$FILE" "$DIR2/"
     echo "fligen file: $FILE -> $DIR2/"
     fi
   done

  echo "FERTIG"
