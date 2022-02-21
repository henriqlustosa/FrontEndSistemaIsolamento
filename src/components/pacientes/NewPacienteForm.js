import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewPacienteForm.module.css';

function NewPacienteForm(props) {
  const prontuarioInputRef = useRef();
  const nomeInputRef = useRef();
  const vinculoInputRef = useRef();
  const orgaoPrefeituraInputRef = useRef();
  const rfMatriculaInputRef = useRef();
  const nomeMaeInputRef = useRef();
  const dataNascimentoInputRef = useRef();
  const usuarioIdInputRef = useRef();
  


  function submitHandler(event) {
    event.preventDefault();

    const enteredProntuario = prontuarioInputRef.current.value;
    const enteredNome = nomeInputRef.current.value;
    const enteredVinculo = vinculoInputRef.current.value;
    const enteredOrgaoPrefeitura = orgaoPrefeituraInputRef.current.value;
    const enteredRfMatricula = rfMatriculaInputRef.current.value;
    const enteredNomeMae = nomeMaeInputRef.current.value;
    const enteredDataNascimento = dataNascimentoInputRef.current.value;
    const enteredUsuarioId = usuarioIdInputRef.current.value;
    const pacienteData = {
      
      prontuario: enteredProntuario ,
      nome: enteredNome ,
      vinculo: enteredVinculo ,
      orgaoPrefeitura: enteredOrgaoPrefeitura ,
      rfMatricula: enteredRfMatricula ,
      nomeMae: enteredNomeMae ,
      dataNascimento: enteredDataNascimento,
      usuarioId: enteredUsuarioId ,
    };

    props.onAddPaciente(pacienteData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='prontuario'>Prontuario</label>
          <input type='text' required id='prontuario' ref={prontuarioInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='nome'>Nome</label>
          <input type='text' required id='nome' ref={nomeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='vinculo'>Vinculo</label>
          <input type='text' required id='vinculo' ref={vinculoInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='orgaoPrefeitura'>Orgão da Prefeitura</label>
          <input type='text' required id='orgaoPrefeitura' ref={orgaoPrefeituraInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='rfMatricula'> Registro Funcional</label>
          <input type='text' required id='rfMatricula' ref={rfMatriculaInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='nomeMae'>Nome da Mãe</label>
          <input type='text' required id='nomeMae' ref={nomeMaeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='dataNascimento'>Data de Nascimento</label>
          <input type='text' required id='dataNascimento' ref={dataNascimentoInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='usuarioId'>Usuario ID</label>
          <input type='text' required id='usuarioId' ref={usuarioIdInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Paciente</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPacienteForm;