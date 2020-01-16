import React from 'react';

import './styles.css';

function DevItem({ dev }) {
    function deleteDev(e) {
        console.log(e.target);
    }


    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <div className="dev-links">
                <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
                <div className="dev-actions">
                    <button className="edit-button">
                        <i className="material-icons">edit</i>
                    </button>

                    <button className="delete-button" onClick={deleteDev}>
                        <i className="material-icons">delete_outline</i>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default DevItem;