import {useState} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoadingButton from '@mui/lab/LoadingButton';
import Select from '@mui/material/Select';
import LoanTable from './LoanTable.js'
import { getSeriesLoan } from './apiFunctions.js';


export default function Calculator() {

    let defaultValues = {
        amount: "",
        duration: "",
        interest: ""
    }

    const [values, setValues] = useState(defaultValues);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([{id:0}]);
    const [loanType, setLoanType] = useState("series");

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const clearForms = () => {
        setValues(defaultValues)
        setData([{id:0}]);
    }

    const validateForms = () => {
        return (
          values.amount.length > 0 &&
          values.duration.length > 0 &&
          values.interest.length > 0 
        )}
    
    const submitData = async () => {
        setLoading(true)
        await getSeriesLoan(values).then(response => {
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
                <Box component="form" noValidate sx={{mt:5,mb:5}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            id="amountInput"
                            label="Amount in NOK"
                            value={values.amount}
                            onChange={handleChange('amount')}
                            autoFocus/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            id="durationInput"
                            label="Duration in years"
                            value={values.duration}
                            onChange={handleChange('duration')}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            id="interestInput"
                            label="Interest in %"
                            value={values.interest}
                            onChange={handleChange('interest')}/>
                        </Grid>
                            <Grid
                            container
                            item
                            xs={12}
                            sm={6}
                            alignItems="stretch"
                            direction="row"
                            justifyContent="space-between">
                                <Grid item>
                                    <LoadingButton
                                    variant="contained"
                                    loading={loading}
                                    onClick={submitData}
                                    disabled={!validateForms()}
                                    sx={{height:"100%"}}
                                    >Submit</LoadingButton>
                                </Grid>
                                <Grid item>
                                    <Button
                                    variant="outlined"
                                    onClick={clearForms}
                                    sx={{height:"100%"}}
                                    >Clear</Button>
                                </Grid>
                            </Grid>
                    </Grid>
                </Box>
                <LoanTable props={data}/>
            </Box>
       </Container>
    )
}