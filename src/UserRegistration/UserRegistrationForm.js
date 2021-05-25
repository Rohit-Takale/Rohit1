import React, { useState, useEffect } from 'react'
import Controls from "../Components/controls/Controls";
import { UseForm, Form } from '../Components/UseForm';
import * as employeeService  from "../Services/employeeService";



const departmentItems = [
  { id: "radiology", title: "Radiology" },
  { id: "pathology", title: "pathology" },
]

const initialFValues = {
  id: "0",
  username: "",
  useremail: "",
  mobile: "",
  city: "",
  department: "radiology",
  departmentId: "",
  isPermanant: "false",
}

export default function UserRegistrationForm() {

   

    const { values, setValues, handleInputChange } = UseForm(initialFValues);

       
    
    return (
      <Form>
        <Controls.Input
          name="username"
          label="User Name"
          value={values.username}
          onChange={handleInputChange}
        />
        <Controls.Input
          name="useremail"
          label="User Name"
          value={values.useremail}
          onChange={handleInputChange}
        />

        <Controls.RadioGroup
          name=" department"
          lable="Department"
          value={values.departmentItems}
          onChange={handleInputChange}
          items={departmentItems}
        />
        <div>
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />
        </div>
      </Form>
    );
}
