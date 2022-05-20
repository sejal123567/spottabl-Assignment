import React from "react";
class SearchBar extends React.Component {
  constructor(props)
    {
      super(props);
      this.state = {
            username :"",
      };
    }
  render() { 
    
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.addUser(this.state.username);
        
      }}>
    <div class="input-group my-3">
    <input
      type="text"
      class="form-control rounded"
      placeholder="Add by Name"
      aria-label="Search"
      aria-describedby="name"
       name = "username"
       onChange={(e) => {
         this.setState({username : e.currentTarget.value});
       }}
       value={this.state.username}
    />
     <button type="submit" class="btn btn-primary" >
      Add CSM
    </button>
    </div>
   
  
  </form>
    );
  
  }
}
 
export default SearchBar;
