import { Component } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: "../../global/global.css"
  

  
})
export class MyComponent {

  // Indicate that name should be a public property on the component
  

  render() {
    return (
      
	    
      
	
      <div class="column 3 is-narrow">
	    <div class="nav-header">
	      <h3 class="title is-3">DOSI ARTICLE.</h3>
	      <h4 class="subtitle is-4"><i>gestion des articles avec stencil.</i></h4>
				<h4 class="subtitle is-4"><i>
				
        
        <my-first-component name="Zaid Bennani"></my-first-component>
        
        
        
        <custom-clock></custom-clock>
					</i></h4>
          
	    </div>
	    <hr/>
        
	    
        <aside class="menu">
	      <p class="menu-label">
		    <a href="/">Page d'accueil</a>
	      </p>
	      <p class="menu-label">
		    <a href="/add">Créer un article</a>
	      </p>
				<hr/>
	    </aside>  
      </div>
    );
    
  
}}
