import CustomSocialButton from "@/app/components/forms/theme-elements/CustomSocialButton";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { signInType } from "@/app/(DashboardLayout)/types/auth/auth";
import { signIn } from 'next-auth/react';

const AuthSocialButtons = ({ title }: signInType) => {
  const handleGoogleSignIn = async () => {
    await signIn('google');
  };
  const handleGithubSignIn = async () => {
    await signIn('github');
  };
  return (<>
    <Grid container spacing={3} sx={{ mt: 3 }}>
      <Grid
        size={{
          xs: 12,
          sm: 6
        }}>
        <CustomSocialButton fullWidth onClick={handleGoogleSignIn}>
          <Avatar
            src={"/images/svgs/google-icon.svg"}
            alt={"icon1"}
            sx={{
              width: 16,
              height: 16,
              borderRadius: 0,
              mr: 1,
            }}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              whiteSpace: "nowrap",
              mr: { sm: "3px" },
            }}
          >
            {title}{" "}
          </Box>{" "}
          Google
        </CustomSocialButton>
      </Grid>
      <Grid
        size={{
          xs: 12,
          sm: 6
        }}>
        <CustomSocialButton fullWidth onClick={handleGithubSignIn}>
          <Avatar
            src={"/images/svgs/git-icon.svg"}
            alt={"icon2"}
            sx={{
              width: 16,
              height: 16,
              borderRadius: 0,
              mr: 1,
            }}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              whiteSpace: "nowrap",
              mr: { sm: "3px" },
            }}
          >
            {title}{" "}
          </Box>{" "}
          Github
        </CustomSocialButton>
      </Grid>
    </Grid>
  </>);
};

export default AuthSocialButtons;
