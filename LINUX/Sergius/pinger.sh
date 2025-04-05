#!/bin/bash
#
read -p "vvedite addres: " address
read -p "skolko zaprosov: " count
ping_result=$(ping -c "$count $address")

result=$(echo $ping_result | grep "rtt" | awk -F '/' '{print $5}') 

echo "srednee vremya = $result"
