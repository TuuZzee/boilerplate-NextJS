import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

// For the Example:
// import urls from 'src/utils/urls';
// const { landing } = urls.inner;

const Collections = () => {
  return <div className="data-loaders-firestore-collections" />;
};

const mapStateToProps = () => ({});

const enhance = compose(
  // firestoreConnect(({ userId, route }) => {
  firestoreConnect(() => {
    const collections = [];

    // Example:
    // if (userId && route && includeActivePrograms.includes(route)) {
    //   // User todos
    //   collections.push({
    //     collection: 'todos',
    //     doc: userId,
    //     storeAs: 'todos',
    //   });
    // }

    return collections;
  }),
  connect(mapStateToProps),
);

export default enhance(Collections);
