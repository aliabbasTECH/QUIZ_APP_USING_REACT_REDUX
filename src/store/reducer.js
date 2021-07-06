

const INITIAL_STATE={
    data:[{
            question: "HTML stands for __________",
            options: [
              "Hypertext markup langauge",
              "Programming langauge",
              "markup language",
            ],
            correctAns: "Hypertext markup langauge",
          },
          {
            question: "CSS stands for __________",
            options: [
              "Cascading Style sheet",
              "Programming langauge",
              "markup language",
            ],
            correctAns: "Cascading Style sheet",
          },
          {
            question: "HTML is programming language",
            options: ["True", "False"],
            correctAns: "False",
          },
          {
            question:"what is javascript ",
            options:["programing languag", "interprenter","computer language", ],
            CorrectAns:["programing languag",]
          
          }]
        
    
};

const AppReducer =(state = INITIAL_STATE,action)=>{
   console.log("state data in reducer ",state)
    switch (action.type){
        case "GETDATA":
            return{
                ...state,
                data:action.data
            }
            default:
                return state
    }
    
}

export default AppReducer;
