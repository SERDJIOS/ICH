#!/bin/bash
USER="Alina"
echo "Current date: $(date)"
echo "Hello $USER!"
echo "The script is running from: $(pwd)"
bioset_count=$(ps -ef | grep bioset | grep -v grep | wc -l)
echo "Number of 'bioset' processes: $bioset_count"
file_permissions=$(ls -l /etc/passwd | awk '{print $1}')
echo "Permissions for /etc/passwd: $file_permissions"
