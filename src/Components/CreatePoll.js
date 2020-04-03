import React from 'react';
import './pollView.css';

class CreatePoll extends React.Component {     
    
render() {
return (

<div className="container col-md-5" style={{ padding: '1em 3em 0em 3em'}}>
<h1 style={{textAlign: "center"}}>Create Poll</h1>   
<div className="card-group">
<div className="card shadow p-2 border-0">

<div className="card-body">

<form id='vote-form'  method="post">

<h5 className="card-title">Question
<input type="" id="Question" name="poll"
class="form-control form-control-lg" 
placeholder="Share your thought" required />
</h5>

<h6 className="card-title">Options

<input type="" className="form-control" id="option1" 
name="poll" placeholder="Option 1" required />

<input type="" className="form-control" id="option2" 
name="poll" placeholder="Option 2" required />

<input type="" className="form-control" id="option3" 
name="poll" placeholder="Option 3" required />

</h6>

<input type="submit" value="Post" className="btn btn-primary" />

</form>

</div>
</div>

</div>
<br></br><br></br>


</div>
 );
}}
    
  export default CreatePoll;