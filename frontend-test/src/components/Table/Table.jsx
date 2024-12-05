import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  Paper,
  CircularProgress,
  Box
} from '@mui/material'
import ReusableButton from '../Button/Button'
import axios from 'axios'

const DataTable = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [filter, setFilter] = useState('')

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      setData(response.data)
      setFilteredData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleTextChange = e => {
    const value = e.target.value.toLowerCase()
    setFilter(value)
  }

  const handleFilter = () => {
    const filtered = data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(filter)
      )
    )
    setFilteredData(filtered)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Paper className='p-2'>
      <div className='flex flex-col gap-2 sm:flex-row'>
        <TextField
          label='Search'
          variant='outlined'
          fullWidth
          value={filter}
          onChange={handleTextChange}
          className='mb-2'
        />
        <ReusableButton label='Filter' onClick={handleFilter} />
      </div>
      {loading ? (
        <Box className='flex justify-center items-center h-48'>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Industry</TableCell>
                  <TableCell>Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => (
                    <TableRow key={row?.id}>
                      <TableCell>{row?.id}</TableCell>
                      <TableCell>{row?.name}</TableCell>
                      <TableCell>{row?.email}</TableCell>
                      <TableCell>{row?.username}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            {filteredData?.length === 0 && (
              <div className='text-center pt-5'>No Data Found</div>
            )}
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </Paper>
  )
}

export default DataTable
