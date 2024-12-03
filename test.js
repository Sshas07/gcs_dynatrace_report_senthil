const os = require('os');
const moment = require('moment-timezone');
const fs = require('fs');

moment.tz.setDefault("America/Phoenix");

var startime = process.env.npm_config_START_TIME
var startime1 = startime + " 00:00:00 MST"
var endtime = process.env.npm_config_END_TIME
var endtime1 = endtime + " 23:59:59 MST"
var apitoken = process.env.npm_config_API_TOKEN
var app_name = process.env.npm_config_APP_NAME1
console.log("Arguments1 -->" + startime1)
console.log("Arguments2 -->" + endtime1)
//console.log("Arguments3 -->" + apitoken)

//var stime = "06/20/2022 00:00:00 MST"
var dstime = new Date(startime1);
var mm = moment.utc(dstime, "YYYY-MM-DD HH:mm:ss");
var sutc = mm.format("YYYY-MM-DD HH:mm:ss");
//console.log("UTC Time==>" + sutc); //
var tz = 'America/Phoenix';
var smtc = mm.clone().tz(tz).format("YYYY-MM-DD HH:mm:ss")
//console.log("Phoenix time==>" + smtc);

//var etime = "06/21/2022 00:00:00 MST"
var detime = new Date(endtime1);
var emm = moment.utc(detime, "YYYY-MM-DD HH:mm:ss");
var eutc = emm.format("YYYY-MM-DD HH:mm:ss");
//console.log("UTC Time==>" + eutc); //
var tz = 'America/Phoenix';
var emtc = emm.clone().tz(tz).format("YYYY-MM-DD HH:mm:ss")

//var app_name = "vPOD - Chrome Agent"

var AETI_AtWork_CIW2_Chrome_Agent = null
var AETI_AtWork_CIW2_Chrome_Agent_PEAK = null
var AETI_AtWork_GOPM_Card_Profile_Chrome_Agent_PEAK = null
var AETI_AtWork_Reporting_Corporate_Card_Enhanced_Chrome_Agent_PEAK = null
var AETI_AtWork_Standard_Reporting_Chrome_Agent_PEAK = null
var AETI_GOPM_Corporate_Online_Payment_Chrome_Agent_PEAK = null
var AETI_GOPM_Domestic_Chrome_Agent = null
var AETI_GOPM_International_Chrome_Agent_PEAK = null
var AFC_AU_PA_Chrome_Agent_PEAK = null
var AFC_Script_2_Chrome_Agent = null
var atWork_Billing_Center_Chrome_Agent_PEAK = null
var Atwork_Card_Info_Web_Stmts_Chrome_Agent = null
var Global_Apply_for_Card_Chrome_Agent_PEAK = null
var GOPM_AFC_Chrome_Agent_PEAK = null
var GOPM_atwork_NextGen_Chrome_Agent_PEAK = null
var GOPM_Cancel_Card_Chrome_Agent = null
var GOPM_Intl_Card_Profile_Chrome_Agent = null
var GOPM_Manage_Limits_Chrome_Agent = null
var vPayment_External_URL_Chrome_Agent = null
var vPOD_Chrome_Agent = null

console.log('app_name =>'+app_name);

