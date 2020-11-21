// реализация перехода на другие страницы
function next(){
    window.location.href = 'teor_perfect.html';
}

function previous(){
    window.location.href = 'teor_simple.html';
}




// массив вопросов
let questions = ["I ___ to bed at ten o'clock every day.",                  //1
                 "I ___ to bed at ten o'clock yesterday.",                  //2
                 "I ___ to bed at ten o'clock tomorrow.",                   //3
                 "I ___ to the cinema every day.",                          //4
                 "I ___ to the cinema yesterday.",                          //5
                 "I ___ to the cinema tomorrow.",                           //6
                 "___ you watch TV every day?",                             //7
                 "___ you watch TV yesterday?",                             //8              
                 "___ you watch TV tomorrow?",                              //9
                 "When ___ you leave home for school every day?",           //10
                 "When ___ you leave home for school yesterday?",           //11
                 "When ___ you leave home for school tomorrow?",            //12
                 "My brother ___ to work every day.",                       //13
                 "Yesterday he ___ to work.",                               //14
                 "What ___ you buy at the shop yesterday?",                 //15
                 "Yesterday my father ___ newspapers.",                     //16
                 "He ___ his homework tomorrow.",                           //17
                 "What mark ___ she get in her exam last week?",            //18
                 "He ___ on the TV to watch cartoons every morning.",       //19
                 "He ___ on the TV to watch cartoons yesterday morning.",   //20
                 "He ___ on the TV to watch cartoons tomorrow morning."];

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
                   ['do','did','will'],                             //11                      
                   ['do','did','will'],                             //12
                   ['goes', 'went', 'will go'],                     //13
                   ["didn't go", "doesn't go", "won't go"],         //14
                   ['did', 'do', 'will'],                           //15
                   ["didn't read", "doesn't read", "won't read"],   //16
                   ['did', 'do', 'will do'],                         //17
                   ['did', 'do', 'will'],                           //18
                   ['turned', 'turns', 'will turn'],                //19
                   ['turned', 'turns', 'will turn'],                //20
                   ['turned', 'turns', 'will turn']];

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
               'did',           //11
               'will',          //12
               'goes',          //13
               "didn't go",     //14
               'did',           //15
               "didn't read",   //16
               'will do',       //17
               'did',           //18
               'turns',         //19
               'turned',        //20
               'will turn'];

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
//11. When you (to leave) home for school yesterday?    do / did / will    did
//12. When you (to leave) home for school tomorrow?     do / did / will    will
//13. My brother (to go) to work every day.             goes / went / will go   goes
//14. Yesterday he (not to go) to work.                 didn't go / doesn't go / won't go   didn't go
//15. What you (to buy) at the shop yesterday?          did / do / will     did
//16. Yesterday my father (not to read) newspapers.     didn't read / doesn't read / won't read     didn't read
//17. He (to do) his homework tomorrow.                 did / do / will do     will do
//18. What mark she (to get) in her exam last week?     did / do / will     did
//19. He (to turn) on the TV to watch cartoons every morning.        turned / turns / will turn      turns   
//20. He (to turn) on the TV to watch cartoons yesterday morning.    turned / turns / will turn      turned
//21. He (to turn) on the TV to watch cartoons tomorrow morning.     turned / turns / will turn      will turn