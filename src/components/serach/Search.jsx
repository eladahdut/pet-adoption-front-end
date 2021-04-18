import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import PetCard from "../petCard/PetCard";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  centralize: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Search() {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const onClick = () => setAdvancedSearch(!advancedSearch);
  const [searchResults, setSearchResults] = useState([
    {
      img: "https://c.files.bbci.co.uk/1086B/production/_115619676_dog2.jpg",
      name: "Bishik",
      status: "Adopted",
    },
    {
      img: "https://c.files.bbci.co.uk/1086B/production/_115619676_dog2.jpg",
      name: "Aizik",
      status: "Conducted",
    },
    {
      img: "https://c.files.bbci.co.uk/1086B/production/_115619676_dog2.jpg",
      name: "Hilik",
      status: "Aborted",
    },
    {
      img: "https://c.files.bbci.co.uk/1086B/production/_115619676_dog2.jpg",
      name: "Hilik",
      status: "Aborted",
    },
  ]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="col">
      <div className={classes.centralize}>
        <Button className={classes.button} onClick={handleOpen}>
          friend type
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">type</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={"dog"}>dog</MenuItem>
            <MenuItem value={"cat"}>cat</MenuItem>
          </Select>
        </FormControl>
        <Button className={classes.button}>Search</Button>
        <br />
      </div>
      <div className={classes.centralize}>
        <Button className={classes.button} onClick={onClick}>
          Advanced Search
        </Button>
      </div>
      <div className={classes.centralize}>
        {advancedSearch ? <AdvancedForm /> : null}
      </div>
      <br />
      <br />
      <br />
      <div className="container d-flex flex-wrap justify-content-between">
        {searchResults.map((pet) => {
          return (
            <PetCard
              petImage={pet.img}
              petName={pet.name}
              petStatus={pet.status}
            />
          );
        })}
      </div>
    </div>
  );
}
const AdvancedForm = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input placeholder="type" inputProps={{ "aria-label": "description" }} />
      <Input
        placeholder="status"
        inputProps={{ "aria-label": "description" }}
      />
      <Input
        placeholder="height"
        inputProps={{ "aria-label": "description" }}
      />
      <Input
        placeholder="weight"
        inputProps={{ "aria-label": "description" }}
      />
      <Input placeholder="name" inputProps={{ "aria-label": "description" }} />
    </form>
  );
};

export default Search;
