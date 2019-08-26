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
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Flame</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
        <div className="login-clean">
          <form method="post">
            <h2 className="sr-only">Flame</h2>
            <div className="illustration"><i className="icon ion-ios-navigate" /></div>
            <div className="form-group"><input className="form-control" type="textarea" id="msg" placeholder="Enter Your Message" onchange={this.handleMsgChange} /></div>
            <div className="form-group"><input type="file" id="uploadedFile" name="uploadedFile" onchange={this.handleFileChange} /></div>
            <div className="form-group"><button className="btn btn-primary btn-block" type="submit" name="submit" value="SUBMIT" onclick={this.serve_uploadExcelAndMessage}>Send</button></div><a className="forgot" href="#">Copyright - Stark</a></form>
        </div>
      </div>
    ) 
  }
}

export default App;
