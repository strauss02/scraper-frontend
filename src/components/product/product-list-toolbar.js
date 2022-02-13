import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
  Grid,
} from "@mui/material";
import { Search as SearchIcon } from "../../icons/search";
import { DebounceInput } from "react-debounce-input";

export const ProductListToolbar = (props) => {
  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Entries
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
              <Grid item lg={6} sx={{ maxWidth: 500 }}>
                <DebounceInput
                  fullWidth
                  minLength={2}
                  debounceTimeout={600}
                  onChange={(e) => {
                    props.setSearchInput(e.target.value);
                  }}
                  element={TextField}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon fontSize="small" color="action">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search for entry"
                  variant="outlined"
                  value={props.searchInput}
                />
              </Grid>
              <Grid item lg={1}>
                <TextField
                  value={props.displayValue}
                  id="filled-number"
                  label="Results"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  placeholder="Number of results to display"
                  onChange={(e) => props.setDisplayValue(e.target.value)}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
