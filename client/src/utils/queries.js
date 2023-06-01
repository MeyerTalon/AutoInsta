import { gql } from '@apollo/client';

export const GET_ME = gql`
   {
        me {
            _id
            username
            email
            posts {
                _id
                caption
                title
                image
            }
        }
    }
`;
