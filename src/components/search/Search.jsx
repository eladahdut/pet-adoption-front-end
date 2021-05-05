import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PetCard from "../petCard/PetCard";
import Input from "@material-ui/core/Input";
import { getPets, getPetsByCriteria } from "../../lib/api";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190,
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
  const [type, setType] = useState("");
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const onClick = () => setAdvancedSearch(!advancedSearch);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function petsStore() {
      const data = await getPets();
      setSearchResults(data);
    }
    petsStore();
  }, []);

  const handleChange = async (e) => {
    e.preventDefault();
    const data = await getPetsByCriteria(type);
    setSearchResults(data);
  };

  return (
    <div className="col">
      <div className={classes.centralize}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            Search By Budy Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="Dog">Dog</MenuItem>
            <MenuItem value="Cat">Cat</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={handleChange} className={classes.button}>
          Search
        </Button>
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
        {searchResults ? (
          searchResults.map((pet) => {
            return (
              <PetCard
                key={pet._id}
                petImage={pet.img}
                petName={pet.name}
                petStatus={pet.adoptionStatus}
              />
            );
          })
        ) : (
          <h2>Loading</h2>
        )}
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
