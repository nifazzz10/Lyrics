import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Lyricfinder from "./Lyricfinder";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./index.css";
export default function App() {
  const [name, setName] = useState("");
 
  const [url, setUrl] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    setName(response.profileObj.name);
  
    setUrl(response.profileObj.imageUrl);
    setLoginStatus(true);
  };
  const logout = () => {
    console.log("logout");
    setLoginStatus(false);
  };
  return (
    <div className="App">
      {!loginStatus && (
        <div>
          
          <h1>Login with Google</h1>
          <GoogleLogin
            clientId="541366044016-ih63k8dohqb81ttfats4o2lsqt1ks21c.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      )}
      {loginStatus && (
        <div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={9}>
              <Stack direction="row" spacing={2}>
                <Avatar alt={name} src={url} />

                <Typography variant="h6"> {name}</Typography>
                <Stack direction="row"> </Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <GoogleLogout
                clientId="671348139606-906f7lcl8vk6l26hivc1ka0hk2teuvb1.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
              />
            </Grid>
          </Grid>

          <br />
          <Lyricfinder />
        </div>
      )}
    </div>
  );
}
