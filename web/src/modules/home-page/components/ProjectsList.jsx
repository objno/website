import React from 'react';
import Grid from '../../../components/Grid';
// import Image from 'gatsby-image';
import Box from '../../../components/Box';

const ProjectsList = ({ ourProjects }) => {
  return (
    <Box>
      <h2>Våre prosjekter</h2>
      <Grid>
        {ourProjects &&
          ourProjects.map(
            (
              { mainImage } // console.log(mainImage)
            ) =>
              mainImage &&
              mainImage.asset && (
                // mainImage.asset.localFile && (
                // mainImage.asset.localFile.childImageSharp &&
                // mainImage.asset.localFile.childImageSharp.fluid && (
                <img src={mainImage.asset.fixed.src} />
              )
          )}
      </Grid>
    </Box>
  );
};

export default ProjectsList;
