import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  renderActions() {
    const { deleteStream, match } = this.props;
    const { id } = match.params;
    return (
      <>
      <button
        className="ui button negative"
        onClick={() => deleteStream(id)}
      >
        Delete
      </button>
      <Link
        className="ui button"
        to="/"
      >
        Cancel
      </Link>
    </>
    );
  }

  renderContent() {
    const { stream } = this.props;
    if (!stream) {
      return 'Are you sure you want to delete this stream?';
    } else {
      return `Are you sure you want to delete ${stream.title}`
    }
  }
  
  render() {
    return (
      <Modal 
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return {stream: streams[ownProps.match.params.id]};
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream },
)(StreamDelete);
