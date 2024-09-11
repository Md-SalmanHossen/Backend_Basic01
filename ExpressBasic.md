
## what is express.js?🤔
   - Express.js is a popular framework for building web applications using JavaScript. It simplifies the process of creating web servers by providing a set of tools and features.🔥
   - package , routing , server management🔥

## routing in express.js?🤔
   - after slash every address is route and its coding/process is called routing.✅
   - In Express.js, a route is a pattern that matches incoming HTTP requests to specific functions 🔥

## middle ware in express.js :
   - this is a function like a it after request and before arrive it in route which process is called middleware.👍
   - Middleware functions are functions that have access to the request object (req), the response object (res), ✅
     and the next function in the application’s request-response cycle.
   - it have 3 parameter : request,response and next.🔥

      - request is act as information which send into server.in one word users data which send to server.✅
      - from server which answer/data send is response. ✅which send the user
      - next() push for next route👌

## dynamic routing 🔥: 
   - sometime routes small part again and again is same and small part of route does change for this type we need dynamic route.
   - to make any dynamic route you can use : at the place where you want to make it dynamic and to access there value use req.params

## template engine🔥 : 
   - html does   not have powers to calculate.✅
   - ejs is html with power that can do something. for example calculate.👌

#### ejs setup :
   - ejs install : 
      ```npm i ejs 
      ```
   - configure ejs :
      ```app.set('view engine','ejs')```
   - one views folder have to create
   -then create there ejs files
   -use render in the place of send
   - to rendering in views folders create any file and in render function does not mentioned .ejs
   - template engine is a style of markup which convert code then give it to me in html code.
   - there are some type of template engine : pug,handlebars, ejs, jade.but ejs looks like html code.🔥
   - in template engine there will be two thing views and another is data
   - to data convert use <%= data_name %>

## Static file : 
   - to do images,stylesheet,frontend js setup is static file.
   - to setup static file :
      1. create a folder called public 
      2. create 3 folder inside it images, stylesheets,js
      3. configure the express static in script.js file
      4. understand the path 

