import { Component } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: "../../global/global.css"
  
  

  
})
export class MyComponent {

  // Indicate that name should be a public property on the component
  

  render() {
    return (
      
	    
      <div class="footer">
	    <div class="container has-text-centered">
	<div class="nav-center">
	  <a class="nav-item" href="">
	    <span class="icon">
	      <i class="fa fa-twitter"></i>
	    </span>
	  </a>
	  <a class="nav-item" href="">
	    <span class="icon">
	      <i class="fa fa-facebook"></i>
	    </span>
	  </a>
	  <a class="nav-item" href="">
	    <span class="icon">
	      <i class="fa fa-instagram"></i>
	    </span>
	  </a>
	  <a class="nav-item" href=""> 
	    <span class="icon">
	      <i class="fa fa-linkedin"></i>
	    </span>
	  </a>
	</div>
	<p>by <a href="http://github.com/pochozaid">github.com/pochozaid</a></p>
      </div>  
      </div>
    );
    
  
}}
