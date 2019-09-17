import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            className="ui button primary"
            to={`/streams/edit/${stream.id}`}
          >
            Edit
          </Link>
          <Link
            className="ui button negative"
            to={`/streams/delete/${stream.id}`}
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)} 
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link className="header" to={`/streams/${stream.id}`}>
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => {
  return {
    streams: Object.values(streams),
    currentUserId: auth.userId,
    isSignedIn: auth.isSignedIn,
  }
}

export default connect(
  mapStateToProps,
  { fetchStreams },
)(StreamList);
