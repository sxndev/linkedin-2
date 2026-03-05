import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">

    <form>
      <h2>Buscar Vaga</h2>

      <div className="inputs-container">
        <input 
        type="text" 
        placeholder="Nome Completo:" 
        className="inputs"
        required
         />

        <input 
        type="email" 
        placeholder="Email:" 
        className="inputs" 
        required
         />
        <input 
        type="password" 
        placeholder="Senha:" 
        className="inputs" 
        required
         />
        
        <input 
        type="text" 
        placeholder="Área de Interesse:" 
        className="inputs" 
        required 
                   />

        <button className="search-button">Enviar</button>
      </div>
    </form>
    </div>
  );
};

export { Login };
