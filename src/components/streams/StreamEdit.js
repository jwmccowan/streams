import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render() {
    const {stream} = this.props;

    if (!stream) {
      return <div>Loading..</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm 
          onSubmit={this.onSubmit}
          initialValues={_.pick(stream, 'title', 'description')}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return {stream: streams[ownProps.match.params.id]};
}

export default connect(
  mapStateToProps,
  { fetchStream, editStream },
)(StreamEdit);
