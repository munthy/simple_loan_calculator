export async function getSeriesLoan(dataObject){
    const apiURL = "http://localhost:4500/seriesloan/";

    const response = await fetch(apiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObject)
    })

    return response.json();
}