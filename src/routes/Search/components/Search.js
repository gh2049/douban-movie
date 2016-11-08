import React, {Component} from 'react';

class Search extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  
  render() {
    return (
      <div>
        {this.props.params.id}
      </div>
    );
  }
}

export default Search;