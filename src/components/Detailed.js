import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import Form from "./Form";

export default function Detailed(props) {
  const username = props.usernameLog;
  const password = props.passwordLog;
  const navigate = useNavigate();
   
    
  const handleSubmit = (e) => {
    e.preventDefault()

    axios
    .put(`http://127.0.0.1:8000/update/${props.item.pk}`,{

        "name": e.target.name.value,
        "mobile": +e.target.mobile.value,
        "email": e.target.email,
        "country": e.target.country,
        "city": e.target.city,
        "dob": e.target.dob,
        "contract_start_date": e.target.contract_start_date,
        "contract_end_date": e.target.contract_end_date,
        "active": props.item.active
    }, {
        auth: {
            username: username,
            password: password,     
        },
    })
    .then((res) => {
        navigate('/home') 
        return true
    })
    .catch((err) => {})
  }

  return (
    <>
      <Header usernameLog={props.usernameLog} />
      <Form
      item={props.item}
      handleSubmit={handleSubmit}
      />
    </>
  );
}
