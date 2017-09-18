var job = "No job";
var jobincome = 0;

var money = 0;
var income = 0;

window.onUnLoad= function (evt) {  
window.confirm("Changes are unsaved! Do you want to leave?");
}

setInterval(showIncomeStats, 100);
setInterval(saveGame, 60000);

function showIncomeStats() {
    document.getElementById("money").innerHTML = money;
    document.getElementById("money-tab").innerHTML = money;
    document.getElementById("inpersec").innerHTML = income;
    document.getElementById("job").innerHTML = job;
    document.getElementById("injobpersec").innerHTML = jobincome;
}

function saveGame() {
    document.cookie = savedJob = job;
    document.cookie = savedBal = money;
}

function changeJob(jobChange) {
    this.job = job
}