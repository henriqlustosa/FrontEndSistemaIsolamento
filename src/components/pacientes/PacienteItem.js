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
        orgao_prefeitura: props.orgaoPrefeitura,
        rfMatricula: props.rfMatricula,
        nomeMae: props.nomeMae,
        dataNascimento: props.dataNascimento,
        usuarioId: props.usuarioId, 
      });
      
      console.log(favoritesCtx);
    }
  }

  return (
    <li className={classes.item}>
      <Card>
      
        <div className={classes.content}>
          <h3>{props.nome}</h3>
          <p>{props.prontuario}</p>
          <p>{props.rfMatricula}</p>
          <p>{props.vinculo}</p>
          <p>{props.orgaoPrefeitura}</p>
          <p>{props.nomeMae}</p>
          <p>{props.dataNascimento}</p>
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