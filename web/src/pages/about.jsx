import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlockContent from '../components/BlockContent';
import Box from '../components/Box';

export const query = graphql`
  query AboutQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      title
      _rawContent
      _rawExcerpt
    }
  }
`;


const AboutPage = props => {
  const {
    data: { site, page }
  } = props;
  return (
    <Layout>
      <SEO title={page.title} description={site.description} keywords={site.keywords} />
      <Box width={[1, 1, 1, 3/5]}>
        <BlockContent blocks={page._rawExcerpt || []} fontSize="5" />
        <BlockContent blocks={page._rawContent || []} />
      </Box>
    </Layout>
  );
};

export default AboutPage;
