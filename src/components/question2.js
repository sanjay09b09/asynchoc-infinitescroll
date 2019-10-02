import React, { Component } from 'react';
import axios from 'axios';

class Question2 extends Component {
    constructor(){
        super()
        this.state= {
            imgArray : [],
            offsetValue: 5,
        }
        this.scrolling = true; //scrolling flag, false while scrolling.
    }

    fetchApi() {
        let {offsetValue} = this.state;
        console.log("Offset Value", offsetValue);
        if(this.scrolling) {
            this.scrolling = false;
            axios.get('http://api.giphy.com/v1/gifs/search?q=memes&api_key=u7Uh4dTDCIDkibFWxY5iR2kSbV84727I&&limit=5&&offset='+offsetValue).then(
            (response)=>{
                console.log("this.state.imgArray", this.state.imgArray);
                // console.log('Response from service', response);
                this.setState({imgArray:[...this.state.imgArray,...response.data.data]}) 
                this.scrolling = true;   
            }
        );
        }
    }

    scrollEventHandler() {
        if(this.scrolling) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                console.log("Reached End of Document");
                this.setState({
                    offsetValue: this.state.offsetValue + 5
                }, () => {
                    this.scrolling = true;
                    this.fetchApi();
                });
                
            }
        }
    }
    componentWillMount(){
        this.fetchApi();
        window.addEventListener('scroll',this.scrollEventHandler.bind(this));
    }
    render() {
        const {imgArray} = this.state;
        console.log("imgArray", imgArray);
        return (
            <div>
            <h3>Implement live scroll bar ( infinite scroll ) in React app (  use any dummy services available in the internet or random data ) </h3>
            {imgArray && imgArray.map((ele)=>{
                return <div><img className="imageBox" type={ele.type} src={ele.images['480w_still'].url}></img></div>
            })}
            </div>
        )
    }

}
export default Question2;