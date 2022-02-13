import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../components/dashboard/budget";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { LatestProducts } from "../components/dashboard/latest-products";
import { Sales } from "../components/dashboard/sales";
import { TasksProgress } from "../components/dashboard/tasks-progress";
import { TotalCustomers } from "../components/dashboard/total-customers";
import { TotalProfit } from "../components/dashboard/total-profit";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";
import { useSelector, useDispatch } from "react-redux";
import { getCount } from "../redux/features/dashboard/dashboardSlice";
import { useEffect } from "react";
import { useGetEntryCountQuery, useGetLastEntriesQuery } from "src/redux/features/entriesAPI";

const Dashboard = () => {
  const {
    data: entrycount,
    error: getEntryCountError,
    isLoading: getEntryCountLoading,
  } = useGetEntryCountQuery();

  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Scrapaste | Dashboard</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalCustomers entrycount={entrycount} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TasksProgress />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalProfit sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TrafficByDevice sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestProducts sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
