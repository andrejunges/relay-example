import Relay from 'react-relay';

export default class AppRoute extends Relay.Route {
  static routeName = 'Home';
  static queries = {
    group: (Component) => Relay.QL`
      query GroupQuery {
        group { ${Component.getFragment('group')} },
      }
    `,
  };
}
