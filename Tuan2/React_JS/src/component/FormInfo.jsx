import React from 'react'
import { useState } from 'react';
import './FormInfo.css'

function FormInfo() {

    const [list, setList] = useState([]);
    const [inputValues, setInputValues] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleSubmit = () => {
        if(!inputValues.name || !inputValues.email) return; 
        setList([...list, inputValues]); 
        setInputValues({ name: '', email: '' });
    };

    return (
        <div>
            <div>
                <table style={{width: '50%', margin: 'auto', fontSize: '24px' }}>
                    <tr>
                        <td style={{fontWeight: 'bold'}} colSpan="2">FORM NHẬP THÔNG TIN</td>
                    </tr>

                    <tr>
                        <td>Tên : </td>
                        <td><input style={{padding: '10px', backgroundColor: 'rgba(255, 255, 255, 0.3)'}} type="text" name="name" id="" value={inputValues.name} onChange={handleChange}/></td>
                    </tr>

                    <tr>
                        <td>Email: </td>
                        <td><input style={{padding: '10px', backgroundColor: 'rgba(255, 255, 255, 0.3)'}} type="email" name="email" id="" value={inputValues.email} onChange={handleChange}/></td>
                    </tr>

                </table>

                <button style={{backgroundColor: 'green'}} onClick={handleSubmit}>Add</button>
            </div>

            <div>
                <table className='tblStyle'>
                    <thead>
                        <tr>
                            <th className='celStyle'>STT</th> 
                            <th className='celStyle'>Tên</th>
                            <th className='celStyle'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                            <tr key={index}>
                                <td className='celStyle'>{index + 1}</td>
                                <td className='celStyle'>{item.name}</td>
                                <td className='celStyle'>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
  )
}

export default FormInfo