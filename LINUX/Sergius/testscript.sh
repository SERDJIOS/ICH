#!/bin/bash
WORKDIR="/opt/090924-wdm/Sergius"
ARHPATH="/tmp/Arh"
DATE=$(date +'%d-%m-$%Y')

for i in {1..5}
  do 
      mkdir -p "$WORKDIR/Dir$i"
   for j in {1..5}
    do
	date +'%T' > "$WORKDIR/Dir$i/File-$j.txt"
	sleep 5
      done
    ls -l "$WORKDIR/Dir$i"
done 

mkdir -p $ARHPATH

tar -czvf $ARHPATH/Arh-$DATE.tar.gz $WORKDIR/Dir* >> $WORKDIR/ArhList.txt
