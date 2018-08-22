import React from 'react';
import { parseDataAction } from '../actions';
import { connect } from 'react-redux';

class ImportFromFileBodyComponent extends React.Component {

  handleFileRead = (e) => {
    const content = this.fileReader.result.toString();
    this.props.parseDataAction(content);
  };

  handleFileChosen = (file) => {
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file);
  };

  render(){
    return (
      <div className='upload-expense'>
        <input type='file'
          id='file'
          className='input-file'
          accept='.txt'
          onChange={e => this.handleFileChosen(e.target.files[0])}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { parsed_data } = state.parsedData;
  return { parsed_data };
};

export default connect(mapStateToProps, { parseDataAction })(ImportFromFileBodyComponent);
