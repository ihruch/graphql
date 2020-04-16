import { gql } from 'apollo-boost'


export const addDirectionMutation = gql`
    mutation addDirector($name: String!, $age: Int!){
        addDirector(name: $name, age: $age){
            name
        }
    }
`

export const updateDirectionMutation = gql`
    mutation updateDirection($id: ID, $name: String!, $age: Int!){
        updateDirector(id: $id, name: $name, age: $age){
            name
        }
    }
`

