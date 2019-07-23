import React from 'react'

class Vegetables extends React.Component{
    constructor(props){
        super(props)
        this.state={
            vegList:[]
        }
    }
    componentDidMount (){
       fetch("http://127.0.0.1:5000/products/vegetables")
.then(response =>response.json())
.then(response =>{
    this.setState({vegList:response})
    }); 
    }

render (){
return(
    this.state.vegList.map(Vegetable =>{
        return <li>{Vegetable.name}</li>
    })
)
}
}
export default Vegetables