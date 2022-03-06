import { Doughnut } from "react-chartjs-2";
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PhoneIcon from "@mui/icons-material/Phone";
import TabletIcon from "@mui/icons-material/Tablet";
import { useGetTopicDetailsQuery } from "src/redux/features/entriesAPI";

export const TrafficByDevice = (props) => {
  const theme = useTheme();
  const { topicdetails } = props;

  let slicedValuesSorted = [];
  let tagsRecorded;
  let highestTags = [];
  let allOtherTagsCount;
  if (topicdetails) {
    tagsRecorded = Object.values(topicdetails).length; // 1088

    let valuesSorted = Object.values(props.topicdetails).sort((a, b) => b - a);
    slicedValuesSorted = valuesSorted.slice(0, 5);
    highestTags = slicedValuesSorted.map((value) => {
      return Object.keys(topicdetails).find((key) => props.topicdetails[key] === value);
    });

    allOtherTagsCount = tagsRecorded - highestTags.reduce((a, b) => a + b, 0);
    slicedValuesSorted.push(allOtherTagsCount);
  }

  const data = {
    datasets: [
      {
        data: slicedValuesSorted.concat(allOtherTagsCount),
        backgroundColor: ["#3F51B5", "#e53935", "#FB8C00", "#0E8074", "#0B79D0"],
        borderWidth: 9,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#FFFFFF",
      },
    ],
    labels: [...highestTags, "other"],
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: true,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const devices = [];

  return (
    <Card {...props}>
      <CardHeader title="Tags by Usage" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
