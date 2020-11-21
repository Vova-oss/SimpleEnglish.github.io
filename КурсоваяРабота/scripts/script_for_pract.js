let allDiv = document.querySelectorAll('.select'), // все секции здесь
    knopka = document.querySelector('.btn-end'); // собственно, это кнопка...

let amount_correct_answers = 0;




// данные переменные перенесены в другие js файлы, для удобства (новый js с базой для нового теста)
//let questions = ["first","second","third"]; // массив вопросов
//let var_answers = [['14','23','1'],['22','2','61'],['3','64','19']]; // двумерный массив вариантов ответов
//let answers = ['1','2','3']; // массив правильных ответов


// функция для снятия синих шапок
function undress(){
    let all_blue = document.querySelectorAll(".number_question");
    for(let i =0;i<all_blue.length;i++){
        all_blue[i].style ="background:rgba(255, 255, 255, 0)";
    }
}

// функция перещёлкивания кнопочек
function toggle_button(){
    let btn_verifity = document.querySelector('.btn_area');
    let btn_next = document.querySelector('.after_answer');
    console.log(btn_next);
    btn_verifity.style = "display:none";
    btn_next.style = "display:block";
    
    if(amount_correct_answers==5){
        document.querySelector('.good_mark').style = "display:block;text-align: center;"
    }else document.querySelector('.bad_mark').style = "display:block;text-align:center;"
}

// высвечиваются правильные ответы в неправильных блоках 
function correct_answer_visible(input, j){
    // input - все инпуты в блоке
        for(let i = 0; i<input.length;i++){   
            //Если значение потенциального равно правильному ответу и это radio чекнуто, то вернёт true                       
            if(input[i].querySelector('.answer').textContent.localeCompare(answers[j])==0){
                input[i].querySelector('.answer').style = "color: green; border-bottom: 1px solid;";
                break;
            }
        }
}

// блокируем все radio
function radio_block(){
    let all_input = document.querySelectorAll("input");
    for(let i=0;i<all_input.length;i++){
        all_input[i].style = "pointer-events: none;"
    }
}

// проверка на чекнутость
function check(currentBlock){
    let flag = false;
    let input =  currentBlock.querySelectorAll('.pneed>input'); // закидываем все radio
    
    // ищем, есть ли хотя бы одно radio чекнутое
    for(let i= 0; i<input.length; i++){
        if(input[i].checked){
            flag = true;
            break;
        }
    }
    
    // если нет чекнутого, то сообщение об ошибке, иначе сообщение уберётся, либо же не появится
    if(!flag){
        currentBlock.querySelector('.eror').classList.add("show");
        return true;
    }else{
        currentBlock.querySelector('.eror').classList.remove("show");
//        currentBlock.querySelector('.eror').setAttribute("style", "display: none");
        return false;
    };
    
}


// проверка на правильность выбранных ответов для одного блока
function checked(input,j){
        // input - все инпуты в блоке
        for(let i = 0; i<input.length;i++){   
            //Если значение потенциального равно правильному ответу и это radio чекнуто, то вернёт true                       
            if((input[i].querySelector('.answer').textContent.localeCompare(answers[j])==0) && input[i].querySelector("input").checked){
                return true;
            }
        }

        return false;
}



let debug = ()=> {
    amount_correct_answers = 0; // объявление корректных ответов
    let boolevo = true;
    for(let i= 0; i< allDiv.length; i++){
        let currentBlock = allDiv[i];//рассматриваем каждый сектор в отдельности
        if(check(currentBlock)){
            boolevo = false; //Если есть сообщение об ошибке (нет чекнутого)
        };
    }


    
    
    
    /////// если всё чекнуто, идёт проверка 
    if(boolevo){
        for(let i =0;i<allDiv.length;i++){//Проходим по всем блокам
            let j;
            
            for(let k = 0;k<questions.length;k++){// Проходим по всему массиву вопросов
                //Если вопрос равен вопросу из данного блока, то мы запоминаем номер этого вопроса
                if(questions[k].localeCompare(allDiv[i].querySelector('.question').textContent)==0){                    
                    j=k;
                    break;
                }
            }
            
           // console.log(allDiv[i]);
            if(checked(allDiv[i].querySelectorAll(".pneed"),j)){
                allDiv[i].style = 'background-color: rgba(67, 148, 0, 0.5); border-radius: 20px; ';
                amount_correct_answers= amount_correct_answers + 1;
                //console.log(amount_correct_answers);
            }else{
                allDiv[i].style = 'background-color: rgba(255, 0, 0, 0.2); border-radius: 20px;'
                
                correct_answer_visible(allDiv[i].querySelectorAll(".pneed"),j);
                
            }
        }
        
        // снимаем все синие шапки у заданий
        undress();
        // перещелкивание кнопочек
        toggle_button();
        // блокируем все radio
        radio_block();
        
    }else{
        for(let i = 0;i<allDiv.length;i++){
           if(allDiv[i].querySelector('.eror').classList.contains("show")){
//               document.location.href = 'pract.html#zadanie' + String(i+1);
                
               document.getElementById('zadanie'+String(i+1)).scrollIntoView({ behavior: 'smooth' })
           
//               document.getElementById("zadanie1").scrollIntoView({ behavior: 'smooth' })
               break;
           }
        }
    }
    
    
    // проставляем Количество верных ответов
    console.log(amount_correct_answers);
    document.getElementById('corrent_answer').innerHTML = amount_correct_answers;
}

knopka.addEventListener('click', debug);




//allDiv = document.querySelectorAll('.select');// берём все блоки целиком
for(let i =0;i<allDiv.length;i++){ // проход по этим секциям
    
    let a = Math.floor(Math.random()*questions.length); // рандомное число
    
    // проверка на повторы вопросов
    let flag = true;
    while(flag){
        a = Math.floor(Math.random()*questions.length);
        flag = false;
        for(let k =0;k<i;k++){
            // если в блоке question текст будет таким же, как и вопрос в числе, что мы только что сгенерировали, функция localeCompare вернёт 0
            if((allDiv[k].querySelector('.question').textContent.localeCompare(questions[a]))==0){
                flag = true;
                break;
            }
        }
    }
    
    allDiv[i].querySelector('.question').innerHTML = questions[a]; // блоку вопроса одной секции ставим рандомный вопрос из массива
    
    let allAnswersInDiv = allDiv[i].querySelectorAll('.answer');// все ответы одной секции закидываем в переменную
    for(let j = 0;j<(allAnswersInDiv.length);j++){// проход по этим ответам
                    let b;
                    // проверка на повторы ответов
                    let flag = true;
                    while(flag){
                        b = Math.floor(Math.random()*3);
                        flag = false;
                        for(let k =0;k<j;k++){
                            // если в блоке question текст будет таким же, как и вопрос в числе, что мы только что сгенерировали, функция localeCompare вернёт 0
                            if((allAnswersInDiv[k].textContent.localeCompare(var_answers[a][b]))==0){
                                flag = true;
                                break;
                            }
                        }
                    }
        
        allAnswersInDiv[j].innerHTML = var_answers[a][b];// задаём ответ равный ответу в массиве
    }
}























