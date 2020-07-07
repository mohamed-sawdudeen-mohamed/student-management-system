import React, { Component } from 'react';

class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <h3>Add Student</h3>
                <hr />

                <div className='form-group'>
                    <label htmlFor="fName">First Name</label>
                    <input type='text' id='fName' className='form-control'  />
                </div>

                <div className='form-group'>
                    <label htmlFor="lName">Last Name</label>
                    <input type='text' id='lName' className='form-control'  />
                </div>

                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type='email' id='email' className='form-control'  />
                </div>

                <div className='radio mb-2'> 
                    <p>Gender</p>
                    <label className='radio-inline mx-3'><input type='radio' name='gender' /> Male</label>
                    <label className='radio-inline mx-3'><input type='radio' name='gender' /> FeMale</label>
                </div>

                <div class="form-group">
                    <label for="bYear">Birth Year</label>
                    <select class="form-control" id="bYear">
                        {Array(201).fill().map((item,index) => (<option>{index + 1900}</option>))}
                    </select>
                </div>

                <div>
                    <input type='submit' value='Submit' name='submit' className='btn btn-success btn-block' />
                </div>

                
            </form>
    
         );
    }
}
 
export default Form;