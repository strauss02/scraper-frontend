import PropTypes from "prop-types";
import { Avatar, Box, Card, CardContent, Divider, Grid, Tooltip, Typography } from "@mui/material";
import { Clock as ClockIcon } from "../../icons/clock";
import { Download as DownloadIcon } from "../../icons/download";
import { SeverityPill } from "../severity-pill";

export const EntryCard = ({ entry }) => {
  const sentimentScore = entry.analysis.documentSentiment.documentSentiment.score.toFixed(2);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 0,
          }}
        ></Box>
        <Typography align="left" color="textPrimary" gutterBottom variant="h5">
          {entry.title}
        </Typography>
        <Typography align="left" color="textPrimary" variant="body1">
          {entry.content}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid
            item
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <ClockIcon color="action" />
            <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
              {` ${new Date(entry.date).toLocaleTimeString("en-GB", {
                timeZone: "UTC",
              })}  ${new Date(entry.date).toLocaleDateString("en-GB", { timeZone: "UTC" })}
               UTC`}
            </Typography>
            <Typography variant="body2" color="textSecondary" pl={1}>
              {"by "}
              {entry.author === "" ? "Anoynmous" : entry.author}{" "}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Tooltip title="Sentiment score">
              <SeverityPill color={colorizeBySentiment(sentimentScore)}>
                {sentimentScore}
              </SeverityPill>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

function colorizeBySentiment(score) {
  if (score > 0.5) {
    return "verypositive";
  } else if (score > 0.15) {
    return "positive";
  } else if (score > -0.15) {
    return "undecided";
  } else if (score > -0.3) {
    return "negative";
  } else {
    return "verynegative";
  }
}

EntryCard.propTypes = {
  product: PropTypes.object.isRequired,
};
