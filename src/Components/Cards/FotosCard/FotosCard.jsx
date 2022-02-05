import React from 'react';
import { Link } from 'react-router-dom';
import "./FotosCard.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <>
            <div class="col-sm-4">
                <div class="card">
                    <img src={props.foto} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Praia Recode 3</h5>
                        <p class="card-text">O local perfeito para tirar férias e dar aquela descansada da rotina.</p>
                        <Link to="/" class="btn btn-primary">
                                Quero conhecer!                          
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
                            