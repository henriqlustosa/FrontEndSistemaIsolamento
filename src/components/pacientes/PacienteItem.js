import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './PacienteItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function PacienteItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        prontuario: props.prontuario,
        nome: props.nome,
        vinculo: props.vinculo,
        orgao_prefeitura: props.orgao_prefeitura,
        rf_matricula: props.rf_matricula,
        nome_mae: props.nome_mae,
        data_nasciento: props.data_nascimento,
        usuario_id: props.usuario_id, 
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.usuario_id} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.nome}</address>
          <p>{props.nome_mae}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default PacienteItem;