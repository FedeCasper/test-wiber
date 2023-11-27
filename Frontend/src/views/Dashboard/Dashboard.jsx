import React, { useState, useEffect } from 'react'
import api from '../../api.jsx'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Create = () => {

   const [show, setShow] = useState(false);
   const [scripts, setScripts] = useState([])
   const [scriptId, setScriptId ] = useState("")
   const [formData, setFormData] = useState({
      equipment: '',
      version: '',
      date: '',
      body: '',
   })

   const fetchScripts = async () => {
      const response = await api.get('/scripts/')
      setScripts(response.data)
   }

   useEffect(() => {
      fetchScripts()
   }, [])

   const handleClose = () => setShow(false);
   const handleShow = (id) => {
      console.log("dentro de handleShow");
      console.log(id);
      setScriptId(id)
      console.log(scriptId);
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
         await api.put(`/scripts/${scriptId}`, formData)
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

   return (
      <div className='d-flex flex-column align-items-center'>

         <h1 className='my-3'>Script Dashboard</h1>

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
                     <label htmlFor='version'>Version</label>
                     <input type="text" className='form-control' name='version' id='version' placeholder="Enter version" onChange={handleInputChange} value={formData.version} />
                  </div>
                  <div className="mb-3">
                     <label htmlFor='body'>Body</label>
                     <input type="text" className='form-control' name='body' id='body' placeholder="Enter body" onChange={handleInputChange} value={formData.body} />
                  </div>
                  <div className="mb-3">
                     <label htmlFor='date'>Date</label>
                     <input type="text" className='form-control' name='date' id='date' placeholder="Enter date" onChange={handleInputChange} value={formData.date} />
                  </div>
                  <button type='submit' className="btn btn-primary" onClick={()=>handleUpdate(scriptId)}>Edit Script</button>
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
                  <th>Update</th>
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody className='table-light'>
               {scripts.map(script => (
                  <tr key={script.id}>
                     <td>{script.equipment}</td>
                     <td>{script.version}</td>
                     <td>{script.date}</td>
                     <td>{script.body}</td>
                     <td>
                        <Button variant="primary" onClick={ () =>handleShow(script.id) }>
                           Edit
                        </Button>
                     </td>
                     <td>
                        <button className='btn btn-danger' onClick={ () => handleDelete(script.id) }>Delete</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         {/* Create script form */}
         <form onSubmit={handleSubmit} className='w-50 my-3 bg-dark p-4 rounded text-white'>
            <div className="mb-3">
               <label htmlFor='equipment'>Equipment</label>
               <input type="text" className='form-control' name='equipment' id='equipment' placeholder="Enter equipment" onChange={handleInputChange} value={formData.equipment} />
            </div>
            <div className="mb-3">
               <label htmlFor='version'>Version</label>
               <input type="text" className='form-control' name='version' id='version' placeholder="Enter version" onChange={handleInputChange} value={formData.version} />
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

      </div >
   )
}

export default Create