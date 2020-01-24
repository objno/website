import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/Layout'
import BlockContent from '../../components/BlockContent';

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      members {
        _key
        person {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
        roles
      }
    }
  }
`;

const Project = ({data}) => {
  const {
    project: { title, _rawBody }
  } = data;
  return (
    <Layout>
      <h1>{title}</h1>
      <BlockContent blocks={_rawBody || []} />
    </Layout>
  );
};

export default Project
