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
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Flame</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <div class="login-clean">
        <form method="post">
            <h2 class="sr-only">Flame</h2>
            <div class="illustration"><i class="icon ion-ios-navigate"></i></div>
            <div class="form-group"><input class="form-control" type="textarea" id="msg" placeholder="Enter Your Message" onChange= {this.handleMsgChange}></div>
            <div class="form-group"><input type="file" id="uploadedFile" name="uploadedFile" onChange= {this.handleFileChange}></div>
            <div class="form-group"><button class="btn btn-primary btn-block" type="submit" name="submit" value="SUBMIT" onClick={this.serve_uploadExcelAndMessage}>Send</button></div><a class="forgot" href="#">Copyright - Stark</a></form>
				
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
</body>
</html>)
    
    
  }

}

export default App;
