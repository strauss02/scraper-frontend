import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChartOutlined";

export const TasksProgress = (props) => {
  let popularTag = "loading";

  if (props.topicDetails) {
    let arr = Object.values(props.topicDetails);
    let max = Math.max(...arr);
    popularTag = Object.keys(props.topicDetails).find((key) => props.topicDetails[key] === max);
  }
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              POPULAR TAG
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {popularTag}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "warning.main",
                height: 56,
                width: 56,
              }}
            >
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3 }}>{/* <LinearProgress value={75.5} variant="determinate" /> */}</Box>
      </CardContent>
    </Card>
  );
};
