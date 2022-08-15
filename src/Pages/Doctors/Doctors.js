import React, { useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button, Typography } from '@mui/material';
// import { AccountCircle, Send } from '@mui/icons-material';
import { makeData } from '../../../src/utils/makedata';

const Doctors = () => {
  const columns = useMemo(
    () => [
      {
        id: 'employee', //id used to define `group` column
        header: 'Employee',
        columns: [
          {
            accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
            id: 'name', //id is still required when using accessorFn instead of accessorKey
            enableClickToCopy: false,
            header: 'Name',
            Cell: ({ cell }) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <img
                  alt="avatar"
                  height={30}
                  src={cell.row.original.avatar}
                  loading="lazy"
                  style={{ borderRadius: '10%' }}
                />
                <Typography>{cell.getValue()}</Typography>
              </Box>
            ),
          },
          {
            accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Email',
            size: 250,
          },
        ],
      },
      {
        id: 'id',
        header: 'Job Info',
        columns: [
          {
            accessorKey: 'salary',
            enableEditing: true,
            filterVariant: 'range',
            header: 'Salary',
            //custom conditional format and styling
            Cell: ({ cell }) => (
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    cell.getValue() < 50_000
                      ? theme.palette.error.dark
                      : cell.getValue() >= 50_000 && cell.getValue() < 75_000
                        ? theme.palette.warning.dark
                        : theme.palette.success.dark,
                  borderRadius: '0.25rem',
                  color: '#fff',
                  maxWidth: '9ch',
                  p: '0.25rem',
                })}
              >
                {cell.getValue()?.toLocaleString?.('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </Box>
            ),
            size: 30,
          },
          {
            accessorKey: 'jobTitle', //hey a simple column for once
            header: 'Specialist',
            size: 300,
          },
          {
            Cell: ({ cell }) => cell.getValue()?.toLocaleDateString?.(), //transform data to readable format for cell render
            Header: () => <em>Start Date</em>, //custom header markup
            accessorFn: (row) => new Date(row.startDate), //transform data before processing so sorting works
            accessorKey: 'startDate',
            header: 'Shedule',
            muiTableHeadCellFilterTextFieldProps: {
              type: 'date',
            },
            sortingFn: 'datetime',
            size: 300,
          },
        ],
      },
    ],
    [],
  );

  const [employeeData, setEmployeeData] = useState(() => makeData()); 

  const handleSaveRow = ({ row }) => {
    employeeData[+row.index] = row._valuesCache;
    setEmployeeData([...employeeData]);
  };  
  // AS AN ADMIN WE CAN HAVE THIS OPERATION
  // JOB
  return (
    <MaterialReactTable
      columns={columns}
      data={employeeData}
      enableClickToCopy
      // enableColumnFilterChangeMode
      enableColumnOrdering
      enableColumnResizing
      enableEditing
      // enableGrouping
      enablePinning
      enableRowActions
      enableRowNumbers
      enableRowSelection
      onEditRowSubmit={handleSaveRow}
      positionToolbarAlertBanner="bottom"
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <img
            alt="avatar"
            height={200}
            src={row.original.avatar}
            loading="lazy"
            style={{ borderRadius: '10%' }}
          />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="p1">Signature Catch Phrase:</Typography>
            <Typography variant="h4">
              &quot;{row.original.signatureCatchPhrase}&quot;
            </Typography>
          </Box>
        </Box>
      )}
      // renderRowActionMenuItems={({ closeMenu }) => [
      //   <MenuItem
      //     key={0}
      //     onClick={() => {
      //       // View profile logic...
      //       closeMenu();
      //     }}
      //     sx={{ m: 0 }}
      //   >
      //     <ListItemIcon>
      //       <AccountCircle />
      //     </ListItemIcon>
      //     View Profile
      //   </MenuItem>,
      //   <MenuItem
      //     key={0}
      //     onClick={() => {
      //       // Send email logic...
      //       closeMenu();
      //     }}
      //     sx={{ m: 0 }}
      //   >
      //     <ListItemIcon>
      //       <Send />
      //     </ListItemIcon>
      //     Send Email
      //   </MenuItem>,
      // ]}
      renderTopToolbarCustomActions={({ table }) => {
        const handleDeactivate = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert('deactivating ' + row.getValue('name'));
          });
        };

        const handleActivate = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert('activating ' + row.getValue('name'));
          });
        };

        const handleContact = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert('contact ' + row.getValue('name'));
          });
        };

        return (
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button
              color="error"
              disabled={table.getSelectedRowModel().flatRows.length === 0}
              onClick={handleDeactivate}
              variant="contained"
            >
              Deactivate
            </Button>
            <Button
              color="success"
              disabled={table.getSelectedRowModel().flatRows.length === 0}
              onClick={handleActivate}
              variant="contained"
            >
              Activate
            </Button>
            <Button
              color="info"
              disabled={table.getSelectedRowModel().flatRows.length === 0}
              onClick={handleContact}
              variant="contained"
            >
              Contact
            </Button>
          </div>
        );
      }}
    />
  );
};

export default Doctors;
