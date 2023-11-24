import validator from '@rjsf/validator-ajv8';
// import Form from '@rjsf/core';
import Form from '@rjsf/mui';
import { JSSchema } from './JSONSchema';
import { FormData } from './FormData';
import { UISchema } from './UISchema';
import { Box, Container, FormGroup, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';


function ServiceEdit() {



  const [service, setService] = useState("Amazon Lambda")

  const handleChange = (event) => {
    setService(event.target.value);
  };

  const schema = JSSchema.find((data) => {
    return data.title == service
  })
  const DefaultData = FormData[service]
  const UIstyles = UISchema[service]


  return (
    <Container>
      <FormControl fullWidth className="ContainerDropdown">
        <InputLabel id="aws-selector-label">Service</InputLabel>
        <Select
          labelId="aws-selector-label"
          id="demo-simple-select"
          value={service}
          label="Service"
          onChange={handleChange}
        >
          {JSSchema.map(item => <MenuItem value={item.title}>{item.title}</MenuItem>)}
        </Select>
      </FormControl>
      <Box className="ContainerBox">


        <FormGroup row={true}>
          <Form
            schema={schema}
            formData={DefaultData}
            validator={validator}
            uiSchema={UIstyles}
          />
        </FormGroup>
      </Box>
    </Container>
  );

}


export default ServiceEdit;