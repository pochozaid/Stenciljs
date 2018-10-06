import { Component, State } from '@stencil/core';

@Component({
  tag: 'app-posts',
  styleUrl: '../../global/global.css',
  shadow: true
})

export class AppPosts {

    @State() posts : any;

    componentWillLoad() {
      return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/')
      .then(response => response.json())
      .then(data => {
      this.posts = data;
      console.log(this.posts);
      });
      }
      
      trim(str: string) {
        if(str===null){
          return "Text vide"
        } else {
          let r = Math.min(141, str.length);
          let point = str.length <= 140 ? "" : "...";
          return str.substring(0, r) + point;
        }
    }

    render() {
      return (
        
      <div class="container ">
	
	  
	  
	  
	  <div class="column is-8 is-offset-1 is-centered">
	    
	    
        <div>
        {    this.posts.map((item) =>
            
                 
                  <div>
                    <div class="post-wrapper">
	                  <div class="header-content">
                    <hr/>
                    <h1 class="title is-4">{item.title}</h1>
                    <small><i>Posted by <a href="#">{item.autor}</a></i></small>
                    </div>
                    <div class="content">
		                <p>{this.trim(item.article)}</p>
		                <div class="content-footer">
		                  
                      <stencil-route-link url={`/details/${item._id}`}>
                  <nav class="has-text-right">
	                <a class="button">Détails</a>
	                </nav>
                  <hr/>
                    </stencil-route-link>
		                  
		                </div>
	                </div>
                    
                    
                    
                    
                  
                  
                  </div>
              </div>    	
        )} 
      
      </div></div></div>
    )
  }
}