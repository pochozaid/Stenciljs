import { Component, Prop, State } from "@stencil/core";
import { MatchResults } from "@stencil/router";
@Component({
  tag: "app-details",
  shadow: true
})
export class AppDetail {
  @Prop() match: MatchResults;
  @State() articl: any;

  componentWillLoad() {
    let id = this.match.params.id;
    //console.log(this.match.params.id);
    return fetch(
      "https://polymer-101-workshop.cleverapps.io/api/blogpost/"+id
    )
      .then(response => response.json())
      .then(data => {
        this.articl = data;
        console.log(id);
      });
  }

  render() {
    return (
      <div class="container ">
	<div class="column is-8 is-offset-1 is-centered">
            <div>
            <div class="column is-8 is-offset-1 is-centered">
	          <div class="header-content">
	          <h1 class="title is-4">{this.articl.title}</h1>
            <small><i>Posted on <a href="#">{this.articl.creationDate}</a> by <a href="#">{this.articl.autor}</a></i></small>
	          </div>	      
                <hr />
                <div class="content">
	          <p>{this.articl.article}</p>
	   
	          <div class="content-footer">
		        <hr/>
            <stencil-route-link url="/">
		<p><a class="button menu-label">Back to Home</a></p>
             </stencil-route-link>
             <br/>
             <stencil-route-link url={'/edite/'+this.match.params.id}>
		        <p><a class="button menu-label">Edit</a></p>
            </stencil-route-link>
             <br/>
            <stencil-route-link url={"/delete/"+this.match.params.id}>
		        <p><a class="button menu-label" >Delete</a></p>
            </stencil-route-link>
	      </div>
	    </div>
             
              
            
            </div></div>
              </div></div>
    );
  }
}