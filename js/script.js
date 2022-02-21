let covidReport;
const url = 'https://coronavirus.m.pipedream.net/'
fetch(url)
    .then(response => response.json())
    .then(data => {
        covidReport = data;
        console.log(covidReport);
        let covidReportStat = covidReport.summaryStats;
        console.log(covidReportStat);
        let sampleTested = document.getElementById("sample-tested")
      
        sampleTested.innerHTML = `${covidReportStat.global.confirmed}`;
        sampleTested.setAttribute("class", "sample-tested");

        let confirmed = document.getElementById("confirmed");
        confirmed.innerHTML = `${covidReportStat.global.confirmed}`;
        confirmed.setAttribute("class", "sample-tested");

        let activeCases = document.getElementById("active-cases");
        activeCases.innerHTML = `${covidReportStat.global.confirmed}`;

        let dischargedCases = document.getElementById("discharged-cases");
        dischargedCases.innerHTML = `${covidReportStat.nonChina.confirmed}`;

        console.log(covidReportStat.nonChina.confirmed);
        let deaths = document.getElementById("death-rate");
        deaths.innerHTML = `${covidReportStat.global.deaths}`;
        console.log(deaths)
});
