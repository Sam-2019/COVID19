import React from 'react';


class NSignup extends React.Component {

render() {
  
return (
 
<div className="container col-md-5" style={{ padding: '1em 7em 0em 7em'}}>
<h1 className="title" style={{textAlign: "center"}}>Signup</h1>

<div className="row">    
<div className="col">
    
<form> 

<div className="form-group">
<input type="text" placeholder="First Name" className="form-control" required/> 
</div>

<div className="form-group">
<input type="text" placeholder="Last Name" className="form-control" required/> 
</div>

<div className="form-group">
<input type="email" placeholder="Email" className="form-control" required/> 
</div>

<div className="form-group">
<input type="text" placeholder="Username" className="form-control" required/> 
</div>
        
<div className="form-group">        
<input type="password" placeholder="Password"className="form-control" required/> </div> 

 <div className="form-group">
<input type="password" placeholder="Confirm Password" className="form-control" required/> 
</div>

<div className="form-group">
<div className="form-check">
<input className="form-check-input" type="checkbox" id="gridCheck"/>
<label className="form-check-label" for="gridCheck">
Ts and Cs apply
</label>
</div>
</div>


<button className="btn btn-info"
        type="submit">Sign up</button>   

</form>
</div> 

</div>
        
</div>

);
}
}




export default NSignup;