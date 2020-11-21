// реализация перехода на другие страницы
function next(){
    window.location.href = 'index.html';
}

function previous(){
    window.location.href = 'teor_perfect_continuous.html';
}




// массив вопросов
let questions = ["He ___ his homework tomorrow.",                                               //1
                 "What mark ___ she get in her exam last week?",                                //2
                 "He ___ on the TV to watch cartoons every morning.",                           //3
                 "He ___ on the TV to watch cartoons yesterday morning.",                       //4
                 "He ___ on the TV to watch cartoons tomorrow morning.",                        //5
                 "He never ___ it before, that is why it was difficult for him now.",           //6
                 "John ___ a lawyer by 2019.",                                                  //7
                 "By the time my parents come I ___ washed all the dishes.",                    //8
                 "She ___  lunch till you come.",                                               //9
                 "We ___  a decision until you come.",                                          //10
                 "While John ___ the flat, you were reading.",                                  //11
                 "Jane always ___ at work late.",                                               //12
                 "Bob constantly ___ mistakes in equations.",                                   //13
                 "Michael ___ for the final exam when Jess comes back home.",                   //14
                 "Polly ___ to music and drawing a picture at the same time.",                  //15  
                 "Jane and David ___ for over three hours.",                                    //16
                 "Recently, I ___ really happy.",                                               //17
                 "My mother ___ in the garden since early morning.",                            //18
                 "Tony___ Spanish for a year before he moved to Madrid.",                       //19
                 "Jane and David ___ for over three hours by the time Paul arrives."];          

// двумерный массив вариантов ответов
let var_answers = [
                    ['will doing','will been doing','will do'],                                 //1              
                    ['did','was doing','had did'],                                              //2            
                    ['is turning','turns','has turned'],                                        //3       
                    ['turned','was turn','had been turning'],                                   //4              
                    ['will be turn','will have turned','will turn'],                            //5                       
                    ['did','had done','had been doing'],                                        //6              
                    ['will became','become','will have become'],                                //7         
                    ['have','had','will have'],                                                 //8               
                    ['will not have been cooking','will not cook','will not have cooked'],      //9               
                    ['will not have been made','will not made','will not have made'],           //10          
                    ['was cleaning','cleaned','have cleaned'],                                  //11             
                    ['was coming','come','have come'],                                          //12
                    ['was doing','did','have did'],                                             //13
                    ['will be preparing','will prepare','will have prepared'],                  //14   
                    ['will be listening','will listen','will have listened'],                   //15    
                    ['have been talking','are talking','talk'],                                 //16            
                    ['have been feeling','have felt','feel'],                                   //17      
                    ['has been working','are working','have worked'],                           //18              
                    ['had been studying','is studied','had studied'],                           //19         
                    ['will have been talking','will have talked','will talk']];   

// массив правильных ответов
let answers = ['will do',                   //1
               'did',                       //2
               'turns',                     //3
               'turned',                    //4
               'will turn',                 //5
               'had done',                  //6
               'will have become',          //7
               'will have',                 //8
               'will not have cooked',      //9
               'will not have made',        //10
               'was cleaning',              //11
               'was coming',                //12
               'was doing',                 //13
               'will be preparing',         //14
               'will be listening',         //15
               'have been talking',         //16
               'have been feeling',         //17
               'has been working',          //18
               'had been studying',         //19
               'will have been talking'];      



//----------SIMPLE----------
//1. He (to do) his homework tomorrow.                              will doing / will been doing / will do      will do
//2. What mark (did) she get in her exam last week?                  did / was doing / had did         did
//3. He (to turn) on the TV to watch cartoons every morning.        is turning / turns / has turned      turns  
//4. He (to turn) on the TV to watch cartoons yesterday morning.    turned / was turn / had been turning      turned
//5. He (to turn) on the TV to watch cartoons tomorrow morning.     will be turn / will have turned / will turn      will turn


//----------PERFECT----------
//6. He never (to have) it before, that is why it was difficult for him now.            did / had done / had been doing       had done
//7. John (to have) a lawyer by 2019.                                                   will became / become / will have become       will have become
//8. By the time my parents come I (to have) washed all the dishes.                     have / had / will have      will have
//9. She (to have)  lunch till you come.                                                will not have been cooking/ will not cook / will not have cooked   will not have cooked
//10. We (to have)  a decision until you come.                                          will not have been made/ will not made / will not have made   will not have made


//----------CONTINUOUS----------
//11. While John (was cleaning) the flat, you were reading.   was cleaning / cleaned / have cleaned   was cleaning
//12. Jane always (was coming) at work late.      was coming / come / have come   was coming
//13. Bob constantly (was doing) mistakes in equations.   was doing / did / have did    was doing
//14. Michael (will be preparing) for the final exam when Jess comes back home.   will be preparing / will prepare / will have prepared       will be preparing
//15. Polly (will be listening) to music and drawing a picture at the same time.   will be listening / will listen / will have listened       will be listening


//----------PERFECT-CONTINUOUS----------
//16. Jane and David (have been talking) for over three hours.   have been talking / are talking / talk     have been talking
//17. Recently, I (have been feeling) really happy.     have been feeling / have felt / feel            have been feeling
//18. My mother (has been working) in the garden since early morning.   has been working / are working / have worked        has been working
//19. Tony (had been studying) Spanish for a year before he moved to Madrid.    had been studying / is studied / had studied        had been studying
//20. Jane and David (will have been talking) for over three hours by the time Paul arrives.    will have been talking / will have talked / will talk       will have been talking
