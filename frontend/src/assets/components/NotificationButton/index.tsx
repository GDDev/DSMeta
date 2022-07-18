import axios from 'axios';
import { BASE_URL } from '../../../utils/request';
import icon from '../../img/notification-icon.svg';

import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log("Sucesso");
    });
}

function NotificationButton( {saleId} : Props) {

    return (
        <figure>
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={icon} alt="Notificar" />
            </div>
        </figure>
    )
}

export default NotificationButton;
