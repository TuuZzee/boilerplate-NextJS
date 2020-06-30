import React, { useEffect } from 'react';
import { withFirestore, useFirebaseConnect } from 'react-redux-firebase';

import Layout from 'src/components/common/Layout';

// pages/about.js
const About = ({ firestore }) => {
  useFirebaseConnect(['currencies']);

  useEffect(() => {
    if (firestore) {
      console.debug('History - useEffect load data...');

      firestore
        .collection('programs')
        .get()
        .then(doc => {
          if (doc.exists) {
            console.debug('History - Document data:', doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.debug('History - No such document!');
          }
        })
        .catch(error => {
          console.error('History - Error getting document:', error);
        });
    }
    return () => {};
  }, [firestore]);

  return (
    <Layout>
      <h3 style={{ textAlign: 'center' }}>Load Firebase/Firestore data</h3>
    </Layout>
  );
};

export default withFirestore(About);
