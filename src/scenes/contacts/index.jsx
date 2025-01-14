import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="20px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            backgroundColor: colors.primary[400], // Background color for the grid root
            borderRadius: "5px", // Border radius for the grid root
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none", // Remove bottom border from cells
          },
          "& .name-column--cell": {
            color: colors.blueAccent[300], // Custom color for cells with the class `name-column--cell`
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.greenAccent[900], // Background color for column headers
            borderBottom: "none", // Remove bottom border from headers
            color: colors.primary[100],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400], // Background color for the virtual scroller
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none", // Remove top border from the footer
            backgroundColor: colors.blueAccent[700], // Background color for the footer
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.greenAccent[100]} !important`, // Custom text color for buttons in the toolbar
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
