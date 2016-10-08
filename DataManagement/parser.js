var fs = require("fs");


const FILE_PATH = "./data";
const DATA_PATH = "./data_raw";

const NONSTRING_FIELDS = {
    timestamp : parseInt,
    lat: parseFloat,
    lng: parseFloat,
    signal_inst : parseFloat,
    singal_min : parseFloat,
    singal_max: parseFloat,
    signal_avg: parseFloat,
    status: parseInt,
    net: parseInt,
    lac: parseInt,
    cid: parseInt,
    psc: parseInt,
    speed: parseFloat,
    satellites: parseInt,
    precision1: parseInt,
    activity: parseInt
}

var number_appends = 0;

if(fs.existsSync(FILE_PATH)){
    fs.unlinkSync(FILE_PATH);
}

fs.readdir(DATA_PATH, function(err,files){

    if(err) throw err;


    for(var i = 0; i < files.length; ++i){

        console.log("Parsing file "+(i+1)+"/"+files.length);

        readAndParseDataFile(files[i]);
    }
    
    console.log(number_appends + " appends done.");
});

function readAndParseDataFile(filename){

    raw_data = fs.readFileSync(DATA_PATH +"/" + filename) 
        
    parseData(raw_data);

    delete raw_data;

}

function parseData(raw_data_buffer){

    var raw_data = ""+raw_data_buffer;

    var data_lines = raw_data.split("\n");

    delete raw_data;

    data_lines.splice(data_lines.length-1);

    var data_headers = data_lines[0].split(",");

    var data_body = data_lines.splice(1);

    var parsed_data = data_body.map(function(raw_row){

        var split_row = raw_row.split(",");

        var row = {};

        for(var i = 0; i < split_row.length; ++i){

            var key = data_headers[i];
            if(typeof NONSTRING_FIELDS[key] != "undefined")
                row[key] = NONSTRING_FIELDS[key](split_row[i]);    
            else
                row[key] = split_row[i];

        }

        if(row.activity == 0){
        
            var processed_row = processRow(row);
            
            saveRow(processed_row);

            delete processed_row;
        }
    });

}

function processRow(row){
    
    var usable_data = [];

    var row_date = new Date(row.timestamp);

    usable_data.push(row_date.getMonth());

    usable_data.push(row_date.getDay());

    usable_data.push(row.lat);

    usable_data.push(row.lng);

    usable_data.push(row.speed);

    return usable_data;
}

function saveRow(row){
    
    number_appends++;
    fs.appendFileSync(FILE_PATH, row.join(",") + "\n");
}
