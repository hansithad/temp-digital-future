import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Drawer, Grid, Typography, useMediaQuery, useTheme, Snackbar, Backdrop, CircularProgress,
} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { Section, CustomContactForm, SectionAlternate,CardBase } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { Image } from 'components/atoms';
import {
  About,
  Advantages,
  Features,
  Integrations,
  Reviews,
  MobileApp,
  CloudFeatures,
  MobileFeatures,
  Pricings,
} from './components';

import {
  partners,
  advantages,
  reviews,
  mobileapp2,
  customizations,
  mobileapp1,
  pricings,
  cloudFeatures
} from './data';
import gcPartnerImage from "../../assets/images/GC-Partner-no_outline-V.png";
import * as colors from "@material-ui/core/colors";
import {CustomJobs, Newsletter} from "../CustomCareerListingMinimal/components";
import {BASE_URL, postData} from "../../service/request";
import MuiAlert from "@material-ui/lab/Alert";
import {jobs} from "../CustomCareerListingMinimal/data";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
  },
  toolbarBottom: {
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  chatIconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    left: 'auto',
    top: theme.spacing(-3),
    background: theme.palette.primary.main,
    width: 55,
    height: 55,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  forumIcon: {
    color: 'white',
    width: 25,
    height: 25,
  },
  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: '0 auto',
  },
  cardBase: {
    borderRadius: '35px',
    border: `2px solid ${colors.blueGrey[50]}`,
    maxWidth: 300,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Outsource = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openBottombar, setOpenBottombar] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openLoader, setOpenLoader] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const postSubmission = (formValues)=>{

    setOpenLoader(true);
    handleBottombarClose();
    postData(BASE_URL,formValues)
      .then(data => {
        setOpenLoader(false);
        setOpenSnack(true);
      });
  };

  const newsletterSubmission = (formValues,callback)=>{

    setOpenLoader(true);

    //ADDING message
    formValues['message'] = '####NewsLetter request#####';

    postData(BASE_URL,formValues)
      .then(data => {
        callback();
        setOpenLoader(false);
        setOpenSnack(true);
      });
  };

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <About data={partners} handleBottombarOpen={handleBottombarOpen} />
      </Section>
      <Section style={{paddingTop:0}}>
        <Divider />
      </Section>
      <Section id={'learnMoreSection'} style={{paddingTop:0}}>
        <MobileApp imageUrl='monitor' imageSide='right' data={mobileapp1} />
        <MobileApp imageUrl='progressiveApp' imageSide='left' data={mobileapp2} />
      </Section>
      <Section style={{paddingTop:0}}>
        <Divider />
      </Section>
      <Section style={{paddingTop:0}}>
        <Features data={customizations} handleBottombarOpen={handleBottombarOpen} />
      </Section>
      <CloudFeatures data={cloudFeatures} />
      <SectionAlternate style={{paddingTop:0}}>
        <CustomJobs data={jobs}/>
      </SectionAlternate>
      <Section style={{paddingTop:0}}>
        <Newsletter postSubmission={newsletterSubmission}/>
      </Section>
      <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <IconButton
            className={classes.chatIconButton}
            onClick={handleBottombarOpen}
          >
            <ForumIcon className={classes.forumIcon} />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={openBottombar}
            onClose={handleBottombarClose}
          >
            <div className={classes.contactForm}>
              <CustomContactForm postSubmission={postSubmission} />
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
      <Snackbar open={openSnack} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Thank you for contacting us. We will reply shortly
        </Alert>
      </Snackbar>
      <Backdrop className={classes.backdrop} open={openLoader} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Outsource;
