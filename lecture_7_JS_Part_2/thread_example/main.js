let worker = undefined;

function startWorker(){
    if(typeof worker == "undefined"){
        worker = new Worker("worker.js");
        console.log("worker set");
    }
    worker.onmessage = function(event){
        document.getElementById("result").innerHTML = event.data;
    }
}

function stopWorker(){
    worker.terminate();
    worker = undefined;
}