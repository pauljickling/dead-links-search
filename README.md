# Dead Links Search

A tool for identifying dead links on a web application written in Node (using Puppeteer) and Bash. Creates a csv file with a list of HTTP status codes, and URLs.

## Running Dead Links Search

To run the dead links search tool install puppeteer in your web app directory `npm i puppeteer`, and add the `get_links.js` and `status.sh` files to your project. 

You will need to change the `route` variable in the `get_links.js` file if you are not testing locally, or you are using a different port than `3000`.

Run `bash status.sh` and it will generate a file called `status.csv` that you can browse for dead links identified on your web project.
