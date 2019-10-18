import React from 'react';
import ReactLoading from 'react-loading';
import 'bootstrap/dist/css/bootstrap.css';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  render() {
    return (
      <div className="loading">
        <ReactLoading type={'bars'} color={'#e5b13a'} />
      </div>
    );
  }
}
