/* eslint-disable react/jsx-max-props-per-line */
import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { ProductListToolbar } from "../components/product/product-list-toolbar";
import { EntryCard } from "../components/product/entry-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { useGetLastEntriesQuery } from "src/redux/features/entriesAPI";
import { useState } from "react";

const Entries = () => {
  const [displayValue, setDisplayValue] = useState(10);
  const {
    data: lastentries,
    error: getLastEntriesError,
    isLoading: getLastEntriesLoading,
    //poll every 2 minutes
  } = useGetLastEntriesQuery(displayValue, { pollingInterval: 120000 });

  return (
    <>
      <Head>
        <title>Scrapaste | Entries</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar displayValue={displayValue} setDisplayValue={setDisplayValue} />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {/* //this is it */}

              {getLastEntriesLoading ? (
                <Grid item lg={4} md={6} xs={12}>
                  <h3>{"Loading..."}</h3>
                </Grid>
              ) : (
                lastentries.map((entry) => (
                  <Grid item key={entry._id} lg={12} md={6} xs={12}>
                    <EntryCard entry={entry} />
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};
Entries.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Entries;
