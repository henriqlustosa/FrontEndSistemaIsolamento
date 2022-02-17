import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewPacienteForm.module.css';

function NewPacienteForm(props) {
  const prontuarioInputRef = useRef();
  const nomeInputRef = useRef();
  const vinculoInputRef = useRef();
  const orgao_prefeituraInputRef = useRef();
  const rf_matriculaInputRef = useRef();
  const nome_maeInputRef = useRef();
  const data_nascimentoInputRef = useRef();
  const usuario_idInputRef = useRef();
  


  function submitHandler(event) {
    event.preventDefault();

    const enteredProntuario = prontuarioInputRef.current.value;
    const enteredNome = nomeInputRef.current.value;
    const enteredVinculo = vinculoInputRef.current.value;
    const enteredOrgao_Prefeitura = orgao_prefeituraInputRef.current.value;
    const enteredRf_matricula = rf_matriculaInputRef.current.value;
    const enteredNome_mae = nome_maeInputRef.current.value;
    const enteredData_Nascimento = data_nascimentoInputRef.current.value;
    const enteredUsuario_Id = usuario_idInputRef.current.value;
    const pacienteData = {
      
      prontuario: enteredProntuario ,
      nome: enteredNome ,
      vinculo: enteredVinculo ,
      orgao_prefeitura: enteredOrgao_Prefeitura ,
      rf_matricula: enteredRf_matricula ,
      nome_mae: enteredNome_mae ,
      data_nascimento: enteredData_Nascimento,
      usuario_id: enteredUsuario_Id ,
    };

    props.onAddMeetup(pacienteData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='prontuario'>Paciente Prontuario</label>
          <input type='text' required id='prontuario' ref={prontuarioInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='nome'>Paciente Nome</label>
          <input type='url' required id='nome' ref={nomeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='vinculo'>Paciente Vinculo</label>
          <input type='text' required id='vinculo' ref={vinculoInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Paciente</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPacienteForm;