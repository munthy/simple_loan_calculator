class LoanCalculator {
    
    calculateSeriesLoan(amount, durationMonths) {
        let loanOutputData = [];
        
        const interestPercentage = 0.035;
        let outstanding = amount;
        let deduction = amount/durationMonths;
        let interestPerMonth = interestPercentage / durationMonths;

        for (let term = 0; term <= durationMonths-1; term++) {

            outstanding =  outstanding-deduction;
            let interest = Math.round(outstanding*interestPerMonth);
            let instalment = deduction + interest;

            let data = {
                id: term,
                term: term+1,
                instalment: instalment,
                interest: interest,
                deduction: deduction,
                outstanding: outstanding 
            }
            loanOutputData.push(data);
        }
        return loanOutputData;
    }
}

module.exports = LoanCalculator;