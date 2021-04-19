import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      margin: "6% -10% 6% 23%",
      display: "block",
    },
  },
}));

function AddPet() {
  const classes = useStyles();

  return (
    <div className="container">
      <form
        className="d-flex justify-content-center"
        noValidate
        autoComplete="off"
      >
        <div className={classes.root}>
          <Input
            placeholder="Type"
            inputProps={{ "aria-label": "description" }}
          />
          <Input
            placeholder="Name"
            inputProps={{ "aria-label": "description" }}
          />
          <Input
            placeholder="Adoption Status"
            inputProps={{ "aria-label": "description" }}
          />
          <Input
            placeholder="Picture"
            inputProps={{ "aria-label": "description" }}
          />
          <Input
            placeholder="Height"
            inputProps={{ "aria-label": "description" }}
          />
          <Input
            placeholder="Weight"
            inputProps={{ "aria-label": "description" }}
          />
        </div>
        <div className={classes.root}>
          <Input
            placeholder="Color"
            inputProps={{ "aria-label": "description" }}
          />
          <Input
            placeholder="Bio"
            inputProps={{ "aria-label": "description" }}
          />
          <Input
            placeholder="Hypoalergenic"
            inputProps={{ "aria-label": "description" }}
          />
          <Input
            placeholder="Dietry Restrictions"
            inputProps={{ "aria-label": "description" }}
          />
          <Input
            placeholder="Breed"
            inputProps={{ "aria-label": "description" }}
          />
          <Button variant="contained">Add Pet</Button>
        </div>
      </form>
    </div>
  );
}

export default AddPet;
