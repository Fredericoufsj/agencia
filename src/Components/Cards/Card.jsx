import FotosCard from "./FotosCard/FotosCard";
import  card1 from "../../assets/img/card1.jpg"
import  card2 from "../../assets/img/card2.jpg"
import  card3 from "../../assets/img/card3.jpg"
import  "./Card.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    return(
<>
<main className="mb-4" >
        <div className="container">
            <h1 className="display-3 mt-4 mb-4">Promoções</h1>
            <div className="row align-items-center">
                
                    <FotosCard foto={card1} ></FotosCard>                    
                    <FotosCard foto={card2} ></FotosCard>                    
                    <FotosCard foto={card3} ></FotosCard>                    
                             
            </div>
        </div>

    </main>
</>
    );
}