switch(app_name){
    case "AETI_AtWork_CIW2_Chrome_Agent" :
        AETI_AtWork_CIW2_Chrome_Agent='AETI - AtWork - CIW2 - Chrome Agent'
        DTAppNameReplaced = AETI_AtWork_CIW2_Chrome_Agent.split(' ').join('%20')
        break;
	case "AETI_AtWork_CIW2_Chrome_Agent_PEAK" :
        AETI_AtWork_CIW2_Chrome_Agent_PEAK='AETI - AtWork - CIW2 - Chrome Agent - PEAK'
        DTAppNameReplaced = AETI_AtWork_CIW2_Chrome_Agent_PEAK.split(' ').join('%20')
        break;
    case "AETI_AtWork_GOPM_Card_Profile_Chrome_Agent_PEAK" :
        AETI_AtWork_GOPM_Card_Profile_Chrome_Agent_PEAK='AETI - AtWork GOPM 5.1 Card Profile - Chrome Agent - PEAK'
        DTAppNameReplaced=AETI_AtWork_GOPM_Card_Profile_Chrome_Agent_PEAK.split(' ').join('%20')
        break;
    case "AETI_AtWork_Reporting_Corporate_Card_Enhanced_Chrome_Agent_PEAK" :
        AETI_AtWork_Reporting_Corporate_Card_Enhanced_Chrome_Agent_PEAK='AETI - AtWork Reporting Corporate Card Enhanced - Chrome Agent - PEAK'
        DTAppNameReplaced=AETI_AtWork_Reporting_Corporate_Card_Enhanced_Chrome_Agent_PEAK.split(' ').join('%20')
        break;
    case "AETI_AtWork_Standard_Reporting_Chrome_Agent_PEAK" :
        AETI_AtWork_Standard_Reporting_Chrome_Agent_PEAK='AETI - AtWork Standard Reporting - Chrome Agent - PEAK'
        DTAppNameReplaced=AETI_AtWork_Standard_Reporting_Chrome_Agent_PEAK.split(' ').join('%20')
        break;
    case "AETI_GOPM_Corporate_Online_Payment_Chrome_Agent_PEAK" :
        AETI_GOPM_Corporate_Online_Payment_Chrome_Agent_PEAK='AETI - GOPM Corporate Online Payment - Chrome Agent - PEAK'
        DTAppNameReplaced=AETI_GOPM_Corporate_Online_Payment_Chrome_Agent_PEAK.split(' ').join('%20')
        break;
    case "AETI_GOPM_Domestic_Chrome_Agent" :
        AETI_GOPM_Domestic_Chrome_Agent='AETI - GOPM Domestic - Chrome Agent'
        DTAppNameReplaced=AETI_GOPM_Domestic_Chrome_Agent.split(' ').join('%20')
        break;
    case "AETI_GOPM_International_Chrome_Agent_PEAK" :
        AETI_GOPM_International_Chrome_Agent_PEAK='AETI - GOPM International - Chrome Agent - PEAK'
        DTAppNameReplaced=AETI_GOPM_International_Chrome_Agent_PEAK.split(' ').join('%20')
        break;
    case "AFC_AU_PA_Chrome_Agent_PEAK" :
        AFC_AU_PA_Chrome_Agent_PEAK='AFC AU PA - Chrome Agent - PEAK'
        DTAppNameReplaced=AFC_AU_PA_Chrome_Agent_PEAK.split(' ').join('%20')
        break;
    case "AFC_Script_2_Chrome_Agent" :
        AFC_Script_2_Chrome_Agent='AFC Script 2 -- Chrome Agent'
        DTAppNameReplaced=AFC_Script_2_Chrome_Agent.split(' ').join('%20')
        break;
    case "atWork_Billing_Center_Chrome_Agent_PEAK" :
        atWork_Billing_Center_Chrome_Agent_PEAK='atWork Billing Center - Chrome Agent - PEAK'
        DTAppNameReplaced=atWork_Billing_Center_Chrome_Agent_PEAK.split(' ').join('%20')
        break;
    case "Atwork_Card_Info_Web_Stmts_Chrome_Agent" :
        Atwork_Card_Info_Web_Stmts_Chrome_Agent='Atwork Card Info Web Stmts - Chrome Agent'
        DTAppNameReplaced=Atwork_Card_Info_Web_Stmts_Chrome_Agent.split(' ').join('%20')
        break;
    case "Global_Apply_for_Card_Chrome_Agent_PEAK" :
        Global_Apply_for_Card_Chrome_Agent_PEAK='Global Apply for Card - Chrome Agent - PEAK'
        DTAppNameReplaced=Global_Apply_for_Card_Chrome_Agent_PEAK.split(' ').join('%20')
        break;
    case "GOPM_AFC_Chrome_Agent_PEAK" :
        GOPM_AFC_Chrome_Agent_PEAK='GOPM AFC - Chrome Agent - PEAK'
        DTAppNameReplaced=GOPM_AFC_Chrome_Agent_PEAK.split(' ').join('%20')
        break;
    case "GOPM_atwork_NextGen_Chrome_Agent_PEAK" :
        GOPM_atwork_NextGen_Chrome_Agent_PEAK='GOPM atwork_NextGen - Chrome Agent - PEAK'
        DTAppNameReplaced=GOPM_atwork_NextGen_Chrome_Agent_PEAK.split(' ').join('%20')
        break;
    case "GOPM_Cancel_Card_Chrome_Agent" :
        GOPM_Cancel_Card_Chrome_Agent='GOPM Cancel Card - Chrome Agent'
        DTAppNameReplaced=GOPM_Cancel_Card_Chrome_Agent.split(' ').join('%20')
        break;
    case "GOPM_Intl_Card_Profile_Chrome_Agent" :
        GOPM_Intl_Card_Profile_Chrome_Agent='GOPM Intl Card Profile - Chrome Agent'
        DTAppNameReplaced=GOPM_Intl_Card_Profile_Chrome_Agent.split(' ').join('%20')
        break;
    case "GOPM_Manage_Limits_Chrome_Agent" :
        GOPM_Manage_Limits_Chrome_Agent='GOPM Manage Limits - Chrome Agent'
        DTAppNameReplaced=GOPM_Manage_Limits_Chrome_Agent.split(' ').join('%20')
        break;
    case "vPayment_External_URL_Chrome_Agent" :
        vPayment_External_URL_Chrome_Agent='vPayment External URL - Chrome Agent'
        DTAppNameReplaced=vPayment_External_URL_Chrome_Agent.split(' ').join('%20')
        break;
    case "vPOD_Chrome_Agent" :
        vPOD_Chrome_Agent='vPOD - Chrome Agent'
        DTAppNameReplaced=vPOD_Chrome_Agent.split(' ').join('%20')
        break;
    case "AETI_GOPM_Domestic_Chrome_Agent_PEAK" :
        AETI_GOPM_Domestic_Chrome_Agent_PEAK='AETI - GOPM Domestic - Chrome Agent - PEAK'
        DTAppNameReplaced=AETI_GOPM_Domestic_Chrome_Agent_PEAK.split(' ').join('%20')
        break;
    default: console.log("No Valid application")
        break;
}

