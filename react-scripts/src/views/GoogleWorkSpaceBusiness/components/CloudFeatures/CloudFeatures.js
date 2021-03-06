import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import CachedIcon from '@material-ui/icons/Cached';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
// import { HeadsetMicIcon} from '@material-ui/icons/HeadsetMicIcon';

import {
  colors,
  useMediaQuery,
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
  Avatar,
  Button,
  NoSsr,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';

import bgShapeImage  from './bg-shapes.svg';
import bgIconImage  from './bgicon.svg';
import checkYellowImage  from '../../../../assets/images/check-icon-yellow.svg';

const useStyles = makeStyles(theme => ({
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
  },
  cta: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
    },
  },
  featureItems: {
    width: '100%',
    height: '100%',
    background: `url(${bgShapeImage}) no-repeat top center`,
    backgroundSize: 'contain',

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  gridItemPositioned: {
    marginTop: '25%',
  },
  iconCover: {
    width: 60,
    height: 60,
    background: `url(${bgIconImage}) no-repeat center center`,
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.indigo[500],
    fontSize: 35,
    [theme.breakpoints.up('md')]: {
      width: 80,
      height: 80,
      fontSize: 50,
    },
  },
  propsGrid: {
    height: '100%',
  },
}));

const renderIcon = function(iconName){
  switch (iconName) {
    case 'cache':
      return (
        <CachedIcon style={{fontSize:70}}/>
      )
    break;
    case 'headset':
      return (
        <HeadsetMicIcon style={{fontSize:70}}/>
      )
      break;
    case 'user':
      return (
        <VerifiedUserIcon style={{fontSize:70}}/>
      )
      break;
    default:
      return (
        <></>
      )
    break;

  }

}

const CloudFeatures = props => {
  const { data, className,handleBottombarOpen, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { items, properties } = data;

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <div className={classes.featureItems}>
            <Grid container spacing={isMd ? 4 : 1}>
              <Grid item xs={6}>
                <Grid container spacing={isMd ? 4 : 1} direction="column">
                  {items.slice(0, 2).map((item, index) => (
                    <Grid item xs={12} key={index} data-aos="fade-up">
                      <CardBase withShadow liftUp>
                        <DescriptionListIcon
                          icon={
                            <div className={classes.iconCover}>
                              {renderIcon(item.icon)}
                              {/*<NoSsr><i className={item.icon} /></NoSsr>*/}
                            </div>
                          }
                          title={item.title}
                          subtitle={item.subtitle}
                        />
                      </CardBase>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={6} className={classes.gridItemPositioned}>
                <Grid container spacing={isMd ? 4 : 1} direction="column">
                  {items
                    .slice(items.length - 2, items.length)
                    .map((item, index) => (
                      <Grid item xs={12} key={index} data-aos="fade-up">
                        <CardBase withShadow liftUp>
                          <DescriptionListIcon
                            icon={
                              <div className={classes.iconCover}>
                                {renderIcon(item.icon)}
                                {/*<NoSsr><i className={item.icon} /></NoSsr>*/}
                              </div>
                            }
                            title={item.title}
                            subtitle={item.subtitle}
                          />
                        </CardBase>
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid
            container
            alignItems="flex-start"
            justify="center"
            direction="column"
            className={classes.propsGrid}
          >
            <SectionHeader
              label="SEAMLESS IMPLEMENTATION"
              title="From zero to Digital Hero."
              subtitle="With the right change management processes applied you can get through full migration, activation processes smooth and turn your organization into a real digital champion in no time."
              align="left"
              disableGutter
            />
            <Grid container spacing={0}>
              {properties.map((item, index) => (
                <Grid item xs={12} key={index} data-aos="fade-up">
                  <ListItem disableGutters>
                    <ListItemAvatar>
                      <Avatar
                        src={checkYellowImage}
                        className={classes.checkBox}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="textPrimary" noWrap>
                      {item}
                    </Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
            <Button
              size="large"
              variant="contained"
              color="primary"
              className={classes.cta}
              data-aos="fade-up"
              onClick={handleBottombarOpen}
            >
              ASK ABOUT SERVICES
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

CloudFeatures.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default CloudFeatures;
