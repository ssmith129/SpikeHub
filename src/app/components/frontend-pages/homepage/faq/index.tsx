"use client";
import * as React from "react";
import {
  Box,
  Divider,
  Typography,
  Grid2 as Grid ,  Button,
  Container,
  Link,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const theme = useTheme();


  const StyledAccordian = styled(Accordion)(() => ({
    borderRadius: "8px",
    marginBottom: "16px !important",
    boxShadow:
      theme.palette.mode == "light"
        ? "0px 3px 0px rgba(235, 241, 246, 0.25)"
        : "unset",
    border: `1px solid ${theme.palette.divider}`,

    "&.Mui-expanded": {
      margin: "0",
    },
    "& .MuiAccordionSummary-root": {
      padding: "8px 24px",
      minHeight: "60px",
      fontSize: "18px",
      fontWeight: 500,
    },
    "& .MuiAccordionDetails-root": {
      padding: "0 24px 24px",
    },
  }));


  return (
    (<Box sx={{
      backgroundColor: theme.palette.mode == 'light' ? 'white' : 'background.default'
    }}>
      <Container
        maxWidth="lg"
        sx={{
          pb: {
            xs: "30px",
            lg: "60px",
          },
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid
            size={{
              xs: 12,
              lg: 10
            }}>
            <Typography
              variant="h4"
              textAlign="center"
              lineHeight="1.2"
              sx={{
                fontSize: {
                  lg: "40px",
                  xs: "35px",
                },
              }}
              fontWeight="700"
            >
              Frequently Asked Questions
            </Typography>
            <Box mt={7}>
              <StyledAccordian>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What is included with my purchase?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </StyledAccordian>
              <StyledAccordian>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Are there any recurring fees?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </StyledAccordian>
              <StyledAccordian>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  Can I use the template on multiple projects?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </StyledAccordian>
              <StyledAccordian>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Can I customize the admin dashboard template to match my brand?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </StyledAccordian>
              <StyledAccordian>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Are there any restrictions on using the template?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </StyledAccordian>
              <StyledAccordian>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  How can I get support after purchase?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </StyledAccordian>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="center">
          <Grid
            size={{
              xs: 12,
              lg: 5
            }}>
            <Box
              mt={5}
              borderRadius="8px"
              display="inline-flex"
              justifyContent="center"
              gap="4px"
              alignItems="center"
              fontWeight={500}
              sx={{
                border: `1px dashed ${theme.palette.divider}`,
                padding: "7px 10px",
                cursor: "pointer",
                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <Typography>Still have a question?</Typography>
              <Link
                href="https://discord.com/invite/eMzE8F6Wqs"
                color="inherit"
                underline="always"
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Ask on discord{" "}
              </Link>
              <Typography>or</Typography>
              <Link
                href="https://support.wrappixel.com/"
                color="inherit"
                underline="always"
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                submit a ticket
              </Link>
              .
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>)
  );
};
export default FAQ;
