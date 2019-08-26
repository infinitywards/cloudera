import React from 'react';
import {uploadExcelAndMessage} from './backendServices';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      file:{},
      message:'Default'
    };
    
  }

  handleMsgChange = (event)=>{
    this.setState({message:event.target.value})
    //console.log(this.state)
  }
  handleFileChange = (event)=>{
    this.setState({file:event.target.files[0]})
    //console.log(this.state)
  }

  serve_uploadExcelAndMessage =()=>{
    uploadExcelAndMessage({file:this.state.file,message:this.state.message})
  }

  render(){
    // console.log(this.state)
    return(
    //   <div>
    //   <form onSubmit = {uploadExcelAndMessage}>
    //     Message:<br/>
    // <textarea type="textarea" id="msg" onChange= {this.handleMsgChange} /><br/><br/>
    // <input type="file" id="uploadedFile" name="uploadedFile" onChange= {this.handleFileChange}/>
    // <br/><br/><br/>
    // <input type="submit" name="submit" value="Submit"/> 
    // </form>
    // </div>
    <div>
        Message:<br/>
    <textarea type="textarea" id="msg" onChange= {this.handleMsgChange} /><br/><br/>
    <input type="file" id="uploadedFile" name="uploadedFile" onChange= {this.handleFileChange}/>
    <br/><br/><br/>
    <input type="button" name="submit" value="SUBMIT" onClick={this.serve_uploadExcelAndMessage}/> 
    </div>
    )
    
    
  }

}

export default App;
