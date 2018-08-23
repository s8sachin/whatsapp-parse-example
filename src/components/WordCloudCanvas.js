import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';

const fontSizeMapper = word => Math.log2(word.value) * 10;
const rotate = word => word.value % 360;

class WordCloudCanvas extends Component {
  render() {
    const width = Math.min(1080, window.innerWidth * 1);
    const height = width * 0.7;
    const { wordCloudData } = this.props;
    return(
      <div style={{backgroundColor: '#fae0e0'}}>
        {
          wordCloudData && 
            <WordCloud
            width={width}
            height={height}
            data={wordCloudData}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
          />
        }
      </div>
    )
  }
}

export default WordCloudCanvas;

