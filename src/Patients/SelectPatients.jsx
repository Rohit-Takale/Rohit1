import { DialogTitle } from "@material-ui/core";
import { Dialog } from "material-ui";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const initialList = [
  {
    id: "a",
    name: "Robin",
  },
  {
    id: "b",
    name: "Dennis",
  },
];

const initialvalues = {
    fisrstname: '',
    
}

export default function SelectPatients(props) {
  const [list, setList] = React.useState(initialList);
    const [name, setName] = React.useState("");
      const { onClose, selectedValue, open } = props;

  function handleChange(event) {
    setName(event.target.value);
  }

    function handleSubmit(event) {
    event.preventDefault();
    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);
    setName("");
    }
    
    const validate = (values) => {

        
    }

 const handleClose = () => {
   onClose(selectedValue);
 };
  return (
    <>
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="simple-dialog-title"
          open={open}
        >
          <DialogTitle id="simple-dialog-title">
            Select Patient Name
          </DialogTitle>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fisrstname"
              value={name}
              onChange={handleChange}
            />
            <button type="button" onClick={handleSubmit}>
              Add
            </button>
          </form>
        </Dialog>
      </div>
      <li>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </li>
    </>
  );
}
