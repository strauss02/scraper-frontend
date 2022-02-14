import Head from "next/head";
import { Box, Card, Container, Paper, Typography } from "@mui/material";
import { CustomerListResults } from "../components/customer/customer-list-results";
import { CustomerListToolbar } from "../components/customer/customer-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const About = () => (
  <>
    <Head>
      <title>Customers | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Typography variant="h4">About us</Typography>
        <Paper sx={{ p: 2 }}>
          <Typography variant="body1">
            <p>Scrapaste is a scraping service that extracts information off darknet pastebins.</p>
            <p>This project was originally created as a class project for my programming course</p>
          </Typography>
        </Paper>
      </Container>
    </Box>
  </>
);
About.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default About;
