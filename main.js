function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/oRq2H1eNq/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(e, r) {
    console.log("Got Result");
}