import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class HeaderComponent extends Component {


constructor(props){
  super(props);

  this.state = {
    number : 0,
    update : true
  }

  this.increment = this.increment.bind(this);
  this.incrementNotUpdate = this.incrementNotUpdate.bind(this);
}


componentWillMount(){
  console.log("Component will mount")
}

componentDidMount(){
  console.log("Component did mount")
}

componentWillReceiveProps(newProps){
  console.log("Component will receive props")
}

shouldComponentUpdate(newProps, newState){
  console.log("Component should update")

  // cek apakah ada state yang di update, conton dari state "update"
  // if (newState.update) {
  //   console.log("Component update di update jadi true");
    return true;
  // }else{
  //   console.log("Component tidak di update, jadi false");
  //   return false;
  // }
}

componentWillUpdate(nextProps, nextState){
  console.log("Component will update")
}

componentDidUpdate(prevProps, nextState){
  console.log("Component did update")
}

componentWillUnmount(){
  console.log("Component will unmount")
}

increment (){
  this.setState({number : this.state.number + 1, update: true})
}

incrementNotUpdate (){
  this.setState({number : this.state.number + 1, update: false})
}

  render() {
    console.log("Component render")
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Build with reactstrap {this.state.number} dan update {this.state.update ? 'true': 'false'}</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary" className="mr-3" onClick={this.increment}>Update</Button>
            <Button color="primary" onClick={this.incrementNotUpdate}>Not Update</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default HeaderComponent;
