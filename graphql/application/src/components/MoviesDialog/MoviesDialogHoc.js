import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { removeMovieMutation } from './mutations';
import { moviesQuery } from './../MoviesTable/queries';

const withGraphqlAdd = graphql(removeMovieMutation, {
    props: ({ mutate }) => ({
        removeMovie: movie => mutate({
          variables: movie,
          refetchQueries: [{
            query: moviesQuery,
            variables: {name: ''}
          }]
        }),
    }),
});

export default compose(withGraphqlAdd);
 
   


   



