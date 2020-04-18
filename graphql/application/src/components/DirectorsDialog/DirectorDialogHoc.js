import { compose } from 'recompose'
import { graphql } from 'react-apollo'

import { removeDirectorMutation } from './mutations';
import  { directorQuery } from './../DirectorsTable/queries.js'

const withGraphgl = graphql(removeDirectorMutation,{
    props: ({ mutate }) => ({
        removeDirector: (id) => mutate({
            variables: id,
            refetchQueries: [{
                query: directorQuery,
                variables: {name: ''}
            }]
        }) 
    })
})


export default compose(withGraphgl);
