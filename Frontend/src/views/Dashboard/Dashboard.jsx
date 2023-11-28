import React, { useState, useEffect } from 'react'
import api from '../../api.jsx'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Dashboard = () => {

   const [show, setShow] = useState(false);
   const [scripts, setScripts] = useState([])
   const [versions, setVersions] = useState([])
   const [scriptId, setScriptId] = useState("")
   const [formData, setFormData] = useState({
      equipment: '',
      version: '',
      date: '',
      body: '',
   })
   const [value, setValue] = useState('')

   const fetchScripts = async () => {
      const response = await api.get('/scripts/')
      setScripts(response.data)
   }

   const handleClose = () => setShow(false);

   const handleShow = (id) => {
      setScriptId(id)
      return setShow(true);
   }

   const handleInputChange = (event) => {
      const value = event.target.value
      setFormData({
         ...formData,
         [event.target.name]: value
      });
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         console.log("Submitting form data:", formData);
         await api.post('/scripts/', formData);
         fetchScripts();
         setFormData({
            equipment: '',
            version: '',
            date: '',
            body: '',
         });
      } catch (error) {
         console.error("Error submitting form:", error);
      }
   };

   const handleUpdate = async (scriptId) => {
      console.log(scriptId);
      try {
         await api.put(`/scripts/${scriptId}/`, formData)
         fetchScripts();
         setFormData({
            equipment: '',
            version: '',
            date: '',
            body: '',
         });
      } catch (error) {
         console.error(error)
      }
   };

   const handleDelete = async (id) => {
      try {
         await api.delete(`/scripts/${id}`)
         fetchScripts()
      } catch (error) {
         console.error(error)
      }
   };

   const handleVersions = async (id) => {
      try {
         const response = await api.get(`/scripts/${id}/versions/`)
         setVersions(response.data.versions)
      } catch (error) {
         console.error(error)
      }
   };

   const handleInputSearch = (event) => {
      const { value } = event.target;
      setValue(value)
   };

   const handleFilteredScripts = async (event) => {
      event.preventDefault();
      try {
         const response = await api.get(`/filteredScripts/?equipment=${value}`);
         setScripts(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      fetchScripts()
   }, [])

   return (
      <div className='d-flex flex-column align-items-center'>

         <h1 className='my-3'>Script Dashboard</h1>

         <div>
            <form onSubmit={handleFilteredScripts} className='d-flex gap-3'>
               <label>
                  <input
                     type="text"
                     placeholder='Search by equipment'
                     name='equipment'
                     value={value}
                     onChange={handleInputSearch}
                  />
               </label>
               <button type='submit' className='btn btn-primary'>Search</button>
            </form>
         </div>

         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Edit script info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form onSubmit={handleUpdate} className='w-75'>
                  <div className="mb-3">
                     <label htmlFor='equipment'>Equipment</label>
                     <input type="text" className='form-control' name='equipment' id='equipment' placeholder="Enter equipment" onChange={handleInputChange} value={formData.equipment} />
                  </div>
                  <div className="mb-3">
                     <label htmlFor='body'>Body</label>
                     <input type="text" className='form-control' name='body' id='body' placeholder="Enter body" onChange={handleInputChange} value={formData.body} />
                  </div>
                  <div className="mb-3">
                     <label htmlFor='date'>Date</label>
                     <input type="text" className='form-control' name='date' id='date' placeholder="Enter date" onChange={handleInputChange} value={formData.date} />
                  </div>
                  <button type='submit' className="btn btn-primary" onClick={() => handleUpdate(scriptId)}>Edit Script</button>
               </form>
            </Modal.Body>
         </Modal>

         <table className='table table-bordered text-white text-center w-75 my-3'>
            <thead className='table-dark'>
               <tr>
                  <th>Equipment</th>
                  <th>Version</th>
                  <th>Date</th>
                  <th>Body</th>
                  <th>Versions</th>
                  <th>Update</th>
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody className='table-light'>
               { scripts.map( script => (
                  <tr key={script.id}>
                     <td>{script.equipment}</td>
                     <td>{script.version}</td>
                     <td>{script.date}</td>
                     <td>{script.body}</td>
                     <td>
                        <button className='btn btn-info' onClick={() => handleVersions(script.id)}>Versions</button>
                     </td>
                     <td>
                        <Button variant="primary" onClick={() => handleShow(script.id)}>
                           Edit
                        </Button>
                     </td>
                     <td>
                        <button className='btn btn-danger' onClick={() => handleDelete(script.id)}>Delete</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         <div className='d-flex justify-content-center w-100 gap-5 my-5'>

            <form onSubmit={handleSubmit} className='w-50 my-3 bg-dark p-4 rounded text-white'>
               <div className="mb-3">
                  <label htmlFor='equipment'>Equipment</label>
                  <input type="text" className='form-control' name='equipment' id='equipment' placeholder="Enter equipment" onChange={handleInputChange} value={formData.equipment} />
               </div>
               <div className="mb-3">
                  <label htmlFor='body'>Body</label>
                  <input type="text" className='form-control' name='body' id='body' placeholder="Enter body" onChange={handleInputChange} value={formData.body} />
               </div>
               <div className="mb-3">
                  <label htmlFor='date'>Date</label>
                  <input type="text" className='form-control' name='date' id='date' placeholder="Enter date" onChange={handleInputChange} value={formData.date} />
               </div>
               <button type='submit' className="btn btn-primary">Create Script</button>
            </form>

            <table className='table table-bordered text-white text-center w-25'>
               <thead className='table-dark'>
                  <tr>
                     <th>Versions</th>
                  </tr>
               </thead>
               <tbody className='table-light'>
                  {versions.map((version, index) => (
                     <tr key={index}>
                        <td>{version}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>


      </div >
   )
}

export default Dashboard