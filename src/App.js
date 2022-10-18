import React from 'react';
import './App.css';

function App() {
  return (
    <div className='main-container'>
      <div className='img'>

      </div>
      <div className='title-container'>
          <h3>freeCodeCamp Survey Form</h3>
          <p className='title-detail'>Thank you for taking the time to help us improve the platform</p>
      </div>

      <div className='form-container '>
        <form action="" className='mt-5'>
          <div className='row mb-3'>
            <div className="col-sm-12">
              <label htmlFor="name" className='form-label'>Name</label>
              <input type="text" name='name' className='form-control'/>
            </div>
          </div>

          <div className='row mb-3'>
            <div className="col-sm-12">
              <label htmlFor="Email" className='form-label'>Email</label>
              <input type="email" name='name' className='form-control'/>
            </div>
          </div>

          <div className='row mb-3'>
            <div className="col-sm-12">
              <label htmlFor="Email" className='form-label'>Age (<span>optional</span>) </label>
              <input type="email" name='name' className='form-control'/>
            </div>
          </div>

          <div className='row mb-3'>
            <div className="col-sm-12">
              <label htmlFor="select" className='form-label'>Which option best describes your current role?</label>
              <select class="form-select" >
                <option selected>Select current role</option>
                <option value="1">Student</option>
                <option value="2">Full Time Job</option>
                <option value="3">Full Time Learner</option>
                <option value="4">Prefer Not to Say</option>
              </select>
            </div>
          </div>

          <div className='row mb-1 form-radio'>
            <div className="col-sm-12">
              <label htmlFor="">Would you recommend freeCodeCamp to a friend?</label>
            </div>
          </div>
          <div className='row mb-1 form-radio'>
            <div className="col-sm-12">
              <input type="radio" className='form-radio-input'/>
              <label htmlFor="">Definitely</label>
            </div>
          </div>
          <div className='row mb-1 form-radio'>
            <div className="col-sm-12">
              <input type="radio" className='form-radio-input'/>
              <label htmlFor="">Maybe</label>
            </div>
          </div>
          <div className='row mb-3 form-radio'>
            <div className="col-sm-12">
              <input type="radio" className='form-radio-input'/>
              <label htmlFor="">Not sure</label>
            </div>
          </div>

          <div className='row mb-3'>
            <div className="col-sm-12">
              <label htmlFor="select" className='form-label'>What is your favorite feature of freeCodeCamp</label>
              <select class="form-select" >
                <option selected>Select and option</option>
                <option value="1">Projects</option>
                <option value="2">Community</option>
                <option value="3">Open Source</option>
              </select>
            </div>
          </div>

          <div className='row mb-1 form-radio'>
            <div className="col-sm-12">
              <label htmlFor="">What would you like to see improved? (<span>Check all that apply</span>)</label>
            </div>
          </div>
          <div className='row mb-1 form-check'>
            <div className="col-sm-12">
              <input type="check" className='form-check-input'/>
              <label htmlFor="">Front-end Projects</label>
            </div>
          </div>
          <div className='row mb-1 form-check'>
            <div className="col-sm-12">
              <input type="check" className='form-check-input'/>
              <label htmlFor="">Back-end Projects</label>
            </div>
          </div>
          <div className='row mb-1 form-check'>
            <div className="col-sm-12">
              <input type="check" className='form-check-input'/>
              <label htmlFor="">Data Visualization</label>
            </div>
          </div>
          <div className='row mb-1 form-check'>
            <div className="col-sm-12">
              <input type="check" className='form-check-input'/>
              <label htmlFor="">Challenges</label>
            </div>
          </div>
          <div className='row mb-1 form-check'>
            <div className="col-sm-12">
              <input type="check" className='form-check-input'/>
              <label htmlFor="">Open Source Community</label>
            </div>
          </div>
          <div className='row mb-1 form-check'>
            <div className="col-sm-12">
              <input type="check" className='form-check-input'/>
              <label htmlFor="">Gitter help rooms</label>
            </div>
          </div>
          <div className='row mb-1 form-check'>
            <div className="col-sm-12">
              <input type="check" className='form-check-input'/>
              <label htmlFor="">Videos</label>
            </div>
          </div>
          <div className='row mb-1 form-check'>
            <div className="col-sm-12">
              <input type="check" className='form-check-input'/>
              <label htmlFor="">City Meetups</label>
            </div>
          </div>
          <div className='row mb-1 form-check'>
            <div className="col-sm-12">
              <input type="check" className='form-check-input'/>
              <label htmlFor="">Wiki</label>
            </div>
          </div>
          <div className='row mb-1 form-check'>
            <div className="col-sm-12">
              <input type="check" className='form-check-input'/>
              <label htmlFor="">Forum</label>
            </div>
          </div>
          <div className='row mb-3 form-check'>
            <div className="col-sm-12">
              <input type="check" className='form-check-input'/>
              <label htmlFor="">Additional Courses</label>
            </div>
          </div>
          
          <div className='row mb-3'>
            <div className="col-sm-12">
              <label htmlFor="comment">Any comments or suggestions?</label>
            </div>
          </div>
          <div className='row mb-3'>
            <div className="col-sm-12">
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>
            </div>
          </div>
          
          <div className='row mb-3'>
            <div className="col-sm-12">
                <button typ='submit'className='btn btn-success form-control'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    
    </div>
  );
}

export default App;
