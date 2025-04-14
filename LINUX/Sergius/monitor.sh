#!/bin/bash
#
threshold=40
#

disk_usege=$(df / | tail -n +2 | awk '{print $5}' | sed 's/%//' )

if ((disk_usege > threshold));
 then 
	echo "zanyato bolshe $threshold%"

	sudo du -ah / | sort -rh | head
     else
      echo "zanyato menshe $threshold%"
fi 
