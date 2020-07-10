import React from 'react';
import Form from './components/Form';
import Table from './components/Table';



class App extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className='container-fluid bg-light main-container'>
                <h2 className='text-center py-3 text-primary'>Student Management System</h2>
                <div className='row'>
                    <div className='col-md-4 border-right'>
                        <Form />
                    </div>
                    <div className='col-md-8'><Table /></div>

                </div>

            </div>
         );
    }
}
 
export default App;