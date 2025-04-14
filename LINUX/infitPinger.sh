#!/bin/bash
#
#
read -p "vvedite address:" address
fails_count=0
while true; do
   ping_result=$(ping -c 1 -W 1 "$address" 2>/dev/null | grep "time=" | awk -F'time=' '{print $2}' | awk '{print $1}')
 if [[ -z "$ping_result" ]]; then
  fail_count=$((fail_count + 1))
  echo "Popitka $fail_count: ne udalosj poluchit otvet ot $address"
  else
 fail_count=0

  if (( $(echo "$ping_result > 100" | bc -l) )); then
  echo "previshaet  $ping_result 100 ms"
  else "v predelah $ping_result"
  fi
 fi
if [[ "$fail_count" -ge 3 ]]; then

echo "slishkom mnogo"
 exit 1
 fi
sleep 1
done
