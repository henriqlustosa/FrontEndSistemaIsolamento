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
          orgaoPrefeitura={paciente.orgaoPrefeitura}
          rfMatricula={paciente.rfMatricula}
          nomeMae={paciente.nomeMae}
          dataNascimento={paciente.dataNascimento}
          usuarioId={paciente.usuarioId} 
        />
      ))}
    </ul>
  );
}

export default PacienteList;



