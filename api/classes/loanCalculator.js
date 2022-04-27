class LoanCalculator {
    
    calculateSeriesLoan(amount, durationMonths, interest) {
        let loanOutputData = [];
        
        const interestPercentage = interest/100;
        let outstanding = amount;
        let deduction = Math.round(amount/durationMonths);
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