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
            <TableCell>Term</TableCell>
            <TableCell>Instalment</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Deduction</TableCell>
            <TableCell>Outstanding</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.term}</TableCell>
              <TableCell>{parseInt(row.instalment).toLocaleString()}</TableCell>
              <TableCell>{row.interest}</TableCell>
              <TableCell>{parseInt(row.deduction).toLocaleString()}</TableCell>
              <TableCell>{parseInt(row.outstanding).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
