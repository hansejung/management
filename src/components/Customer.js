import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Customer extends React.Component{
    render(){
        return(
 
            // <div>
            // <CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image}/>
            // <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/> 
            // </div>

            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>



        )
    }
}
class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
            <h2>{this.props.name} ( {this.props.id} )</h2>
            <img src={this.props.image}/>    
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
            </div>            
        )
    }
}
export default Customer;