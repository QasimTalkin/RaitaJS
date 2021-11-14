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