import { gql } from 'apollo-boost';

export const directorQuery = gql`
    query DirectorQuery {
        directors{
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