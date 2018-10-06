import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/add' component='app-add' />
              <stencil-route url='/edite/:id' component='app-edite' />
              <stencil-route url='/delete/:id' component='app-delete' />
              <stencil-route url='/posts/' component='app-posts' />
              <stencil-route url='/details/:id' component='app-details' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
