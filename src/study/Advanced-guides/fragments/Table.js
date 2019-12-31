import React from 'react';

class Table extends React.Component{
    render(){
        return(
            <table>
                <Thead />
                <Tbody />
            </table>
        );
    }
}

class Thead extends React.Component{
    render(){
        return(
            <thead>
                <tr>
                    <th>Field1</th>
                    <th>Field2</th>
                    <th>Field3</th>
                    <th>Field4</th>
                    <th>Field5</th>
                    <th>Field6</th>
                </tr>
            </thead>
        );
    }
}

class Tbody extends React.Component{
    render(){
        return(
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
            </tbody>
        );
    }
}

export default Table;