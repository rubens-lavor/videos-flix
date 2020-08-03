import { useState } from 'react';

function useForm(valoresIniciais){
    const [values, setValues] = useState(valoresIniciais);
  
    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor, // nome: 'valor'
      });
    }
  
    function handleChange(ev) {
      setValue(
        ev.target.getAttribute('name'),
        ev.target.value,
      );
    }
  
    function clearForm(){
      setValues(valoresIniciais);
    }
  
    return {
      values,
      clearForm,
      handleChange,
  
    };
  }

  export default useForm;