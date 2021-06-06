import React from 'react'
function Arrayobjects(){
    const students=[
        {name:"anil", email:"anil@gmail.com"},
        {name:"sunil", email:"sunil@gmail.com"}
    ]
    return(
        <div>
            <table border="1">
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                </tr>{
                    students.map((data)=><tr><td>{data.name}</td><td>{data.email}</td></tr>)
                }

            </table>
        </div>

    );

}
export default Arrayobjects;