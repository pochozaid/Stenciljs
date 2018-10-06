
import { Component, State,Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
    tag: 'app-edite',
    shadow : true
  })
  export class EditArticle {
    
    @Prop() match : MatchResults;
    @State() myArticle : any;
     title: string;
     article: string;
     autor: string;
     _id : any;

     componentWillLoad() {
        let idd = this.match.params.id;
        fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+idd)
      .then(response =>response.json()).
        then(data=>{
          this.myArticle=data;
          console.log("Done");
          this.title = this.myArticle.title;
          this.article = this.myArticle.article;
          this.autor = this.myArticle.autor;
          this._id = this.myArticle._id;
        })
    }
    editArticle(e) {
      e.preventDefault();
      console.log("!");
      const title = this.title;
      const article = this.article;
      const autor = this.autor;
      const _id = this._id;
      const postedited = {
        _id,
        title,
        article,
        autor
      };
      fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postedited)
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
	          
	              <div class="column 3 is-narrow">
	                 <hr/>
                
	  
	  
	  <div class="column is-8 is-offset-1 is-centered">
	   
	    <div class="header-content">
	      
	      <div class="has-padding"> 
		
		<div class="is-pulled-left">
		  <h1 class="title is-4">
		    Editer un article
		  </h1>
		</div></div>
    <small><i>Ce formulaire sert a modifier un article</i></small></div>
	    </div>
	    <div class="content">
                
               
                <form>
                <div class="field">
		            <label class="label">Titre</label>
		            <p class="control">
		            <input class="input" type="text"
                        value={this.title}
                        onChange={(e:any) => (this.title = e.target.value)}/>
		            </p>
		            </div>
                  
                <div class="field">
		            <label class="label">Auteur</label>
		            <p class="control">
		            <input class="input" type="text"
                        value={this.autor}                        
                        onChange={(e:any) => (this.autor = e.target.value)}/>
		            </p>
		            </div>
                    
                    <div class="field">
		                <label class="label">L'article</label>
		                <p class="control">
		                 <textarea class="textarea" value={this.article}
                        onChange={(e:any) => (this.article = e.target.value)}></textarea>
		                </p>
		              </div>
                    <p>
                    <stencil-route-link url="/">
                      <button
                        onClick={this.editArticle.bind(this)}
                      >
                      
                   
                        Edit
                      </button>
                      </stencil-route-link>
                    </p>
                    <p>
                      <button >Cancel</button>
                    </p>
                 
                </form>
             
                <div class="content-footer">
		<hr/>
    <stencil-route-link url="/">
		<p><a class="button menu-label" href="index.html">Back to Home</a></p>
    </stencil-route-link>
	      </div>
              
      </div></div></div></div></div>
      );
    }
  }