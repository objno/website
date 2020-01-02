import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers';
import HomePage from '../modules/home-page/HomePage';

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost {
      edges {
        node {
          title
          slug {
            current
          }
          _rawExcerpt
          _rawSlug
          publishedAt
          mainImage {
            asset {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    homepage: sanityHomepage(_id: { regex: "/(drafts.|)homepage/" }) {
      slides {
        _id
        title
        description
        mainImage {
          asset {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      showNewsArticles
      showProjectAndContactBoxRow
      ourProjects {
        mainImage {
          asset {
            fixed {
              src
            }
          }
        }
        _key
      }
      contactBox {
        description
        title
        link
      }
      callToActionElements {
        url
        title
        description
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return <Layout>{/* <GraphQLErrorList errors={errors} /> */}</Layout>;
  }

  const site = (data || {}).site;
  const homepage = (data || {}).homepage;
  const posts = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Layout>
        <HomePage {...homepage} posts={posts} />
      </Layout>
    </>
  );
};

export default IndexPage;
