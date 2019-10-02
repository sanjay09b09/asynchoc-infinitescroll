import React, { Component } from 'react';

const Hoc = (Wrappedcomponent)=>{

     return class extends Component {
        constructor(){
            super()
            this.state = {
                show:false,
                returnedcomponent:null
            }
        }

        componentDidMount() {
            setTimeout(()=>{
                Wrappedcomponent().then(value=>{
                    console.log("value", value);
                    this.setState({show:true,returnedcomponent:value.default})
                })
            },3000)
        }
        render(){
            let {show} = this.state;
            let Returnedcomponent = this.state.returnedcomponent;
            return show ? <Returnedcomponent /> : <div>loading.....</div>
        }
    }
}

export default Hoc;