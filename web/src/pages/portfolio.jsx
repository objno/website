import React from 'react';
import styled from 'styled-components';
import { mapEdgesToNodes } from '../lib/helpers';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlockContent from '../components/BlockContent';
import Box from '../components/Box';
import Grid from '../components/Grid';

export const query = graphql`
  query PortfolioQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    rawProjects: allSanityProject {
      edges {
        node {
          mainImage {
            asset {
              fixed {
                src
              }
            }
          }
          _key
          _rawExcerpt
        }
      }
    }
  }
`;

const PortfolioPage = props => {
  const {
    data: { site, rawProjects }
  } = props;

  const projects = mapEdgesToNodes(rawProjects);

  return (
    <Layout>
      <SEO title="Portefølje" description={site.description} keywords={site.keywords} />
      <Grid>
        {projects &&
          projects.map(
            project =>
              project && (
                <Box textAlign="center">
                  {project.mainImage && project.mainImage.asset && (
                    <img src={project.mainImage.asset.fixed.src} />
                  )}
                  <BlockContent textAlign="left" blocks={project._rawExcerpt || []} />
                </Box>
              )
          )}
      </Grid>
    </Layout>
  );
};

export default PortfolioPage;
