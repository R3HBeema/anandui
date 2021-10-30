
import React ,{useState,useEffect}from "react";
// import Dashboard from "./Dashboard";
// import Tablemarksentry from "./Tablemarksentry";
import  "./App.css";

const Marksentry =  () =>  {


    
    
    const [enteredSubject, setenteredSubject] = useState("Select Assessment Subject");
    const [email,setEmail] =useState("admin.Mp@sas.com");
    const [user1, setUsers1] =useState([]);
    const [user2, setUsers2] =useState([]);
    const [user3, setUsers3] =useState([]);
    const [user4, setUsers4] =useState([]);
    const [user5, setUsers5] =useState([]);
    const [user6, setUsers6] =useState([]);
    const [user7, setUsers7] =useState([]);

    const [cats,setCats]=useState("Select Assessment Type");
    const [enteredSection, setenteredSection]= useState("Select Section");
    const [enteredAssessment, setenteredAssessment]= useState("Select Assessment Cycle");

    const changebranchHandler = (e) =>{
        e.preventDefault();
        setenteredBranch(e.target.value);
        if(e.target.value ==="SLESBP"){
          setEmail("admin.bp@sas.com");
        }
        else if(e.target.value === "SLESKS")
        {
            setEmail("admin.Ks@sas.com");
        }
        else{
            setEmail("admin.Mp@sas.com");
        }
    }
     
    const changeclassHandler  = (e) =>{
        e.preventDefault();
        setenteredClass(e.target.value);
    
    }

    const changeyearHandler = (e) =>{
       e.preventDefault();
       setenteredYear(e.target.value);
    }

     const sectionHandler = (e) =>{
          e.preventDefault();
          setenteredSection(e.target.value);
     }

     const changeassessmentHandler =(e) =>{
           e.preventDefault();
           setenteredAssessment(e.target.value);
     }
     const changeSubject =(e) =>{
        e.preventDefault();
        setenteredSubject(e.target.value);
  }
 const changeType =(e)=>{
     e.preventDefault();
     setCats(e.target.value);

 }
 

 const handleSubmit = async () => 
    {
      
        const response1 = await fetch(`http://183.82.99.10/Ae-Erp-Api_DH/Assessment/GetAssessmentClass?UserMailId=${email}&AcademicYear=${enteredYear}&Branch=${enteredBranch}
        `);
        let result11= await response1.json();
       
        setUsers1(  result11);

        const response2 = await fetch(`http://183.82.99.10/Ae-Erp-Api_DH/Assessment/GetAssessmentSection?UserMailId=${email}&AcademicYear=${enteredYear}&Branch=${enteredBranch}&AssessClass=${enteredClass}
        `);
        let result22= await response2.json();
       
        setUsers2(  result22);
         
        const response3 = await fetch(`http://183.82.99.10/Ae-Erp-Api_DH/Assessment/GetAssessmentPeriods?UserMailId=${email}&AcademicYear=${enteredYear}&Branch=${enteredBranch}&AssessClass=${enteredClass}
        `);
        let result33= await response3.json();
       
        setUsers3(  result33);


        const response4 = await fetch(`http://183.82.99.10/Ae-Erp-Api_DH/Assessment/GetAssessmentPeriodSubjects?UserMailId=${email}&AcademicYear=${enteredYear}&Branch=${enteredBranch}&AssessClass=${enteredClass}&Section=${enteredSection}&Period=${enteredAssessment}
        `);
        let result55= await response4.json();
        console.log(result55);
       
      

       

        setUsers4(  result55);





        const response5 = await fetch(`http://183.82.99.10/Ae-Erp-Api_DH/Assessment/GetAssessmentPeriodTestCategories?UserMailId=${email}&AcademicYear=${enteredYear}&Branch=${enteredBranch}&AssessClass=${enteredClass}&Section=${enteredSection}&Period=${enteredAssessment}&Subject=${enteredSubject}
        `);
        let result66= await response5.json();
        console.log(result66);
        setUsers5(result66);

        
       
       
       



       
      
    }
    const handleSubmitget = async () => {
        const response6 = await fetch(`http://183.82.99.10/Ae-Erp-Api_DH/Assessment/GetAssessment?UserMailId=${email}&AcademicYear=${enteredYear}&Branch=${enteredBranch}&AssessClass=${enteredClass}&Section=${enteredSection}&Period=${enteredAssessment}&Subject=${enteredSubject}&catg=${cats}
        `);
        let result77= await response6.json();
       
    
    let data1=result77.ARows;
   
  

        setUsers6( data1);
        console.log(user6);
       
        
      
    
     }

     const handleSubmitgetgrid = async (e) => {
         e.preventDefault();
        const response6 = await fetch(`http://183.82.99.10/Ae-Erp-Api_DH/Assessment/GetAssessment?UserMailId=${email}&AcademicYear=${enteredYear}&Branch=${enteredBranch}&AssessClass=${enteredClass}&Section=${enteredSection}&Period=${enteredAssessment}&Subject=${enteredSubject}&catg=${cats}
        `);
        let result77= await response6.json();
       
    
    let data1=result77.ARows;
   
  

        setUsers7( data1);
       
       
        
      
    
     }
    
   

    useEffect(() => {
          
        handleSubmit();
         
       }, [enteredBranch,enteredClass,enteredYear,enteredAssessment,enteredSubject]);

       useEffect(() => {
          
        handleSubmitget();
         
       }, [cats]);


    return(
        
        
        <div className="student">
        
           
         <div className="stu-mang">
            <p> ASSESSMENT- MARKS ENTRY</p>
            
                
             
           <hr></hr>
           
              <div className="smcontentmarks">
              <div className="dropdown">
                    <p id="conn">Academic Year</p>
                    <select id="academic" onChange={changeyearHandler} value={enteredYear}>
                    <option  value="2019-2020">2019-2020</option>
                     <option  value="2020-2021">2020-2021</option>
                     <option  value="2021-2022">2021-2022</option>
                      </select>
                  </div>
                  <div className="dropdown">
                  <p id="conn">Branch</p>
                  <select id="academic" onChange={changebranchHandler} value={enteredBranch}>
                   
                     <option  value="SLESBP">St. Andrews School, Bowenpally</option>
                     <option  value="SLESKS">St. Andrews School, Keesara</option>
                     <option  value="LEETMP">St. Andrews School, Marredpally</option>
                      </select>
                  </div>

                  <div className="dropdown">
                  <p id="conn">Class</p>
                  <select id="academic" onChange={changeclassHandler}  value={enteredClass}>
                   
                   <option value="Select Class">Select Class</option>
                              
                  { user1.map ((curr1)  =>{
                return   <option value={curr1.U_VALUS} key={curr1.U_VALUS}>{curr1.U_VALUS}</option>
                     


                    })
                    
                }
                    

                      </select>
                  </div>
                     
                  <div className="dropdown" >
                  <p id="conn">Section</p>
                  <select id="academic" onChange={sectionHandler} value={enteredSection}>
                  <option value="Select Section">Select Section</option>
                              
                              { user2.map ((curr1)  =>{
                            return   <option value={curr1.U_VALUS} key={curr1.U_VALUS}>{curr1.U_VALUS}</option>
                                 
            
            
                                })
                                
                            }
                     
                      </select>
                  </div>
                   

                  <div className="dropdown">
                  <p id="conn">Assessment Cycle</p>
                  <select id="academic" onChange={changeassessmentHandler} value={enteredAssessment} >
                   
                     <option  value="Select Assessment Cycle">Select Assessment Cycle</option>
                     { user3.map ((curr1)  =>{
                            return   <option value={curr1.U_VALUS} key={curr1.U_VALUS}>{curr1.U_VALUS}</option>
                                 
            
            
                                })
                                
                            }
                     
                      </select>
                  </div>
                  &nbsp;
                  
                   <div className="dropdown">
                  <p id="conn">Assessment Area</p>
                  <select id="academic">
                   
                     <option  value="&nbsp; Select Assessment Area"> select Assessment Area</option>
                     { user4.map ((curr1)  =>{
                            return   <option value={curr1.U_VALUS} key={curr1.U_VALUS}>{curr1.StudFee}</option>
                                 
            
            
                                })
                                
                            }
                      </select>
                  </div>

                   <div className="dropdown">
                  <p id="conn">Assessment Subject</p>
                  <select id="academic" onChange={changeSubject} value={enteredSubject}>
                   
                     <option selected value="Select Assessment Subject">Select Assessment Subject</option>
                     { user4.map ((curr1)  =>{
                            return   <option value={curr1.U_VALUS} key={curr1.U_VALUS}>{curr1.U_VALUS}</option>
                                 
            
            
                                })
                                
                            }
                      </select>
                  </div>
                 

                   <div className="dropdown">
                  <p id="conn">Assessment Type</p>
                  <select id="academic" onChange={changeType} value={cats}>
                   
                     <option  value="Select Assessment Type">Select Assessment Type</option>
                     { user5.map ((curr1)  =>{
                            
                            return   <option value={curr1.U_VALUS} key={curr1.U_VALUS}>{curr1.U_VALUS}</option>
                                 
            
            
                                })
                            }
                      </select>
                  </div>
                   
                  <div className="dropdown">
                  <p id="conn">Students</p>
                  <select id="academic">

                  <option  value="0">Select Assessment Type</option>
                  { user6 != null ? (
                      <>

                  { user6.map ((curr1)  =>{
                            
                            return   <option value={curr1["Student Name"]} key={curr1["S No"]}>{curr1["Student Name"]}</option>
                                 
            
            
                                })
                            }
  </>)
                       : <p> No data found to display</p>
                        }
                      </select>
                        
                  </div>

                  
                 
                 
                 
                 
                  
                  <form id="form1">
                      <input id="btnad"  type="submit" value="Search" onClick={handleSubmitgetgrid} />
                    
                  </form>
                
             
            </div>  
                <div className="card-body">
               
               
                </div>
               
             </div>  
             
            
             
              </div>
    
           
          
           
           
        







    )
}

export default Marksentry;