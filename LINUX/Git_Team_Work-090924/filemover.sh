#!/bin/bash

# Запрос исходной и целевой директории у пользователя

# Запрос расширения файлов, которые нужно скопировать

# Запросить новое расширение для файлов.

# Проверка существования исходной директории

# Проверка существования целевой директории

# Проверка, есть ли файлы с указанным расширением в исходной директории

# Копирование файлов с указанным расширением в целевую директорию
source_directory="/path/to/source"
target_directory="/path/to/target"
file_extension="txt"
new_file_extension="bak"

for file in "$source_directory"/*."$file_extension"; do
 if[ -f "$file"]; then
 base_name=$(basename "$file" . "$file_extension")
new_file="$target_directory/$base_name.$new_file_extension"
cp "$file" "$new_file"

echo "copy file: " $file -> $new_file

fi 
done