var curl_start_time = moment.utc(dstime)
var curl_end_time = moment.utc(detime)
var curl_token = apitoken

var final_curl = curl_start_time + " " + curl_end_time
console.log("final_curl-->" + final_curl)

//enable below proxy for local
//shell.env["HTTP_PROXY"]="http://proxy.aexp.com:8080"
//shell.env["HTTPS_PROXY"]="http://proxy.aexp.com:8080"

//enable below proxy for Jenkins
//shell.env["HTTP_PROXY"]="http://proxy-appgw.aexp.com:9090"
//shell.env["HTTPS_PROXY"]="http://proxy-appgw.aexp.com:9090"

var child_process = require('child_process');

function runCmd(cmd)
{
    var resp = child_process.execSync(cmd);
    var result = resp.toString('UTF8');
    return result;
}

var cmd = 'curl --proxy http://proxy-appgw.aexp.com:9090 -X GET "https://bhs09256.live.dynatrace.com/api/v1/userSessionQueryLanguage/table?query=SELECT%20startTime%2C%20DATETIME%28startTime%2C%27yyyy%2FMM%2Fdd%20HH%3Amm%3Ass%27%29%20AS%20Start_time%2C%20browserMonitorName%2C%20city%20%2CendReason%20FROM%20usersession%20WHERE%20browserFamily%3D%27Synthetic%20monitor%27%20and%20endReason%3D%22TEST_FAILED%22%20AND%20%28browserMonitorName%3D%27'+DTAppNameReplaced+'%27%29%20ORDER%20BY%20startTime%20desc&startTimestamp='+curl_start_time+'&endTimestamp='+curl_end_time+'&pageSize=1000&addDeepLinkFields=false&explain=false" -H "accept: application/json" -H "Authorization: Api-Token '+curl_token+'"';
console.log("final_cmd-->" + cmd);
//var cmd1 = 'curl -x "http://proxy.aexp.com:8080" "https://proxy.aexp.com:8080"'

//var result1 = runCmd(cmd1);
var result = runCmd(cmd);
//console.log("final result1-->" + result1);
console.log("final result-->" + result);

fs.writeFileSync('Output.json', result, err => {
    if (err) {
        console.error(err);
    }
});

// read JSON from a file
const todos = JSON.parse(fs.readFileSync('Output.json'));
var csvvalues = todos['values']
var csvvaluesMST=null;
var csvvaluesMST="TIME UST(milli),TIME MST,SCRIPT NAME,NODE AGENT,STATUS"+ os.EOL


for(var j=0; j<csvvalues.length; j++) {

    console.log("Record:"+(j+1) +" ==> " + csvvalues[j])
    var timeouts = csvvalues[j].toString().substr(14,19)
    var timeouts1 = timeouts + " UTC"
    var detime1 = new Date(timeouts1);
    var mm1 = moment.utc(detime1, "YYYY-MM-DD HH:mm:ss");
    var eutc = mm1.format("YYYY-MM-DD HH:mm:ss");
    var tz = 'America/Phoenix';
    var mst2 = mm1.clone().tz(tz).format("YYYY-MM-DD HH:mm:ss")


    if (csvvaluesMST == null){
        csvvaluesMST = csvvalues[j].toString().substr(0,14) + mst2 + csvvalues[j].toString().substr(14 + 19) + "," + os.EOL
    } else{
        csvvaluesMST = csvvaluesMST + csvvalues[j].toString().substr(0,14) + mst2 + csvvalues[j].toString().substr(14 + 19) + "," + os.EOL
    }
}

fs.writeFileSync('app/report/DT1_Report.csv', csvvaluesMST, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});