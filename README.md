- [SASS - Raita](#sass---raita)
  - [What is SASS?](#what-is-sass)
  - [create and compile to CSS](#create-and-compile-to-css)
  - [Varibles](#varibles)
  - [Partials](#partials)
  - [Nesting Rule](#nesting-rule)
  - [Math in Scss](#math-in-scss)
  - [maps in scss](#maps-in-scss)
  - [Loops](#loops)
  - [Conditional](#conditional)
  - [parent selectors](#parent-selectors)
  - [Mixins (group together bunch of css properties and values )](#mixins-group-together-bunch-of-css-properties-and-values-)
  - [Functions in SASS](#functions-in-sass)
- [NODE - Raita](#node---raita)
  - [1)](#1)
  - [2)](#2)
  - [3)](#3)
  - [4](#4)
  - [5)](#5)
  - [6-trems](#6-trems)
  - [creat server](#creat-server)
  - [html page to browsers](#html-page-to-browsers)
  - [NPM](#npm)
  - [MOGO DB](#mogo-db)
    - [mongoes](#mongoes)
  - [Tidy Routes](#tidy-routes)
  - [Tesign in jest](#tesign-in-jest)
- [Ruby on Rails Model Database Active Directory](#ruby-on-rails-model-database-active-directory)
  - [attr_acessor combinie attr_reader, attr_write](#attr_acessor-combinie-attr_reader-attr_write)
  - [Fat Model Skkinny controller](#fat-model-skkinny-controller)
  - [Where chain is](#where-chain-is)
    - [limit -> limit(4)](#limit---limit4)
    - [offset -> skips .offset(2)](#offset---skips-offset2)
  - [Count](#count)
  - [select attricbutes](#select-attricbutes)
  - [pluck attricbutes](#pluck-attricbutes)
  - [ids attricbutes](#ids-attricbutes)
  - [Validations samrter model](#validations-samrter-model)
  - [validates_presence_of :name](#validates_presence_of-name)
  - [validates_length_of :name, :minimum =>1](#validates_length_of-name-minimum-1)
  - [better way to vlaidate](#better-way-to-vlaidate)
  - [other vliadations](#other-vliadations)
  - [custome validation](#custome-validation)
  - [Skip validations](#skip-validations)
  - [Callbacks in Active record](#callbacks-in-active-record)
  - [conditonal call back](#conditonal-call-back)
  - [Skip callback](#skip-callback)
  - [Association](#association)
    - [1:1 has_one, blongs_to](#11-has_one-blongs_to)
    - [1:M many has_many, belongs_to](#1m-many-has_many-belongs_to)
    - [M:N many to many has_and_belongs_to_many](#mn-many-to-many-has_and_belongs_to_many)
  - [blongs_to presence validation](#blongs_to-presence-validation)
  - [desstroy depenede realted records](#desstroy-depenede-realted-records)
  - [Has ans mnay relations (join tbale)](#has-ans-mnay-relations-join-tbale)
  - [Rich joins](#rich-joins)
  - [Traverse Rich Joins](#traverse-rich-joins)
  - [join table query](#join-table-query)
- [React - Raita](#react---raita)
  - [React Compoent](#react-compoent)
  - [Styling inline](#styling-inline)
  - [Click event](#click-event)
    - [anonymous function](#anonymous-function)
  - [State](#state)
  - [reusable componet](#reusable-componet)
  - [passing function as props](#passing-function-as-props)
# SASS - Raita

Build our own CSS library
## What is SASS?


- functions loop variables and inheritance
- used to build cs
- flexible CSS built in ruby- 
## create and compile to CSS

- start up 
- google fonts 

## Varibles
- can create variable for reuse 
```scss
  //Declaring variables Theme Colors 
  $primary : #7d91ec;
  $secondly : #7deca8; 
  $error : #ee5151


  h1 {
    a {
      color:  $secondary;
    }
  }
```
- can also add other propertied like margin and padding 
- rem: looks at html 'root' font size
```scss
// spacing 
$base-padding: 0.74rem;
$base-margin: 0.75rem;

```

## Partials 

- split code into multiple files 
- file for vars, 
- file for button , color and so on 
```
var.scss // having all the vars 

we import it in main 

@import 'var';
```

## Nesting Rule
```js
//css 
.card .card-title {

}

//scss
.card {
  .card-title {
    
  }
}
```

## Math in Scss

- can use it for variation 
- can use * to multiply 
  `$somsixe*0.75, $somsize*2`
- division : use the math package 
- ***math package*** `@use 'sass:math'`
`border-radius: math.div($base-border-radius, 2);`
- debug sass files
  - we use 

```scss
@debug 'hello';
@debug math.div(4,3);
@debug math.floor(2.5);
```

## maps in scss
- collect  a lot of diff vars and and values as hash of key values 
```scss
  @debug map-get($colors, 'error' );
 @debug map-has-key($colors , 'ss' );
 @debug map-remove($colors, 'black');
@debug map-merge($colors, $colors);
```

## Loops 
- @each 
- running an each loop on collection of colors
```scsss
@each $key, $val in $colors {
    .text-#{$key}{
        color:$val
    }

    .bg-#{$key}{
        background-color: $val;
    }
}
}
```
- @for 

## Conditional
- @if 
- @else 
## parent selectors 
- `&:`

## Mixins (group together bunch of css properties and values )
- group of elevemts with same properties 
- we create mixin for these
- create `@mixin btn($bg-color: #e2e2e2) {  background-color:$bg-color}` decalred with default value 
- use `@include btn($some-value)` or `@include btn;` uses default

## Functions in SASS
- manipulation 
- similar to lighten, darken, mix..
```scss

```



# NODE - Raita

## 1)

- NODE compilations ->  js -> c++ -> assemble -> machaine
- chek version `node -v`
- `code .`
- `node fileNameWithoutExtension`

## 2)  

- function `let i = () => {}`
- the global object, same as window object in js
  - represents a global context in node file
  - `__dirname` absolute parth of current folder path
  - `__filename` path with file name

## 3)

- file and modules
- `require(./filename`
- cant usue the file unless its manylly exported
- `module.exports = 'qasim`
- to import multiple diffrent things
  - export as object
- Import destructuring

## 4

- built in module os
  - `const os = require('os'); console.log(os.platform());`
- file system and

## 5)

- Async code that fires a function upon completion (call aback)
- file system

  ```js
  const fs = require('fs');

  // read the file

  fs.readFile('./docs/file.md', (err, data) => {
      if (err) {
          console.log(err);
      }
      console.log(data);
  });
  ```

- right and wrong location
- buffer use `toString()`

- WRITE file
  - write and create a file
   `fs.writeFile('./docs/fila.md', 'data', ()=>{console.log('file was written')});`
- make directory
  - `fs.mkdir('./docs2', (err)=>{console.log(err.code)});`
-deleting files
  `fs.rmd('./docs2', (err)=>{console.log(err)})`
  -folder
  `fs.rmdir('./docs2', (err)=>{console.log(err)})`
  - exists
`console.log(fs.existsSync('./docs'))`
`

```js
if(fs.existsSync('./docs')) {
  fs.rmdir('./docs', ()=>{console.log('docs deleted')})
} else {
  fs.mkdir('./docs', ()=>{console.log('docs created')})
}
```


## 6-trems

- lettle bits of data at a time
  - REad strems
  - write Strems

```js
const readStream = fs.createReadStream('./docs/fila.md');
const writeStream = fs.createWriteStream('./docs/newFila.md');

readStream.on('data', (chunk)=>{
  console.log('new Stuff')
  console.log(chunk.toString())
  
  writeStream.write("\n Brah new chhunk\n \n \n \n\n\n\n\n\n\n\n")
  

  writeStream.write(chunk)
  
})

readStream.pipe(writeStream);

```

## creat server

- require http 
- takes in call back to perform when is hit
- taking in req and resp args 
- server .liten 
  - listens for req on port  

```js
const http = require('http');
const server = http.createServer((req, res)=> {

  console.log('Server HIT. \n')
  console.log(req.url, req.method)
  // Set header 
  //res.write('cool cool ');
  res.setHeader('Content-Type', 'text/html')
  res.write(`<h1> ${req.url} </h1> \n <h2>  ${res.hasHeader('content-type')} </h2>`);
  res.end();

});

server.listen(3001, ()=>{
  console.log('Server Starting')
});

```

## html page to browsers
```js
const http = require('http');
const fs = require('fs');
let fileData = ''
  const server = http.createServer((req, res)=> {
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/'){
      fs.readFile('./web/view/index.html', (err, data)=> {
        res.end(data)
       })
    } else 
    
    {
      res.end(`<h1> Bar Request: ${req.url}</h1>`)
    }
  });
  server.listen(3001, ()=>{
    console.log('Server Starting')
  });
```

- redirect to 
`res.setHeader('location of the web page', 'loc.html'); resp.end`


## NPM 
  - loadash
  - express 
- Express (easy to routes clean code )
- npm i
```js
const express = require('express');

const app = express();

app.listen(3001);

app.get('/', (req, resp) => {

resp.sendFile('./NodeJsWeb/view/index.html', {root: __dirname});

});

```
- Express 404 -> put at last will be defulted using `use`
`resp.status(404).sendFile('./NodeJsWeb/view/404.html', {root: __dirname});`
- Ejs 
 `<h2><a href="#"><%= title %> Media</a></h2>`

 - morgan middleware 
   - logging middle


## MOGO DB

- blog Collection -> blog document 
- user Collection -> user document (json key value pair, with uniq ID)
- can perform CURD
- get DB uri from online platform 
### mongoes
- conenct eassily with mongo DB
- ODM
-  can OBJECT DOUMENT MAPPING LIBB
-  MODEL TO represents data model 
-  model -> staic and instance method to perfom CURD
-  Create model scheema 
  - sample= -> sample.js

```js
// connect 

const DBURI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.bcuol.mongodb.net/sample_training?retryWrites=true&w=majority`
mongoose.connect(DBURI, () =>{

//start app only after the connection has been established
app.listen(3001);

const mongoose = require('mongoose');
//create 

const mongoose = require('mongoose');

const Schema = mongoose.Schema(); // object og mongoose schema

//Schema structure
const contactUsSchema = new Schema({
  name: {type:String, required},
  subject: {type:String, required},
  body: {type:String, required},
}, {timestamps:true})

   
//Model
const ContactUs = mongoose.model('ContactUs', contactUsSchema); 

// export the model to
module.exports = ContactUs;

//require and make post, find, findall, save
```
post 
delete -color.findanddeletebyid 

## Tidy Routes
- Express router 
  - find similar rote

- Controller 

## Tesign in jest 


# Ruby on Rails Model Database Active Directory

```ruby
rails g scaffold RoRModel game:string name:string score:string add:string dob:date
      invoke  active_record
      create    db/migrate/20220225214718_create_ro_r_models.rb
      create    app/models/ro_r_model.rb
      invoke    test_unit
      create      test/models/ro_r_model_test.rb
      create      test/fixtures/ro_r_models.yml
      invoke  resource_route
       route    resources :ro_r_models
      invoke  scaffold_controller
      create    app/controllers/ro_r_models_controller.rb
      invoke    erb
      create      app/views/ro_r_models
      create      app/views/ro_r_models/index.html.erb
      create      app/views/ro_r_models/edit.html.erb
      create      app/views/ro_r_models/show.html.erb
      create      app/views/ro_r_models/new.html.erb
      create      app/views/ro_r_models/_form.html.erb
      invoke    test_unit
      create      test/controllers/ro_r_models_controller_test.rb
      create      test/system/ro_r_models_test.rb
      invoke    helper
      create      app/helpers/ro_r_models_helper.rb
      invoke      test_unit
      invoke    jbuilder
      create      app/views/ro_r_models/index.json.jbuilder
      create      app/views/ro_r_models/show.json.jbuilder
      create      app/views/ro_r_models/_ro_r_model.json.jbuilder
      invoke  assets
      invoke    scss
      create      app/assets/stylesheets/ro_r_models.scss
      invoke  scss
      create    app/assets/stylesheets/scaffolds.scss

```

## attr_acessor combinie attr_reader, attr_write
- read and write values
- active record does this for us for us  to acess the values

## Fat Model Skkinny controller
 - DRY
 - methods defined in one place 

## Where chain is 
- pass condition using where 
- user where.not
  ### limit -> limit(4)
  ### offset -> skips .offset(2)

## Count 
- return the count of records

## select attricbutes
```rb
 User.select(:email).last
  User Load (0.3ms)  SELECT "users"."email" FROM "users" ORDER BY "users"."id" DESC LIMIT ?  [["LIMIT", 1]]
 => #<User id: nil, email: "red@red.com"> 
```

## pluck attricbutes 
```rb
User.pluck(:email)
   (0.3ms)  SELECT "users"."email" FROM "users"
 => ["red@red.com"] 
```

## ids attricbutes 
```rb
2.7.4 :048 > User.ids
   (0.3ms)  SELECT "users"."id" FROM "users"
 => [1, 2, 3, 4] 
2.7.4 :049 > 
```
 
## Validations samrter model
- validates_email, validates_format_of

## validates_presence_of :name 

* cant create or update a record unless there is a name present 

## validates_length_of :name, :minimum =>1
* cant create or update a record unless there is a name present 

## better way to vlaidate 

```ruby
validates :email, :presence => true,
                  :lenght => (minimum:4)

```
- can see errors by typing Recod.errors 
## other vliadations 
validates_numericality_of 
validates_inclusion
validates_uniqueness
validates_confirmation_of 
validates_associated
* :allow_nil :allow_blank
* :on (:save, :create, :update)
* :if, :unless,
  
## custome validation 

```rb
  def edits_are_allowed_today
    if Time.now.wday == 6  #{time now week day}
      errors.add(:base, 'yo i added this error')
    end
  end
```
## Skip validations 

- `save(validate: false)`
- `update_all`
  
## Callbacks in Active record 
- intervine in object life cycle
- run code customization befre` and after key internal process
- run code before and after CRUD
- ![Active recode callback](2022-02-27-08-35-45.png)
  - before_validate
  - after_validate
  - before_save
  - before_create
  - after_create
  - after_save
  - after_commit

- peform clean up
- send email notification
- make api calls
## conditonal call back 
- :if 
- :unless
  
## Skip callback
- update_column
- delete (not destroy.)

## Association
### 1:1 has_one, blongs_to
- Class has one teacher 
- Teacher belongs to class 
- Foreign key on teacher (class room id)

### 1:M many has_many, belongs_to
- 1 teacher many course 
- course belongs to teacher 
- f key on cours

### M:N many to many has_and_belongs_to_many
- many Students many courses 
- Join table (links two diff table)
- join table give you all students having that course and course have all students

## blongs_to presence validation
- must establishe relaitonship on belongs_to
- Adds validation for object to present

## desstroy depenede realted records
- user has many comments 
- on delete user all commets get delted 
- orphan recodrds need to be delted 
- create a callback or add assocaition to callback
- `has_many :comments, :depenedent=> delete_all`

## Has ans mnay relations (join tbale)
- no model for join table 
- join tbale just has forgirn keys
- USer and department
- naming join table for
- fisrtTbalemnaem _ secondTable name for
- alphabetical order 
- Project-Collaborator: `collaborator_projects`
- BlogPost-Category: `blog_post_categories`
- Department-User: `department_users`

## Rich joins

- add more info to join table 
- rich join created join styled table 
- has primary key 
## Traverse Rich Joins 

- cant get page.users
- `has_many :through`

## join table query 
- `instance.joins.where(conditions )`
- ![rich joins](2022-02-27-12-33-38.png)

# React - Raita

## React Compoent

* navar, block,footer..sidebar are all comopnent that we will create in JSX
* class is reserved keywword we use className in jsx 
* oput stuff use dynmic varibales in {}

## Styling inline 
* `style={{}}` -> dynamic value with object in it
* js properties key are camle cased in key value pair styles

## Click event
* event object passed bt default
### anonymous function
*  invoke on click fucntion by using arrow key 
*  `onClick = {()->handle(value)}`
*  will have to pass arg in even 
  
## State
* cahnge data over time
* whtch out for value chage in react
* make the value reactive
* useState hook
* `import {useState} from 'react'`

## reusable componet
* careate sample temaplte to use 
* add react props to it 
* destrucre pros ({revieww, titoel})

## passing function as props 
* handleClick uodate use state 