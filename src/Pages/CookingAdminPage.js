import React, { Component } from 'react';
import './Stylesheets/CookingAdminPage.css';

import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

import autoBind from 'react-autobind';

class CookingAdminPage extends Component {

  constructor() {
    super();
    autoBind(this);
  }

  state = {
    PostType: "Blog",
    BlogParametersVisibility: "none",
    RecipeParametersVisibility: "none"
  }

  ChangePostType(){
    var PostType = document.querySelector('input[name="PostType"]:checked').value;
    if(PostType == 'Blog'){
      this.setState({BlogParametersVisibility: 'block', RecipeParametersVisibility: 'none'});
    }
    if(PostType == 'Recipe'){
      this.setState({BlogParametersVisibility: 'none', RecipeParametersVisibility: 'block'});
    }
    this.setState({PostType: PostType});
  }

  render() {
    return (
      <div id="cooking-admin-body">
        <label>Post Type:</label>
        <form id="PostTypeInput" onChange={this.ChangePostType}>
          <input type="radio" name="PostType" value="Blog"/> Blog <br/>
          <input type="radio" name="PostType" value="Recipe"/> Recipe
        </form>
        <br/>
        <div id="BlogParameters" style={{display: this.state.BlogParametersVisibility}}>
          <label>Title: </label>
          <input type="text"/>
          <br/>
          <label>Hero Image: </label>
          <input type="file"/>
          <br/>
          <label>Body: </label>
          <textarea></textarea>
        </div>
        <div id="RecipeParameters" style={{display: this.state.RecipeParametersVisibility}}>
          RecipeParameters
        </div>
      </div>
    );
  }
}

export default CookingAdminPage;
