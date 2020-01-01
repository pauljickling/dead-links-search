#!/bin/bash
set -eu
echo "Retrieving links"
node get_links.js > links
echo "Modifying links file"
sed -i.bak "s/\[//g" links
sed -i.bak "s/\]//g" links
sed -i.bak "s/\,//g" links
sed -i.bak "s/'//g" links
echo "Checking HTTP status codes of links (this may take a minute)"
echo "status_code, url" > status.csv
if [[ -e ./links ]] ; then
    while read -r i; do
        export URL="$i"
        echo "Getting status code for link $URL"
        STATUS_CODE=$(curl -sI "$URL" | awk 'FNR==1 { print $2 }')
        echo "$STATUS_CODE, $URL" >> status.csv
    done < links
fi
echo "CSV file generated."
echo "You can find broken links with the following:"
echo "grep '^404' status.csv"
