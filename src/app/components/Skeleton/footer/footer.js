import React, { useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';

import { makeStyles } from "@material-ui/core/styles";

import SocialNetworkNetwork from "app/components/Skeleton/socialNetwork/socialNetworkLogo";

import facebook from "app/assets/images/social-networks/facebook.png"
import whatsapp from "app/assets/images/social-networks/whatsapp.png"
import instagram from "app/assets/images/social-networks/instagram.png"
import twitter from "app/assets/images/social-networks/twitter.png"
import youtube from "app/assets/images/social-networks/youtube.png"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: "100%"
  }
}));

function Footer() {
  const classes = useStyles();

  const images = [
    {
      order: 1,
      img: facebook,
      backgroundColor: "#4776ef",
      alt: "Facebook",
      url: "https://www.facebook.com/Mitalac-382930225468885"
    },
    {
      order: 3,
      img: whatsapp,
      backgroundColor: "#5fa844",
      alt: "Whatsapp",
      url: "https://wa.me/50259665082"
    },
    {
      order: 2,
      img: instagram,
      backgroundColor: "#7e3baf",
      alt: "Instagram"
    },
    {
      order: 4,
      img: twitter,
      backgroundColor: "#76abeb",
      alt: "Twitter"
    },
    {
      order: 5,
      img: youtube,
      backgroundColor: "#db0200",
      alt: "youtube"
    }
  ]

  const links = [
    {
      "order": 1,
      "type": "internal",
      "url": "market",
      "description": "Productos"
    },
    {
      "order": 2,
      "type": "external",
      "url": "https://gmail.com",
      "description": "Correo"
    }
  ];

  return (
    <footer>
      <Grid container className={classes.root}>
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={4} />
          <Grid item xs={4}>
            <SocialNetworkNetwork images={images} />
          </Grid>
          <Grid item xs={4} />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Grid container direction="row" justifyContent="center">
              {links.map((item) =>
                <InternalLink key={item.order} type={item.type} url={item.url} description={item.description} />
              )}
            </Grid>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </Grid>
    </footer>
  );
}

function InternalLink(props) {
  let history = useHistory();

  const goTo = () => {
    if (props.type === "internal") {
      history.push(props.url);
    } else {
      window.open(props.url);
    }
  }

  return (
    <Grid item xs>
      <Link onClick={goTo} color="secondary">
        {props.description}
      </Link>
    </Grid>
  )

}

export default Footer;