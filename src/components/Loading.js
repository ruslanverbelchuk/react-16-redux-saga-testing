import React from 'react';
import {connect} from 'react-redux';
import img from '../assets/loading_spinner.gif';

let Loading = ({isFetching}) =>
  isFetching ? (
    <div style={{textAlign: 'center'}}>
      <img src={img} alt="isFetching" />
      <h1>LOADING</h1>
    </div>
  ) : null;

const mapStateToProps = state => ({
  isFetching: state.isFetching,
});

Loading = connect(
  mapStateToProps,
  null,
)(Loading);

export default Loading;
