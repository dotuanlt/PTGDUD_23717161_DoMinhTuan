import React from 'react'

function StudentInfo(props) {
  return (
    <div style={{height: '400px', width: '100%', fontSize: '20px', margin: 'auto', color: '#000', fontWeight: 'bold'}}>
        <table style={{width: '50%', margin: 'auto', }}>
            <tr>
                <td colSpan="2">THÔNG TIN SINH VIÊN</td>
            </tr>

            <tr>
                <td>Tên sinh viên: </td>
                <td>{props.name}</td>
            </tr>

            <tr>
                <td>MSSV: </td>
                <td>{props.mssv}</td>
            </tr>

            <tr>
                <td>Lớp: </td>
                <td>{props.className}</td>
            </tr>

        </table>
    </div>
  )
}

export default StudentInfo