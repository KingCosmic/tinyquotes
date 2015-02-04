var uHash = location.hash.substring(1);
var i = 0,
    fusion = quotes.concat(citas);
do {
    var quoSplited = quotes[i],
        quoQTS = quoSplited.split("|"),
        quo = quoQTS[0],
        tags = quoQTS[1],
        quoSplitDaSplited = quo.split("//"),
        quoText = quoSplitDaSplited[0],
        quoAuth = quoSplitDaSplited[1],
        y = 0;
    if (tags.indexOf(uHash) != -1) {
        console.log(quoText);
    };
    i++;
} while (i <= quotes.length);

for (var i = 0; i < fusion.length; i++) {
    
};