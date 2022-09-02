import React from 'react';
import { Component } from 'react';

class Movies extends Component {
  state = {
    isSubscribed: false,
  };
  clickHandler = () => {
    this.setState({
      isSubscribed: !this.state.isSubscribed,
    });
  };
  render() {
    return (
      <div>
        <h2 style={{ color: ' #61dafb' }}>Movies | Testing Class Component</h2>
        <p data-testid="heading">Welcome to movie portal</p>
        <p data-testid="movie-link">
          <a href={this.props.info?.url}>click here</a> to know more about{' '}
          {this.props.info?.name}
        </p>
        <p>
          {this.state.isSubscribed
            ? 'You are Subscribed. Thank you.'
            : 'Not Subscribed. Please Subscribe.'}
        </p>
        <button data-testid="subscribe-btn" onClick={this.clickHandler}>
          {this.state.isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </button>
      </div>
    );
  }
}

export default Movies;
