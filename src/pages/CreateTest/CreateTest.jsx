import React from "react";
import { Button } from "@material-ui/core";

export default function CreateTest() {
  return (
    <div>
      <h2>What type of test do you want to create?</h2>
      <Button variant="contained">Preference Test</Button>
      <Button variant="contained">Survey</Button>
      <Button variant="contained">Usability</Button>
    </div>
  );
}
