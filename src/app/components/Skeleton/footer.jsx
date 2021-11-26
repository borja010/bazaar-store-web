import React, { useContext } from "react";

import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { Context } from "app/context/storeContext";
import SocialNetworkNetwork from "app/components/Skeleton/socialNetworkLogo";
import FooterWrapper from "app/components/Skeleton/footerWrapper";

import facebook from "app/assets/images/social-networks/facebook.png"
import whatsapp from "app/assets/images/social-networks/whatsapp.png"
import instagram from "app/assets/images/social-networks/instagram.png"
import twitter from "app/assets/images/social-networks/twitter.png"
import youtube from "app/assets/images/social-networks/youtube.png"


function Footer() {
  const [state] = useContext(Context);

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
      <Box py={2} bgcolor="primary.main">
        <Box textAlign="center">
          <Typography variant="button" color="secondary">
            {state.title}
          </Typography>
        </Box>
        <Box textAlign="center">
          <FooterWrapper items={images}>
            <SocialNetworkNetwork />
          </FooterWrapper>
        </Box>
        <Box textAlign="center">
          <FooterWrapper items={links}>
            <InternalLink />
          </FooterWrapper>
        </Box>
        <Box textAlign="center" pt={{ xs: 2, sm: 4 }} pb={{ xs: 5, sm: 0 }}>
          <Typography variant="caption" color="secondary">
            © 2021 Francisco Tobar
          </Typography>
        </Box>
      </Box>
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
    <Box px={1}>
      <Link onClick={goTo} color="secondary" href="">
        {props.description}
      </Link>
    </Box>
  )
}

export default Footer;