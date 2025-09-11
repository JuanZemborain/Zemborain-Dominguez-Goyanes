import { Component } from "react";
import Card from "../Card/Card";
import './ListaCard.css'



class ListaCard extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props);
        
    }

    render(){
        return(
            <section className="row cards" id="movies">
                {this.props.data.map((unaPeli, idx) => <Card data={unaPeli} key={idx} />)}
            </section>
        )
    }
}

export default ListaCard;