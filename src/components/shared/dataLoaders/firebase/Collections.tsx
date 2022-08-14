import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, WithFirebaseProps } from 'react-redux-firebase';

// import urls from 'src/utils/urls';

// For the Example:
// const { landing  } = urls.inner;
// const includeBannersPaths = [landing.path];
type NameResolver = (
  ...args: any[]
) => ComponentType<Omit<any, string | number | symbol> & WithFirebaseProps<unknown>>;

interface CollectionsProps extends NameResolver {
  route?: string;
  children?: JSX.Element;
}

const Collections = () => {
  return <div className="data-loaders-firebase-collections" />;
};

const mapStateToProps = () => ({});

// <JSX.Element, any, CollectionsProps></JSX.Element>
const enhance: any = compose<CollectionsProps>(
  // For the Example:
  firebaseConnect(({ route }: any) => {
    const collections = [];
    // Example:
    // if (route && includeBannersPaths.includes(route)) {
    //   collections.push('toDos');
    // }

    return collections;
  }),
  connect(mapStateToProps),
);

export default enhance(Collections);
