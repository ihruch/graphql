import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo'

import { addDirectionMutation, updateDirectionMutation } from './mutations';
import { directorQuery } from './../DirectorsTable/queries';
import { styles } from './styles';


const withGraphql = compose(
  graphql(addDirectionMutation, {
    props: ({ mutate }) => ({
      addDirector: director => mutate({
        variables: director,
        refetchQueries: [{
          query: directorQuery,
          variables: {name: ''}
        }]
      }),
    }),
  }),
  graphql(updateDirectionMutation, {
    props: ({ mutate }) => ({
      updateDirector: director => mutate({
        variables: director,
        refetchQueries: [{
          query: directorQuery,
          variables: {name: ''}
        }]
      }),
    }),
  }));

export default compose(withStyles(styles), withGraphql);    

