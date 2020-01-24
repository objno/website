import React from 'react';
import Box from '../../components/Box';
import Grid from '../../components/Grid';
import Slides from './components/Slides';
import CallToActionElement from './components/CallToActionElement';
import Article from './components/Article';
import ContactBox from './components/ContactBox';
import ProjectsList from './components/ProjectsList';

const HomePage = ({
  slides,
  callToActionElements,
  showNewsArticles,
  showProjectAndContactBoxRow,
  ourProjects,
  contactBox,
  posts
}) => {
  console.log(posts);
  return (
    <Box>
      <Box mb="4">
        <Slides slides={slides} />
      </Box>
      <Grid width="100%" gridTemplateColumns={['', '', '1fr 1fr']} gridGap={30}>
        {callToActionElements &&
          callToActionElements.map(element => (
            <Box key={element.url}>
              <CallToActionElement {...element} />
            </Box>
          ))}
      </Grid>
      <Grid width="100%" mt="4" gridTemplateColumns={['', '', '1fr 1fr 1fr']} gridGap={30}>
        {showNewsArticles &&
          posts &&
          posts.map(post => post && <Article key={post.id} {...post} />)}
      </Grid>
      {showProjectAndContactBoxRow && (
        <Grid width="100%" mt="4" gridTemplateColumns={['', '', '1fr 1fr']} gridGap={30}>
          <ProjectsList ourProjects={ourProjects} />
          <ContactBox {...contactBox} />
        </Grid>
      )}
    </Box>
  );
        }
export default HomePage;
