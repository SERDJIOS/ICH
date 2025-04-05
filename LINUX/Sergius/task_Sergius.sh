#!/bin/bash

cd /opt/090924-wdm/Sergius || exit 1

current_date=$(date +"%d.%m.%y")

for i in {1..10}
do

 	echo "This file was created on $current_date" > "${i}_${current_date}.txt"
done


