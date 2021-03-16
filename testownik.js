/*
=========== KOD Testownika ===========
W tym miejscu nie należy nic zmieniać
======================================
*/

let uA = [];

function selectAnswer(){
        uA = [];
        // Losowanie pytania
        questionIndex = Math.round(Math.random()*(examBase.length-1));

        //dodawanie pytania
        question = $("<div></div>)").addClass("question").text(examBase[questionIndex][0]);
        $("#question").append(question);
        question.fadeIn(500);

        //dodawanie odpowiedzi
        for(let i = 1; i <= 4; i++){
            answer = $("<div></div>").addClass("answer").text(examBase[questionIndex][i]).attr("index", i);
            $("#answers").append(answer);
            answer.fadeIn(500);
        }

        //tablica, która będzie zawierać odpowiedź użytkowanika [0] i poprawną odpowiedź [1]
        let answers = $(".answer");
        
        answers.on("click", function(){
            uA = [];
            answers.removeClass("selected");
            $(this).toggleClass("selected");
            // console.log(this.answer.attr());
            userAnswer = $(this).attr("index");
            console.log(userAnswer);
            uA.push(examBase[questionIndex][5])
            uA.push($(this).attr("index"));
            
        })

        let checkButton = $("<button></button>").addClass("checkButton").text("Check").on("click", function(){

            let wrongAnswer = $($(".answer")[uA[1]-1]);
            let correctAnswer = $($(".answer")[uA[0]-1]);
            //sprawdzanie poprawności odpowiedzi
            if( parseInt(uA[0]) == uA[1]){
                answers.removeClass("selected");
                correctAnswer.addClass("correct");
            }else if(uA.length == 0){
                uA.push(examBase[questionIndex][5])
                correctAnswer = $($(".answer")[uA[0]-1]);
                correctAnswer.addClass("correct");
            }else{
                answers.removeClass("selected");
                correctAnswer.addClass("correct");
                wrongAnswer.addClass("wrong");
            }
            answers.off();
            checkButton.remove();

            let nextButton = $("<button></button>").addClass("checkButton").text("Next").on("click", function(){
                //usuwanie elementów
                $(".question")[0].remove();
                answers.each(function(){
                    answers.remove();    
                })
                
                $(nextButton).remove();

                selectAnswer();
                checkButton.fadeOut(500);
            })
            checkButton.fadeOut(500);
            $("#answers").append(nextButton);
            nextButton.fadeIn(500)
            
        });

        $("#answers").append(checkButton); 
        checkButton.fadeIn(500);

};

