import { TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const Search = (props: any) => {
  const { searchText, handleSearchChange, placeholder } = props;

  return (
    <TextField
      sx={{ ml: 2 }}
      size="small"
      id="standard-bare"
      variant="outlined"
      placeholder={`Search ${placeholder}`}
      value={searchText}
      onChange={handleSearchChange}
      InputProps={{
        startAdornment: <SearchIcon />,
      }}
    />
  );
};

export default Search;
