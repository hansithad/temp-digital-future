import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Typography, Button,CardMedia } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import heroImage from "./Managed Services_Hero.png";
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
                  <p>Outsource your digital projects{' '}</p>
                  <span>
                    <Typography component="span" variant="inherit" color="primary">
                      with predictable expenses and timelines.
                    </Typography>{' '}
                  </span>
                  </div>
                }
                subtitle="Let us build the team and deliver your digital related project. With specified scope of work our outsourced project management service will help you get the expected results on time and spec."
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
          <Image src={heroImage} />
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
