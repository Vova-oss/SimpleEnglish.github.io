// реализация перехода на другие страницы
function next(){
    window.location.href = 'teor_perfect_continuous.html';
}

function previous(){
    window.location.href = 'teor_continuous.html';
}




// массив вопросов
let questions = ["___ you watch TV tomorrow?",                                              //1
                 "When ___ you leave home for school every day?",                           //2
                 "When ___ you leave home for school yesterday?",                           //3
                 "When ___ you leave home for school tomorrow?",                            //4                 
                 "My brother ___ to work every day.",                                       //5                 
                 "Yesterday he ___ to work.",                                               //6
                 "She ___ already.",                                                        //7
                 "He ___ books since he was a child.",                                      //8
                 "___ you ever been to Paris?",                                             //9
                 "We ___ in Tokyo for 5 years.",                                            //10
                 "It was difficult for him now, as he never ___ it before",                 //11
                 "He never ___ it before, that is why it was difficult for him now.",       //12
                 " She ___ hair now.",                                                      //13
                 "We ___ soon.",                                                            //14
                 "I ___ a book when mom called me.",                                        //15  
                 "While John ___ the flat, you were reading.",                              //16
                 "Jane always ___ at work late.",                                           //17
                 "Bob constantly ___ mistakes in equations.",                               //18
                 "Michael ___ for the final exam when Jess comes back home.",               //19
                 "Polly ___ to music and drawing a picture at the same time."];                                       

// двумерный массив вариантов ответов
let var_answers = [['Will have','Will be','Will'],                              //1
                   ['do','have','are'],                                         //2                      
                   ['had','did','was'],                                         //3                      
                   ['will have','will be','will'],                              //4                   
                   ['goes', 'has gone', 'is going'],                            //5                   
                   ["didn't go", "hadn't gone", "wasn't going"],                //6
                   ["has finished", "finish", "is finishing"],                  //7
                   ['has read', 'read', 'is reading'],                          //8
                   ['Have', 'Had', 'Will have'],                                //9
                   ['have lived', 'live', 'are living'],                        //10
                   ['did', 'had done', 'was doing'],                            //11
                   ['did', 'had done', 'was doing'],                            //12
                   ['is drying', 'dries', 'has dried'],                         //13
                   ['are leaving', 'left', 'have left'],                        //14
                   ['was reading', 'read', 'have read'],                        //15
                   ['was cleaning', 'cleaned', 'have cleaned'],                 //16
                   ['was coming', 'come', 'have come'],                         //17
                   ['was doing', 'did', 'have did'],                            //18
                   ['will be preparing', 'will prepare', 'will have prepared'], //19
                   ['will be listening', 'will listen', 'will have listened']];   

// массив правильных ответов
let answers = ['Will',              //1
               'do',                //2
               'did',               //3
               'will',              //4               
               'goes',              //5               
               "didn't go",         //6
               "has finished",      //7
               "has read",          //8
               'have',              //9
               'have lived',        //10
               'had done',          //11
               'had done',          //12
               'is drying',         //13
               'are leaving',       //14
               'was reading',       //15
               'was cleaning',      //16
               'was coming',        //17
               'was doing',         //18
               'will be preparing', //19
               'will be listening'];          





//----------SIMPLE----------
//1. You (to watch) TV tomorrow?                       Will have / Will be / Will    Will    
//2. When (do) you leave home for school every day?    do / have / are    do
//3. When (did) you leave home for school yesterday?    had / did / was    did
//4. When (will) you leave home for school tomorrow?     will have / will be / will    will
//5. My brother (goes) to work every day.             goes / has gone / is going   goes
//6. Yesterday he (didn't go) to work.                 didn't go / hadn't gone / wasn't going   didn't go



//----------PERFECT----------
//7. She (has finished) already.                             has finished / finish / is finishing       has finished
//8. He (has read) books since he was a child.           has read / read / is reading       has read
//9. (have) you ever been to Paris?                  Have / Had / Will have     have
//10. We (have lived) in Tokyo for 5 years.                have lived / live / are living     have lived
//11. It was difficult for him now, as he never (had done) it before.             did / had done / was doing    had done
//12. He never (had done) it before, that is why it was difficult for him now.    did / had done / was doing    had done



//----------CONTINUOUS----------
//13. She (is drying) hair now.   is drying / dries / has dried       is drying
//14. We (are leaving) soon.      are leaving / left / have left      are leaving
//15. I (was reading) a book when mom called me.     was reading / read / have read     was reading
//16. While John (was cleaning) the flat, you were reading.   was cleaning / cleaned / have cleaned   was cleaning
//17. Jane always (was coming) at work late.      was coming / come / have come   was coming
//18. Bob constantly (was doing) mistakes in equations.   was doing / did / have did    was doing
//19. Michael (will be preparing) for the final exam when Jess comes back home.   will be preparing / will prepare / will have prepared       will be preparing
//20. Polly (will be listening) to music and drawing a picture at the same time.   will be listening / will listen / will have listened       will be listening
