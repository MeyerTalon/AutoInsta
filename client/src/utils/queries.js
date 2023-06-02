import { gql } from '@apollo/client';

export const GET_ME = gql`
   {
        me {
            _id
            username
            email
            instaUsername
            instaPassword
            posts {
                _id
                caption
                title
                imageFile
            }
        }
    }
`;
