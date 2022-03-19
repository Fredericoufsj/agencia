
import { useEffect, useState } from 'react'
import api from '../../api'


// eslint-disable-next-line import/no-anonymous-default-export
const Formulario = () => {

    const[clientes, setClientes] = useState([])

useEffect(()=>{
   api.get('/clientes').then(res=>{

    setClientes(res.data);
    console.log(res)

    }).catch(error=>console.log(error))
}, [])


  return (
    <>
       <main class="vh-100 ">
        <section class="container col-8">
            <h1 class="display-3 mt-4">Cadastrar Cliente</h1>
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Nome</span>
                <input type="text" class="form-control" placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Endereço</span>
                <input type="text" class="form-control" placeholder="Endereço" aria-label="Endereço" aria-describedby="addon-wrapping" />
            </div>
            
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Telefone</span>
                <input type="text" class="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="addon-wrapping" />
            </div>
            
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Email</span>
                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
            </div>
            
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">CPF</span>
                <input type="text" class="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="addon-wrapping" />
            </div>
        </section>

    </main>
    </>
  );
}
export default Formulario;