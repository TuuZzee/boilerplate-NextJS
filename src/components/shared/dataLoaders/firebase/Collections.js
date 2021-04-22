import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { firebaseConnect } from 'react-redux-firebase';

// import urls from 'src/utils/urls';

// For the Example:
// const { landing  } = urls.inner;
// const includeBannersPaths = [landing.path];

const Collections = () => {
  return <div className="data-loaders-firebase-collections" />;
};

const mapStateToProps = () => ({});

const enhance = compose(
  // For the Example:
  // firebaseConnect(({ route }) => {
  // firebaseConnect(() => {
  //   const collections = [];

  //   // Example:
  //   // if (route && includeBannersPaths.includes(route)) {
  //   //   collections.push('toDos');
  //   // }

  //   return collections;
  // }),
  connect(mapStateToProps),
);

export default enhance(Collections);
