import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import ImportFromFileBodyComponent from './ImportFromFileBodyComponent';
import { parseDataAction } from '../actions';
import Header from './Header';

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Jumbotron>
            <h1>Whatsapp parse</h1>
            <p>
              Select an exported whatsapp chat text file.
            </p>
            <ImportFromFileBodyComponent/>
          </Jumbotron>
          {/* <pre>{JSON.stringify(this.props.parsed_data)}</pre> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { parsed_data } = state.parsedData;
  return { parsed_data };
};

export default connect(mapStateToProps, { parseDataAction })(Home);