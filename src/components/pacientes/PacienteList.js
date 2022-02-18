import PacienteItem from './PacienteItem';
import classes from './PacienteList.module.css';

function PacienteList(props) {
  return (
    <ul className={classes.list}>
      {props.pacientes.map((paciente) => (
        <PacienteItem
          key={paciente.id}
          id={paciente.id}
          prontuario={paciente.prontuario}
          nome={paciente.nome}
          vinculo={paciente.vinculo}
          orgao_prefeitura={paciente.orgao_prefeitura}
          rf_matricula={paciente.rf_matricula}
          nome_mae={paciente.nome_mae}
          data_nasciento={paciente.data_nascimento}
          usuario_id={paciente.usuario_id} 
        />
      ))}
    </ul>
  );
}

export default PacienteList;



