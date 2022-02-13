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
import { Download as DownloadIcon } from "../../icons/download";
import { Search as SearchIcon } from "../../icons/search";
import { Upload as UploadIcon } from "../../icons/upload";

export const ProductListToolbar = (props) => (
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
      <Box sx={{ m: 1 }}>
        <Button color="primary" variant="contained">
          Add products
        </Button>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item lg={6} sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
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
              />
            </Grid>
            <Grid item lg={1.5}>
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
