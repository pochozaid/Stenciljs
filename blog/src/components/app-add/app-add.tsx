import { Component } from "@stencil/core";

@Component({
  tag: "app-add",
  styleUrl: "../../global/global.css",
  shadow: true
})
export class AppAdd {
  title: string;
  article: string;
  author: string;

  postArticle(e) {
    e.preventDefault();
    console.log("!");
    const title = this.title;
    const article = this.article;
    const autor = this.author;
    const payload = {
      title,
      article,
      autor
    };
    fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  }

  render() {
    return (
      <div>
        <div class="main-content">
      <div class="container ">
	<div class="columns is-multiline is-mobile is-centered">
	  <div class="column 3 is-narrow">
	    
	    
	    
	    
	    <hr/>
	    
	  </div>
	  
	  
	  <div class="column is-8 is-offset-1 is-centered">
	   
	    <div class="header-content">
	      
	      <div class="has-padding"> 
		
		<div class="is-pulled-left">
		  <h1 class="title is-4">
		    Créer un article
		  </h1>
		</div>
		
	      </div>
	      
	      <small><i>Ce formulaire sert a créer un article</i></small>
	    </div>
	    <div class="content">
	      
	      <form>
		<div class="field">
		  <label class="label">Titre</label>
		  <p class="control">
		    <input class="input" type="text" placeholder="Titre" onChange={(e:any) => (this.title = e.target.value)}/>
		  </p>
		</div>
		<div class="field">
		  <label class="label">Auteur</label>
		  <p class="control">
		    <input class="input" type="email" placeholder="Auteur" value="" onChange={(e:any) => (this.author = e.target.value)}/>
		  </p>
		</div>
		<div class="field">
		  <label class="label">L'article</label>
		  <p class="control">
		    <textarea class="textarea" placeholder="L'article" onChange={(e:any) => (this.article = e.target.value)}></textarea>
		  </p>
		</div>
		<div class="field is-grouped">
		  <p class="control">
      <stencil-route-link url="/">
		    <button class="button menu-label" onClick={this.postArticle.bind(this)}>Valider</button>
        </stencil-route-link>
		  </p>
		  
		</div>
	      </form>	      
	      <div class="content-footer">
		<hr/>
    <stencil-route-link url="/">
		<p><a class="button menu-label" href="index.html">Back to Home</a></p>
    </stencil-route-link>
	      </div>
	    </div>
	    
	  </div>
	   
	</div>
      </div>
    </div>       
      </div>
    );
  }
}