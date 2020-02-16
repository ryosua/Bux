import React, { useState } from "react";
import { withRouter } from "react-router";
import SignUp from "./Signup";
import Login from "./Login";

const userTypes = {
  DEV: "DEV",
  TESTER: "TESTER"
};

const Account = ({ history }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);
  const [userType, setUserType] = useState(userTypes.TESTER);

  if (isLoggedIn && userType === userType.TESTER) {
    history.push("/test");
  }

  if (!isLoggedIn && !hasAccount) {
    return <SignUp setHasAccount={setHasAccount} setLoggedIn={setLoggedIn} />;
  }

  if (!isLoggedIn && hasAccount) {
    return <Login setLoggedIn={setLoggedIn} />;
  }
};

export default withRouter(Account);
