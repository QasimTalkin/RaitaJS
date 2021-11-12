# SASS

Build our own CSS library
## What is SASS?

- flexible CSS built in ruby
- functions loop variables and inheritance
- used to build cs

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
