import './App.css'
import { useState, useEffect } from 'react'
import api from './api'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {

  const [ transactions, setTransactions ] = useState([])
  const [ formData, setFormData ] = useState({
    equipment: '',
    version: '',
    date: '',
    body: '',
  })

  const fetchScripts = async () => {
    const response = await api.get('/scripts/')
    setTransactions(response.data)
  }

  useEffect(() => {
    fetchScripts()
  }, [])

  const handleInputChange = (event) => {
    const value = event.target.value
    console.log(value);
    setFormData({
      ...formData,
      [event.target.name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Dentro");
    await api.post('/scripts/', formData)
    fetchScripts()
    setFormData({
      equipment: '',
      version: '',
      date: '',
      body: '',
    })
  }

  return (
    <>
      <h1 className=' text-danger'>Welcome</h1>

      <Form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor='equipment'>Equipment</label>
          <input type="text" className='form-control' name='equipment' id='equipment' placeholder="Enter equipment" onChange={handleInputChange} value={formData.equipment}/>
        </div>

        <div className="mb-3">
          <label htmlFor='version'>Version</label>
          <input type="text" className='form-control' name='version' id='version' placeholder="Enter version" onChange={handleInputChange} value={formData.version}/>
        </div>

        <div className="mb-3">
          <label htmlFor='body'>Body</label>
          <input type="text" className='form-control' name='body' id='body' placeholder="Enter body" onChange={handleInputChange} value={formData.body}/>
        </div>

        <div className="mb-3">
          <label htmlFor='date'>Date</label>
          <input type="text" className='form-control' name='date' id='date' placeholder="Enter date" onChange={handleInputChange} value={formData.date}/>
        </div>

        <button type='submit' className="btn btn-primary">Create Script</button>
      </Form>


    </>
  )
}

export default App
