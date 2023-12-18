import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: jaatliin@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Menasri23",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/mohammad-ershad-nasri/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/13546747/jatlin",
  },
];

const Header = () => {

  const headerRootRef = useRef(null)
  const [showHeader, setShowHeader] = useState(true)

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = headerRootRef.current.offsetHeight;
      const elementTopPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: elementTopPosition,
        behavior: "smooth",
        block: "start",
      })
    }
  };


  useEffect(() => {
    let prevScrollY = 0
    const headerHeight = headerRootRef.current.offsetHeight
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollOffsetY = currentScrollY - prevScrollY
      if (scrollOffsetY > 0 && currentScrollY > headerHeight) {
        setShowHeader(false)
      } else  {
        setShowHeader(true)
      }

      prevScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  return (
    <Box 
      ref={headerRootRef}
      position="sticky"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${showHeader ? "0" : "-100%"})`}
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      m={'auto'}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              <SocialItems socials={socials} />
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={() => handleClick("projects")}>Projects</a>
              <a href="#contact-me" onClick={() => handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

function SocialItems({ socials }) {
  return socials.map((social) => (
    <SocialNavItem key={social.url} url={social.url} icon={social.icon} target="blank" />
  ));
}

function SocialNavItem({ url, icon, ...props }) {
  return (
    <a href={url} {...props}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );
}

export default Header;
