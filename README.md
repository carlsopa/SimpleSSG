# SimpleSSG

## Objective
To build a functional simple SSG.

## Background
I used the tutorials linked at the bottom of the page, for not only guidance but also insperiation.  When I create my own thing, or I am challenged with something I like to see what are they doing, and what would I do if I had to use it.  In this case, I wanted a way to create a new .md file.  Both tutorials were good, at creating the html file, but forgot about the previous step of creation (unless of course you already have it created).  

## Running 
1) Fork or download this repo:
This will create three directories: content, public, src.
   * content: this is where all of the markdown files are stored
   * public: this is the output directory.  This will store all of the html files, including the index.
   * src: this directory stores all of the files to make the product run.

2) Create a new markdown:
To create a new markdown file run the following:
```npm run write```

This will ask you to name it and then will create a new blank markdown file.  There will be a heading that will include the authors name, the title and the date of creation.

3) Generate static page:
To turn your markdown files into a static page run the following:
```npm run build```

This will take any files in your content directory and generate an html page, that will be located in the public folder.  This will also create a blank index.html file that will contain links to your generated pages.
## CLI commands
This simple SSG is designed to make it easy to create and deploy .md files into html files

* ```npm run write```: this will create a new .md file.  You will be prompted to enter a title for the page
* ```npm run build```: running this will build the pages from the markdown files, as well as a main page with navigational links
* ```npm run serve```: starts a localhost server to serve up your pages
* ```npm run observe```: starts a service that will look for any changes within the content directory, and will update accordingly.
* ```npm run start```: starts both the server and observer for constant updates
## Required packages:
1) Gray-Matter
2) Marked
3) Prompt
4) fs-extra
5) chokidar
6) nodemon
7) concurrently



### Tutorial links
* https://dev.to/kartiknair/how-to-build-a-simple-static-site-generator-using-node-js-4l01
* https://www.youtube.com/watch?v=pY0vWYLDDco&t=1215s&ab_channel=BenAwad
