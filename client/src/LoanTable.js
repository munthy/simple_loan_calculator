import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function LoanTable(props) {
  const rows = props.props;

  return (
    <>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:"bold"}}>Term</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Instalment</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Interest</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Deduction</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Outstanding</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.term}</TableCell>
              <TableCell>{row.instalment}</TableCell>
              <TableCell>{row.interest}</TableCell>
              <TableCell>{row.deduction}</TableCell>
              <TableCell>{row.outstanding}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
