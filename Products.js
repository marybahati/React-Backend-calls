import React from 'react'


class Products extends React.Component{
    constructor(props){
        super(props)
        this.state={
            proList:[]
        }
    }
    componentDidMount (){
       fetch("http://127.0.0.1:5000/products")
.then(response =>response.json())
.then(response =>{
    this.setState({proList:response})
    }); 
    }

render (){
return(
    this.state.proList.map(Product =>{
        return <li>{Product.name}</li>
    })
)
}
}
export default Products