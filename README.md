# SimpleSSG

## Objective
To build a functional simple SSG.

## Background
I used the tutorials linked at the bottom of the page, for not only guidance but also insperiation.  When I create my own thing, or I am challenged with something I like to see what are they doing, and what would I do if I had to use it.  In this case, I wanted a way to create a new .md file.  Both tutorials were good, at creating the html file, but forgot about the previous step of creation (unless of course you already have it created).  

## Running 
1) Fork or download this repo
2) If you have any existing .md files place them into the 'content' folder.
2a) If you would like to create your own run the command 'npm run write'.  This will ask you for the title.
3) Run the command 'npm run build'
4) All files will be outputted to the 'public' folder which can then be uploaded to any service.

### Required packages:
1) Gray-Matter
2) Marked
3) Prompt

### CLI commands
This simple SSG is designed to make it easy to create and deploy .md files into html files

* write: this will create a new .md file.  You will be prompted to enter a title for the page
* build: running this will build the pages from the markdown files, as well as a main page with navigational links

### Tutorial links
* https://dev.to/kartiknair/how-to-build-a-simple-static-site-generator-using-node-js-4l01
* https://www.youtube.com/watch?v=pY0vWYLDDco&t=1215s&ab_channel=BenAwad
