import { gql } from 'apollo-boost';

export const directorQuery = gql`
    query DirectorQuery($name: String) {
        directors(name: $name){
            id
            name  
            age
            movies{
                name
                id
            }
        }
    }
`