import React from 'react';


class Table extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h3>Managment Table</h3>
                <hr />

                <div className='form-group'>
                    <input type='text' id='search' className='form-control' placeholder='Search...'  />
                </div>

                <div className='table-responsive'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Birth Day</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rizan</td>
                                <td>Musthafa</td>
                                <td>rizanmustafa@gmail.com</td>
                                <td>Male</td>
                                <td>1994</td>
                                <td>
                                    <span className='btn'>
                                        <i className='fa fa-trash' />
                                    </span>

                                    <span className='btn'>
                                        <i className='fa fa-pencil' />
                                    </span>
                                </td>
                            </tr>

                            <tr>
                            
                        <td>Mohamed</td>
                                <td>Sawdudeen</td>
                                <td>msmohamed99@yahoo.com</td>
                                <td>Male</td>
                            
                                <td>1988</td>
                                <td>
                                <span className='btn'>
                                        <i className='fa fa-trash' />
                                    </span>

                                    <span className='btn'>
                                        <i className='fa fa-pencil' />
                                    </span>k8u76tr543q21    ZDFG HJK
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
         );
    }
}
 
export default Table;