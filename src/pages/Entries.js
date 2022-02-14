/* eslint-disable react/jsx-max-props-per-line */
import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { ProductListToolbar } from "../components/product/product-list-toolbar";
import { EntryCard } from "../components/product/entry-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { useGetEntriesBySearchQuery, useGetLastEntriesQuery } from "src/redux/features/entriesAPI";
import { useCallback, useEffect, useState } from "react";

const Entries = () => {
  const [displayValue, setDisplayValue] = useState(10);

  const [searchInput, setSearchInput] = useState("");

  const [displaySearchResults, setDisplaySearchResults] = useState(false);

  const {
    data: lastentries,
    error: getLastEntriesError,
    isLoading: getLastEntriesLoading,
    //poll every 2 minutes
  } = useGetLastEntriesQuery(displayValue, { pollingInterval: 120000 });

  const {
    data: searchResults,
    error: searchResultsError,
    isLoading: searchResultsIsLoading,
    //poll every 2 minutes
  } = useGetEntriesBySearchQuery(searchInput);

  useEffect(() => {
    if (!searchInput) {
      return setDisplaySearchResults(false);
    }
    console.log(searchResults);
    setDisplaySearchResults(true);
  }, [searchInput]);

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
          <ProductListToolbar
            setSearchInput={setSearchInput}
            searchInput={searchInput}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {/* //this is it */}

              {getLastEntriesLoading && (
                <Grid item lg={4} md={6} xs={12}>
                  <h3>{"Loading..."}</h3>
                </Grid>
              )}
              {lastentries &&
                !displaySearchResults &&
                lastentries.map((entry) => (
                  <Grid item key={entry._id} lg={12} md={6} xs={12}>
                    <EntryCard entry={entry} />
                  </Grid>
                ))}

              {displaySearchResults &&
                !searchResultsIsLoading &&
                searchResults.map((entry) => (
                  <Grid item key={entry._id} lg={12} md={6} xs={12}>
                    <EntryCard entry={entry} />
                  </Grid>
                ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          ></Box>
        </Container>
      </Box>
    </>
  );
};
Entries.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Entries;
