# harbor.js

##What does it do?
The main idea is to provide anchor positioning similar to QML.
It means that you can describe the position of an element relative to another.
Like the top of this element should be in the vertical center of another element.

## How do I use it.

It does not have any dependencies whatsoever it is written in pure javascript.
So simply include the harbor.js file in your project and start using it.


## Why was this written?

Positioning in CSS is cumbersome compared to most desktop frameworks,
this tries to make it a bit easier. And to praise the God Emperor of Mankind.

# Example
Harbor.js uses custom css properties to extend CSS.

````
#first, #third{
      width:100px;
      height: 100px;
      background-color: #b3d4fc;
      float: left;
      margin-left: 5px;
  }
  
  #second{
      width: 50px;
      height: 50px;
      background-color: gold;
      --anchor-verticalCenter: #first verticalCenter;
      --anchor-horizontalCenter: #first horizontalCenter;
  }

  #fourth{
      width: 20px;
      height: 20px;
      background-color: gold;
      --anchor-bottom: #third verticalCenter;
      --anchor-left: #third left;
  }
````
The general idea is to specify the anchor of the element, so which side of the   
DOM-Rectangle is meant and then a target DOM-Element by ID and where to dock it in the
other DOM Element.


````
         Top
     #############
     #     |     #
Left # ----|---- # Right
     #     |     #
     #############
         Bottom
````

You can also use vertical and horizontal Center, the lines in th middle.
