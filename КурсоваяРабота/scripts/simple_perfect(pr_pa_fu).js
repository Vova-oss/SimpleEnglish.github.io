// реализация перехода на другие страницы
function next(){
    window.location.href = 'teor_continuous.html';
}

function previous(){
    window.location.href = 'teor_perfect.html';
}




// массив вопросов
let questions = ["I ___ to bed at ten o'clock every day.",                                  //1
                 "I ___ to bed at ten o'clock yesterday.",                                  //2
                 "I ___ to bed at ten o'clock tomorrow.",                                   //3
                 "I ___ to the cinema every day.",                                          //4
                 "I ___ to the cinema yesterday.",                                          //5
                 "I ___ to the cinema tomorrow.",                                           //6
                 "___ you watch TV every day?",                                             //7
                 "___ you watch TV yesterday?",                                             //8              
                 "___ you watch TV tomorrow?",                                              //9
                 "When ___ you leave home for school every day?",                           //10
                 "She ___ already finished.",                                               //11
                 "He ___ read books since he was a child.",                                 //12
                 "___ you ever been to Paris?",                                             //13
                 "We ___ lived in Tokyo for 5 years.",                                      //14
                 "It was difficult for him now, as he ___ never done it before.",           //15
                 "He ___ never done it before, that is why it was difficult for him now.",  //16
                 "John ___ become a lawyer by 2019.",                                       //17
                 "By the time my parents come I ___ washed all the dishes.",                //18
                 "She ___ cooked lunch till you come.",                                     //19
                 "We ___ made a decision until you come."];

// двумерный массив вариантов ответов
let var_answers = [['go','went','will go'],                         //1
                   ['go','went','will go'],                         //2
                   ['go','went','will go'],                         //3
                   ['do not go','did not go','will not go'],        //4
                   ['do not go','did not go','will not go'],        //5
                   ['do not go','did not go','will not go'],        //6
                   ['Do','Did','Will'],                             //7
                   ['Do','Did','Will'],                             //8
                   ['Do','Did','Will'],                             //9
                   ['do','did','will'],                             //10
                   ['has', 'had', 'will have'],                     //11
                   ['has', 'had', 'will have'],                     //12
                   ['Have', 'Had', 'Will have'],                    //13
                   ['have', 'had', 'will have'],                    //14
                   ['has', 'had', 'will have'],                     //15
                   ['has', 'had', 'will have'],                     //16
                   ['has', 'had', 'will have'],                     //17
                   ['have', 'had', 'will have'],                    //18
                   ['has not', 'had not', 'will not have'],         //19
                   ['has not', 'had not', 'will not have']]; 

// массив правильных ответов
let answers = ['go',            //1
               'went',          //2
               'will go',       //3
               'do not go',     //4
               'did not go',    //5
               'will not go',   //6
               'Do',            //7
               'Did',           //8
               'Will',          //9
               'do',            //10
               'has',           //11
               'has',           //12
               'Have',          //13
               'have',          //14
               'had',           //15
               'had',           //16
               'will have',     //17
               'will have',     //18
               'will not have', //19
               'will not have'];     

//----------SIMPLE----------
//1. I (to go) to bed at ten o'clock every day.         go / went / will go    go
//2. I (to go) to bed at ten o'clock yesterday.         go / went / will go    went
//3. I (to go) to bed at ten o'clock tomorrow.          go / went / will go    will go
//4. I (not to go) to the cinema every day.             do not go / did not go / will not go    do not go
//5. I (not to go) to the cinema yesterday.             do not go / did not go / will not go    did not go
//6. I (not to go) to the cinema tomorrow.              do not go / did not go / will not go    will not go
//7. You (to watch) TV every day?                       do / did / will    do
//8. You (to watch) TV yesterday?                       do / did / will    did
//9. You (to watch) TV tomorrow?                        do / did / will    will
//10. When you (to leave) home for school every day?    do / did / will    do


//----------PERFECT----------
//11. She (to have) already finished.                    has / had / will have       has
//12. He (to have) read books since he was a child.      has / had / will have       has
//13. (to have) you ever been to Paris?                  have / had / will have     have
//14. We (to have) lived in Tokyo for 5 years.            have / had / will have     have
//15. It was difficult for him now, as he (to have) never done it before.     has / had / will have    had
//16. He (to have) never done it before, that is why it was difficult for him now. has / had / will have    had
//17. John (to have) become a lawyer by 2019.            has / had / will have     will have
//18. By the time my parents come I (to have) washed all the dishes.    have / had / will have   will have
//19. She (to have) cooked lunch till you come.      has not/ had not / will not have   will not have
//20. We (to have) made a decision until you come.  has not/ had not / will not have   will not have