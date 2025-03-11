import { gql } from "@apollo/client";

export const GET_BOOKMARKS = gql`
  query GetBookmarks {
    bookmarks {
      id
      __typename
      title
      url
    }
  }
`;

export const ADD_BOOKMARK = gql`
  mutation CreateBookmark($title: String!, $url: String!) {
    createBookmark(input: { title: $title, url: $url }) {
      id
      title
      url
    }
  }
`;

export const DELETE_BOOKMARK = gql`
  mutation DeleteBookmark($id: ID!) {
    deleteBookmark(input: { id: $id }) {
      id
    }
  }
`;
