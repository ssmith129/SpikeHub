"use client";
import * as React from "react";
import { Box, Divider, Container, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import TabTeamScheduling from "./TabTeamScheduling";
import TabPayments from "./TabPayments";
import TabEmbedding from "./TabEmbedding";
import TabWorkflows from "./TabWorkflows";
import { Icon } from "@iconify/react";

const COMMON_TAB = [
  {
    value: "1",
    icon: <Icon icon="material-symbols:groups-outline-rounded" width={20} height={20} />,
    label: "Team Scheduling",
    disabled: false,
  },
  {
    value: "2",
    icon: <Icon icon="material-symbols:account-balance-outline" width={20} height={20} />,
    label: "Payments",
    disabled: false,
  },
  {
    value: "3",
    icon: <Icon icon="material-symbols-light:photo-frame-outline-sharp" width={20} height={20} />,
    label: "Embedding",
    disabled: true,
  },
  {
    value: "4",
    icon: <Icon icon="material-symbols:widgets-outline-rounded" width={20} height={20} />,
    label: "Workflows",
    disabled: true,
  },
];

const StyledTabPanelItem = styled(TabPanel)(() => ({
  padding: 0,
  marginTop: "20px",
}));

const ProtectFocus = () => {
  const theme = useTheme();
  const borderColor = theme.palette.divider;

  const [value, setValue] = React.useState("1");

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const StyledTab = styled(Tab)(() => ({
    fontWeight: 500,
    minHeight: '56px',
    borderRadius: '8px',
    boxShadow: theme.shadows[10],
    backgroundColor: theme.palette.mode == 'light' ? 'white' : 'background.paper',
    "& .MuiTab-iconWrapper": {
      marginRight: "12px",
      width: "24px",
      height: "24px",
      strokeWidth: "1.5px",
    },
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light
    },
    '&.Mui-selected': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      boxShadow: '0px 24px 24px -12px rgba(0, 133, 219, 0.15)'
    },
  }));

  return (
    <Box pt={7} sx={{ pb: { xs: 2, lg: 4 }, backgroundColor: theme.palette.mode == 'light' ? 'white' : 'background.default' }}>

      <Container maxWidth="lg">
        <TabContext value={value}>
          <Box sx={{ maxWidth: { xs: 400, sm: "100%" } }}>
            <TabList
              TabIndicatorProps={{
                style: {
                  display: 'none'
                },
              }}
              variant="scrollable"
              allowScrollButtonsMobile
              scrollButtons="auto"
              onChange={handleChange}
              aria-label="lab API tabs example" sx={{
                '& .MuiTabs-flexContainer': {
                  gap: 2, marginBottom: 4
                }
              }}
            >
              {COMMON_TAB.map((tab, index) => (
                <StyledTab
                  key={tab.value}
                  label={tab.label}
                  iconPosition="start"
                  icon={tab.icon}
                  value={String(index + 1)}
                  sx={{
                    fontSize: '14px',
                    flex: {
                      xs: "none",
                      sm: "1 1 0px",
                    },
                  }}
                />
              ))}
            </TabList>
          </Box>

          <Box mb={5}>
            <StyledTabPanelItem value="1">
              <TabTeamScheduling />
            </StyledTabPanelItem>

            <StyledTabPanelItem value="2">
              <TabPayments />
            </StyledTabPanelItem>

            <StyledTabPanelItem value="3">
              <TabEmbedding />
            </StyledTabPanelItem>

            <StyledTabPanelItem value="4">
              <TabWorkflows />
            </StyledTabPanelItem>
          </Box>
        </TabContext>
      </Container>
    </Box>
  );
};
export default ProtectFocus;
