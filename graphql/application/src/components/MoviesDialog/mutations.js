import { gql } from 'apollo-boost'

export const removeMovieMutation = gql`
    mutation RemoveMovie($id: ID){
        removeMovie(id: $id){
            id
            name
        }
    }
`