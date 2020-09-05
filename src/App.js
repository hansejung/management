import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper'
import { withStyles, makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    width: '100%',
    // marginTop: theme.spacing.units *3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080,
  }
})

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '철수',
  'birthday': '980125',
  'gender': '남자',
  'job': '프로그래머'  
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '순이',
  'birthday': '980514',
  'gender': '여자',
  'job': '디자이너'  
}]
 function App(){
//class App extends Component {
//  render(){
// const { classes } = this.props; 


  const classes = styles();
  return (
    <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>아이디</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>          
        </TableRow>
      </TableHead>
      <TableBody>
      {
      customers.map(c =>{
        return(
          <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
        )        
      }) 
      }       
      </TableBody>
      </Table>  

    {
/*       <Customer
      id={customers[0].id}
      image={customers[0].image}
      name={customers[0].name}
      birthday={customers[0].birthday}
      gender={customers[0].gender}
      job={customers[0].job}
      />
      <Customer
      id={customers[1].id}
      image={customers[1].image}
      name={customers[1].name}
      birthday={customers[1].birthday}
      gender={customers[1].gender}
      job={customers[1].job}
      />      
      <Customer
      id={customers[2].id}
      image={customers[2].image}
      name={customers[2].name}
      birthday={customers[2].birthday}
      gender={customers[2].gender}
      job={customers[2].job}
      /> */
      }
      {/* <img src={logo} alt="logo" />
      <h2> Let's develop management system!</h2> */}
    </Paper>
  );
//    }
}

export default withStyles(styles)(App);
