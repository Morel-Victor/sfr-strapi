# SFR Project (part 1/2)

The SFR project is a clone of the website sfr.fr. My goal was to create a version as close as possible to the original site. The first step is to install Strapi for the back end. Then, the second step is to install the front end from this repository : 
https://github.com/Morel-Victor/sfr-front

**Local version**
![](https://i.ibb.co/pPzmtJF/sfr.png)
#### Install of Strapi:

Strapi is a powerful headless CMS for the backend with great features, such as the ability to inject the structure of a page into JSON. You can create new pages and move components around without writing a single line of code. 

Unlike other CMS platforms, Strapi imposes no limitations because it focuses solely on the backend and data management.

- ```git pull origin main``` to have the strapi and the content types
-  ```cd your-src-folder-path ```
-  ```npm install ``` to install dependensies
-  ```npm run strapi import -f export_20240911154813.tar.gz ```to have your datas
(doc for import data https://docs.strapi.io/dev-docs/data-management/import)
-  ```npm run develop ``` to lunch the strapi (use other version of npm and node if erros version used in project node 16)
- create an user in localhost://1337 and your back end is ready
