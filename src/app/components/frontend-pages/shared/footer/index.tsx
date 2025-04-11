"use client";
import React from "react";
import {
  Box,
  Grid2 as Grid ,  Typography,
  Container,
  Divider,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    id: 1,
    children: [
      {
        title: true,
        titleText: 'Applications',
      },
      {
        title: false,
        titleText: 'Kanban',
        link: 'https://spike-nextjs-pro-main.vercel.app/apps/kanban',
      },
      {
        title: false,
        titleText: 'Invoice List',
        link: 'https://spike-nextjs-pro-main.vercel.app/apps/invoice/list',
      },
      {
        title: false,
        titleText: 'eCommerce',
        link: 'https://spike-nextjs-pro-main.vercel.app/apps/ecommerce/shop',
      },
      {
        title: false,
        titleText: 'Chat',
        link: 'https://spike-nextjs-pro-main.vercel.app/apps/chats',
      },
      {
        title: false,
        titleText: 'Tickets',
        link: 'https://spike-nextjs-pro-main.vercel.app/apps/tickets',
      },
      {
        title: false,
        titleText: 'Blog',
        link: 'https://spike-nextjs-pro-main.vercel.app/apps/blog/posts',
      },
    ],
  },
  {
    id: 2,
    children: [
      {
        title: true,
        titleText: 'Forms',
      },
      {
        title: false,
        titleText: 'Form Layout',
        link: 'https://spike-nextjs-pro-main.vercel.app/forms/form-layouts',
      },
      {
        title: false,
        titleText: 'Form Horizontal',
        link: 'https://spike-nextjs-pro-main.vercel.app/forms/form-horizontal',
      },
      {
        title: false,
        titleText: 'Form Wizard',
        link: 'https://spike-nextjs-pro-main.vercel.app/forms/form-wizard',
      },
      {
        title: false,
        titleText: 'Form Validation',
        link: 'https://spike-nextjs-pro-main.vercel.app/forms/form-validation',
      },
      {
        title: false,
        titleText: 'TipTap Editor',
        link: 'https://spike-nextjs-pro-main.vercel.app/forms/form-tiptap',
   
      },
    ],
  },
  {
    id: 3,
    children: [
      {
        title: true,
        titleText: 'Tables',
      },
      {
        title: false,
        titleText: 'Basic Table',
        link: 'https://spike-nextjs-pro-main.vercel.app/tables/basic',
      },
      {
        title: false,
        titleText: 'Fixed Header',
        link: 'https://spike-nextjs-pro-main.vercel.app/tables/fixed-header',
      },
      {
        title: false,
        titleText: 'Pagination Table',
        link: 'https://spike-nextjs-pro-main.vercel.app/tables/pagination',
      },
      {
        title: false,
        titleText: 'React Dense Table',
        link: 'https://spike-nextjs-pro-main.vercel.app/react-tables/dense',
      },
      {
        title: false,
        titleText: 'Row Selection Table',
        link: 'https://spike-nextjs-pro-main.vercel.app/react-tables/row-selection',
      },
      {
        title: false,
        titleText: 'Drag n Drop Table',
        link: 'https://spike-nextjs-pro-main.vercel.app/react-tables/drag-drop',
      },
    ],
  },
];

const Footer = () => {

  const theme = useTheme()

  return (<>
    <Box color='white' borderRadius={0} sx={{
      backgroundColor: theme.palette.mode == 'light' ? 'grey.600' : '#1f2c4f'
    }}>
      <Container
        maxWidth="lg"
        sx={{
          pt: {
            xs: "30px",
            lg: "60px",
          },
        }}
      >
        <Grid container spacing={3} justifyContent="space-between" mb={7}>
          {footerLinks.map((footerlink, i) => (
            <Grid
              key={i}
              size={{
                xs: 6,
                sm: 4,
                lg: 2
              }}>
              {footerlink.children.map((child, i) => (
                <React.Fragment key={i}>
                  {child.title ? (
                    <Typography fontSize="17px" fontWeight="600" mb="22px">
                      {child.titleText}
                    </Typography>
                  ) : (
                    <Link href={`${child.link}`}>
                      <Typography
                        sx={{
                          display: "block",
                          padding: "10px 0",
                          fontSize: "15px",
                          color: 'rgba(255,255,255,0.5)',
                          "&:hover": {
                            color: (theme) => theme.palette.primary.main,
                          },
                        }}
                        component="span"
                      >
                        {child.titleText}
                      </Typography>
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          ))}
          <Grid
            size={{
              xs: 6,
              sm: 6,
              lg: 2
            }}>
            <Typography fontSize="17px" fontWeight="600" mb="22px">
              Follow us
            </Typography>

            <Stack direction="row" gap="20px">
              <Tooltip title="Facebook">
                <Link href="#">
                  <Image
                    src="/images/frontend-pages/icons/icon-facebook.svg"
                    alt="facebook"
                    width={22}
                    height={22}
                  />
                </Link>
              </Tooltip>
              <Tooltip title="Twitter">
                <Link href="#">
                  <Image
                    src="/images/frontend-pages/icons/icon-twitter.svg"
                    alt="twitter"
                    width={22}
                    height={22}
                  />
                </Link>
              </Tooltip>
              <Tooltip title="Instagram">
                <Link href="#">
                  <Image
                    src="/images/frontend-pages/icons/icon-instagram.svg"
                    alt="instagram"
                    width={22}
                    height={22}
                  />
                </Link>
              </Tooltip>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box
          py="40px"
          flexWrap="wrap"
          display="flex"
          justifyContent="space-between"
        >
          <Stack direction="row" gap={1} alignItems="center">
            <Image
              src="/images/logos/favicon.ico"
              width={20}
              height={20}
              alt="logo"
            />
            <Typography variant="body1" fontSize="15px">
              All rights reserved by Spike.{" "}
            </Typography>
          </Stack>
          <Typography variant="body1" fontSize="15px">
            Produced by{" "}
            <Typography component={Link} color="primary.main" href="https://wrappixel.com/">
              Wrappixel
            </Typography>
            .
          </Typography>
        </Box>
      </Container>
    </Box>
  </>);
};

export default Footer;
