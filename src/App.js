
  function App() {
     let arr=[ ['','','','','','','','',''],
     ['','','','','','','','',''],
     ['','','','','','','','',''],
     ['','','','','','','','',''],
     ['','','','','','','','',''],
     ['','','','','','','','',''],
     ['','','','','','','','',''],
     ['','','','','','','','',''],
     ['','','','','','','','',''],
    ];

    const Valdittion=()=>{
      
       
      
      
    for(let i=0; i<arr.length;i++){

        let x=[];
        let y=[];

        for(let j=0;j<arr.length;j++){
            if((arr[i][j].length==0)){return alert('there element empty')} 
            else if(arr[i][j].length>1){return alert('there element out range')}
            else if(!x.includes(arr[i][j])&&!y.includes(arr[j][i])){
                
                x.push(arr[i][j]);     
                y.push(arr[j][i]);     
            }
            else if(x.includes(arr[i][j])||y.includes(arr[j][i])){
                return alert('there element empty')

            }


        }

    }
    return alert('sucssful');
    }
    
    
    return (<>
           
      <div className="h-dvh flex flex-col items-center ">
       <table className=" border-4 mx-auto h-2/3 mt-5  ">
        <tr className=" border-4">
          <td className=" border-4"> <input onChange={(e)=>{arr[0][0]=e.target.value}}  className="w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[0][1]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[0][2]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[0][3]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[0][4]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[0][5]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[0][6]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[0][7]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[0][8]=e.target.value}} className=" w-20"></input></td>
  
        </tr>
  
        <tr>
        <td className=" border-4">   <input onChange={(e)=>{arr[1][0]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[1][1]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[1][2]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[1][3]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[1][4]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[1][5]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[1][6]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[1][7]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[1][8]=e.target.value}} className=" w-20"></input></td>
        </tr>
        <tr>
        <td className=" border-4">   <input onChange={(e)=>{arr[2][0]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[2][1]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[2][2]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[2][3]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[2][4]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[2][5]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[2][6]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[2][7]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[2][8]=e.target.value}} className=" w-20"></input></td>
        </tr>
        <tr>
        <td className=" border-4">   <input onChange={(e)=>{arr[3][0]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[3][1]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[3][2]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[3][3]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[3][4]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[3][5]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[3][6]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[3][7]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[3][8]=e.target.value}} className=" w-20"></input></td>
        </tr>
        <tr>
          <td className=" border-4"> <input onChange={(e)=>{arr[4][0]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[4][1]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[4][2]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[4][3]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[4][4]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[4][5]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[4][6]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[4][7]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[4][8]=e.target.value}} className=" w-20"></input></td>
        </tr>
        <tr>
          <td className=" border-4"> <input onChange={(e)=>{arr[5][0]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[5][1]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[5][2]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[5][3]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[5][4]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[5][5]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[5][6]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[5][7]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[5][8]=e.target.value}} className=" w-20"></input></td>
        </tr>
        <tr>
          <td className=" border-4"> <input onChange={(e)=>{arr[6][0]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[6][1]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[6][2]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[6][3]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[6][4]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[6][5]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[6][6]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[6][7]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[6][8]=e.target.value}} className=" w-20"></input></td>
        </tr>
        <tr>
          <td className=" border-4"> <input onChange={(e)=>{arr[7][0]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[7][1]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[7][2]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[7][3]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[7][4]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[7][5]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[7][6]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[7][7]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[7][8]=e.target.value}} className=" w-20"></input></td>
        </tr>
        <tr>
          <td className=" border-4"> <input onChange={(e)=>{arr[8][0]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[8][1]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[8][2]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[8][3]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[8][4]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[8][5]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[8][6]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[8][7]=e.target.value}} className=" w-20"></input></td>
          <td className=" border-4"> <input onChange={(e)=>{arr[8][8]=e.target.value}} className=" w-20"></input></td>
        </tr>
  
       </table>
       <button className="mt-10 border-4 px-5 py-5 rounded-xl bg-black text-gray-400 text-xl shadow-2xl " onClick={()=>{Valdittion()}}>Valdittion </button>     
      </div>
      
      </>
    );
  }
  
  export default App;
  