import {useState} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoadingButton from '@mui/lab/LoadingButton';
import LoanTable from './LoanTable.js'
import { getSeriesLoan } from './apiFunctions.js';


export default function Calculator() {

    let defaultValues = {
        amount: "",
        duration: ""
    }

    const [values, setValues] = useState(defaultValues);
    const [loading, setLoading] = useState(false);
    const [data,setData] = useState([{id:0}]);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const clearForms = () => {
        setValues(defaultValues)
    }

    const validateForms = () => {
        return (
          values.amount.length > 0 &&
          values.duration.length > 0 
        )}
    
    const submitData = async () => {
        console.log(`Amount: ${values.amount} Duration: ${values.duration}`)
        setLoading(true)
        await getSeriesLoan(values).then(response => {
            console.log(response)
            setData(response)
            setLoading(false)
        }).catch(error => {
            console.log(error)
            setLoading(false)
        })
    }
    

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{marginTop:8, display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Typography component="h1" variant="h5">
                   Simple Series Loan Calculator
                </Typography>
                <Box component="form" noValidate sx={{mt:3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="amountInput" label="Amount NOK" value={values.amount} onChange={handleChange('amount')} autoFocus/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="durationInput" label="Duration Months" value={values.duration} onChange={handleChange('duration')}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        </Grid>
                            <Grid container item xs={12} sm={6}  justifyContent="spaceBetween">
                                <Grid item xs={6}>
                                    <LoadingButton variant="contained" loading={loading} onClick={submitData} disabled={!validateForms()}>Submit</LoadingButton>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="outlined" onClick={clearForms}>Clear</Button>
                                </Grid>
                            </Grid>
                    </Grid>
                </Box>
             <LoanTable props={data}/>
            </Box>
       </Container>
    )
}