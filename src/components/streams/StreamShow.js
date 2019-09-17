import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';
import flv from 'flv.js';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { fetchStream, match } = this.props;
    const { id } = match.params;
    fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    const { stream } = this.props;
    if (!stream) {
      return <div>Loading...</div>
    }

    const { title, description } = stream;

    return (
      <div>
        <video
          style={{ width: '100%' }}
          controls
          ref={this.videoRef}
        />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return { stream: streams[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchStream },
)(StreamShow);
