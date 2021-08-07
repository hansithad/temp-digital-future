import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Typography, Button,CardMedia } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
// import home from "./hero.mp4";
import home from "./Talent_Sourcing_Hero_.png";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  promoLogo: {
    maxWidth: 100,
  },
}));

const About = props => {
  const { data, className, handleBottombarOpen,...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 0}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <div>
                  <p>Hard-To-Find Talent{' '}</p>
                  <span>
                    <Typography component="span" variant="inherit" color="primary">
                      For Demanding Digital Projects.
                    </Typography>{' '}
                  </span>
                  </div>
                }
                subtitle="While on a mission to find outstanding contract talent you need more than a standard recruitment - our digital capabilities and boutique approach will help you optimize your sourcing process."
                ctaGroup={[
                  <Button
                    variant="contained"
                    color="primary"
                    size={isMd ? 'large' : 'medium'}
                    onClick={handleBottombarOpen}
                  >
                    ASK ABOUT SERVICES
                  </Button>,
                  <a href="#learnMoreSection" title="Consultancy">
                  <Button
                    variant="outlined"
                    color="primary"
                    size={isMd ? 'large' : 'medium'}
                  >
                    Learn More
                  </Button></a>
                ]}
                align={isMd ? 'left' : 'center'}
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image src={home} />

        </Grid>
      </Grid>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default About;
