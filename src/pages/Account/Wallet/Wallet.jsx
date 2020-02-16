import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Fortmatic from "fortmatic";
import Web3 from "web3";

import LinkButton from "../../../components/LinkButton";

const Wallet = () => {
  useEffect(() => {
    const fm = new Fortmatic("pk_test_A331B2A241243F72");
    // Post EIP-1102 update which MetaMask no longer injects web3
    if (window.ethereum) {
      // Use MetaMask provider
      window.web3 = new Web3(window.ethereum);
    } else {
      // Use Fortmatic provider
      window.web3 = new Web3(fm.getProvider());
    }
  }, []);

  const handleBuy = () => {
    window.web3.currentProvider.enable();
  };

  return (
    <>
      <Typography variant="h2">Buy Bux to Start Testing</Typography>
      <Typography>Balance 0 Bux</Typography>
      <TextField label="amount" />
      <Button onClick={handleBuy}>Buy</Button>
      <LinkButton text="Start Testing" to="/testForm" />
    </>
  );
};

export default Wallet;
