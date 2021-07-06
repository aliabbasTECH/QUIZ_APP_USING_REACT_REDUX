import { useEffect, useState  } from 'react'
import { useSelector,useDispatch  } from 'react-redux'



function Home() {

    const state =useSelector(state =>state)
  // const [questions, setQuestions]=useState([
    // {
    //   question: "HTML stands for __________",
    //   options: [
    //     "Hypertext markup langauge",
    //     "Programming langauge",
    //     "markup language",
    //   ],
    //   correctAns: "Hypertext markup langauge",
    // },
    // {
    //   question: "CSS stands for __________",
    //   options: [
    //     "Cascading Style sheet",
    //     "Programming langauge",
    //     "markup language",
    //   ],
    //   correctAns: "Cascading Style sheet",
    // },
    // {
    //   question: "HTML is programming language",
    //   options: ["True", "False"],
    //   correctAns: "False",
    // },
    // {
    //   question:"what is javascript ",
    //   options:["programing languag", "interprenter","computer language", ],
    //   CorrectAns:["programing languag",]
    
    // },
  // ])
  console.log("this data in home",state)
//   useEffect(()=>{
//     setQuestions(state)   
//  },[])


  


  const [ind, setInd]=useState(0)
  const [score, setScore]=useState(0)
  const [selectedval, setSelectval]=useState("")
  const [showResult, setShowResult]=useState(false)



  function checkanswer(){
//  console.log(e)
    
//     let selectedval = e;
    let correctValue = state.data[ind].correctAns;
    if(selectedval == correctValue){
      setScore(score+1)
    }
    if (state.data.length == ind + 1){
        setShowResult(true);
    }else{ setInd(ind + 1); }
    
  }
  console.log(score)
  
  return (
    <div className="App">
        
        <div className="container mt-5">
       { ! showResult ? ( <div className="d-flex justify-content-center row">
          <div className="col-md-10 col-lg-10">
            <div className="border">
              <div className="question bg-white p-3 border-bottom">
                <div className="d-flex flex-row justify-content-between align-items-center mcq">
                  <h4>MCQ Quiz</h4><span>({ind+1} of {state.data.length})</span>
                </div>
              </div>
              {/* question div */}
              <div className="question bg-white p-3 border-bottom">
                <div className="d-flex flex-row align-items-center question-title">
                  <h3 className="text-danger">Q.</h3>
                  <h5 className="mt-1 ml-2">{state.data[ind].question}</h5>
                </div>
                {state.data[ind].options.map((e,i)=>{
                  return (
                  <div  key={i} className="ans ml-1 ">
                  <button onClick={()=>setSelectval(e)} className="btn btn-light rounded shadow bg-info">{e}</button>
                  </div>
                         );
                })}
              </div>
                {/* question div */}
              <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white">
                <button onClick={()=>checkanswer()} className="btn btn-primary border-success align-items-center btn-success " type="button">Next  </button></div>
            </div>
          </div>
        </div>):null}

        
         { showResult ? (<div className="p-3 bg-white rounded  text-dark ">
            <p className="fs-3">result</p>
            <progress id='file'value={score} max={state.data.length}>
            </progress>
            <h4>{((score/state.data.length) * 100).toFixed(2)}%</h4>
            <h4>{((score/state.data.length) * 100) <60 ? "fail":"pass"}</h4>
          </div>):null}
        
      </div>

    </div>
  );
}

export default Home;


