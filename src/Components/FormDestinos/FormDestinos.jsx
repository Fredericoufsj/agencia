

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
       <main class="vh-100 ">
        <section class="container col-8">
            <h1 class="display-3 mt-4">Cadastrar Viagem</h1>
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Destino</span>
                <input type="text" class="form-control" placeholder="Destino" aria-label="Destino" aria-describedby="addon-wrapping" />
            </div>
            
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Data de Partida</span>
                <input type="text" class="form-control" placeholder="Data de Partida" aria-label="Data_Partida" aria-describedby="addon-wrapping" />
            </div>
           
            <div class="input-group flex-nowrap mt-4">
                <span class="input-group-text" id="addon-wrapping">Data de Retorno</span>
                <input type="text" class="form-control" placeholder="Data de Retorno" aria-label="Data_Retorno" aria-describedby="addon-wrapping" />
            </div>
            
        </section>

    </main> 
    
    </>
  );
}
