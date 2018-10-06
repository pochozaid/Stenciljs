

import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-first-component',
})

export class MyComponent {

  // Indicate that name should be a public property on the component
  @Prop() name: string;
  componentWillLoad() {
    console.log('Component is about to be rendered');
  }
  componentDidLoad() {
    console.log('Component has been rendered');
  }
  componentWillUpdate() {
    console.log('Component will update and re-render');
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  componentDidUnload() {
    console.log('Component removed from the DOM');
  }

  render() {
    return (
      <p>
        Welcome to DOSI Article. {this.name}.
      </p>
    );
  }
}

