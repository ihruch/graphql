import { gql } from 'apollo-boost'

export const removeDirectorMutation = gql`
    mutation RemoveDirectorMutation($id: ID){
        removeDirector(id: $id){
            id
            name
        }
    }
`