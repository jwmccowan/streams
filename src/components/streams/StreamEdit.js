import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  render() {
    const {stream} = this.props;
    if (!stream) {
      return <div>Loading..</div>;
    }
    return (
      <div>
        {stream.title}
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return {stream: streams[ownProps.match.params.id]};
}

export default connect(
  mapStateToProps,
  { fetchStream },
)(StreamEdit);
