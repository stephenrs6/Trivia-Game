$(".startbutton").on("click", function () {
    $(".startbutton").hide();
    var container = $("#question-container")

    for (var i = 0; i < questions.length; i++) {
        var oneQuestion = questions[i];
        var qValue = oneQuestion.Q;
        var ansValue = oneQuestion.ans;
        var questiondiv = $("<div>" + qValue + "</div>");
        var answerdiv = $("<div>" + ansValue + "</div>");
        container.append(questiondiv);

        for (var a = 0; a < ansValue.length; a++) {
            var ansSelection = $('<div class ="radio"> <label class="radio-inline"><input type="radio" name="optradio">' + ansValue[a] + '</label></div>');
            container.append(ansSelection);
        }
        
        

    }
});
















var questions = [{
    Q: "What is the capital of New Zealand?",
    ans: ["Auckland", "Wellington", "Syndey", "Canberra"]
},
{
    Q: "What is the capital of Norway?",
    ans: ["Helsinki", "Oslo", "Stockholm", "Copenhagen"]
},
{
    Q: "What is the capital of China?",
    ans: ["Shanghai", "Beijing", "Taipei", "Pyongyang"]
},
{
    Q: "What is the capital of Indonesia?",
    ans: ["Jakarta", "Mumbai", "Singapore", "Manila"]
},
{
    Q: "What is the capital of Indonesia?",
    ans: ["Havana", "Buenos Aires", "Kingston", "Port-au-Prince"]
}
]





// $(document).ready(function () {
//     resetGame();
// });