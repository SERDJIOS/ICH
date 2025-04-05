
#!/bin/bash

backup_dirs=("/opt" "/ec2-user" "/Sergius")

backup_location="/tmp/backup"

mkdir -p "$backup_location"

for dir in "${backup_dirs[@]}";
    do
     backup_name="$backup_location/$(basename "$dir")_backup_$(date +'%Y%m%d').tar.bz"
     echo "backup_name" 
     tar -cjvf "$backup_name" "$dir"
  done
find "$backup_location" -type f -name "*tar.bz" - mtime +21 .exec rm -rf {}Ã\

