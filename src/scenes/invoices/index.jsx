import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => {
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>;
      },
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="7px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="10px auto"
        height="75vh"
        width="100%"
        overflow="auto"
        sx={{
          "& .MuiDataGrid-root": {
            backgroundColor: colors.primary[400], // Background color for the grid root
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none", // Remove bottom border from cells
          },
          "& .name-column--cell": {
            color: colors.blueAccent[300], // Custom color for cells with the class `name-column--cell`
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none", // Remove bottom border from headers
            marginBottom: "5px",
            color: colors.primary[100],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400], // Background color for the virtual scroller
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none", // Remove top border from the footer
            backgroundColor: colors.blueAccent[700], // Background color for the footer
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]}!important`, // Custom color for checkboxes
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
