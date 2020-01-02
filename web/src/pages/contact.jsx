import React from 'react';
import styled from 'styled-components';
import { space, border, layout, color } from 'styled-system';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlockContent from '../components/BlockContent';
import Box from '../components/Box';
import Button from '../components/Button';

export const query = graphql`
  query ContactQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const InputBox = styled.div.attrs({
  mt: 2
})`
  label {
    display: block;
    text-transform: uppercase;
  }
  ${space}
`;

const Input = styled.input.attrs({
  border: '2px solid',
  borderColor: 'primary',
  p: 2,
  color: 'white',
  width: [1]
})`
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-sizing: border-box;
  ${space}
  ${layout}
  ${border}
  ${color}
  &:focus {
    outline: none;
  }
`;

const Textarea = styled.textarea.attrs({
  border: '2px solid',
  borderColor: 'primary',
  p: 2,
  color: 'white',
  width: [1]
})`
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-sizing: border-box;
  ${space}
  ${layout}
  ${border}
  ${color}
  &:focus {
    outline: none;
  }
`;

const ContactPage = props => {
  const {
    data: { site }
  } = props;
  return (
    <Layout>
      <SEO title="Kontakt oss" description={site.description} keywords={site.keywords} />
      <Box width={[1, 1, 1, 3 / 5]}>
        <h1>Kontakt oss</h1>
        <Box>
          Har du lyst å få vite mer om Objekt Venture? Fyll ut skjemaet under, og vi tar kontakt med
          deg i løpet av kort tid.
        </Box>
        <form netlify>
          <InputBox>
            <label>Navn</label>
            <Input type="text" placeholder="Skriv inn navnet ditt" />
          </InputBox>
          <InputBox>
            <label>E-postadresse</label>
            <Input type="email" placeholder="Legg til e-post" />
          </InputBox>
          <InputBox>
            <label>Melding</label>
            <Textarea placeholder="Hei! Jeg ønsker mer informasjon om..." />
          </InputBox>
          <Button mt="3">Send</Button>
        </form>
      </Box>
    </Layout>
  );
};

export default ContactPage;
