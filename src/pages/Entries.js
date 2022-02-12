import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { products } from "../__mocks__/products";
import { ProductListToolbar } from "../components/product/product-list-toolbar";
import { ProductCard } from "../components/product/product-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { useGetLastEntriesQuery } from "src/redux/features/entriesAPI";

const Products = () => {
  const {
    data: lastentries,
    error: getLastEntriesError,
    isLoading: getLastEntriesLoading,
    //poll every 2 minutes
  } = useGetLastEntriesQuery(5, { pollingInterval: 120000 });

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
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {/* //this is it */}

              {getLastEntriesLoading ? (
                <Grid item lg={4} md={6} xs={12}>
                  <h3>{"Loading..."}</h3>
                </Grid>
              ) : (
                lastentries.map((entry) => (
                  <Grid item key={entry.id} lg={12} md={6} xs={12}>
                    <ProductCard entry={entry} />
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
Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
