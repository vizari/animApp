import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const ANIMELIST = gql`
{
    Page {
      media {
        title {
          english
          native
        }
        bannerImage
        id
        episodes
        source
        status
      }
    }
  }`;

  export const respData = useQuery(ANIMELIST);

   
 