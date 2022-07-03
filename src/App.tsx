
import './App.css';
import { Estado } from './components/estado';
import { RenderizadoCondicional } from './components/renderizadoCondicional';
import { RenderizadoElementos } from './components/renderizadoElementos';
import { Eventos, MasSobreEventos } from './components/eventos';
import { Padre } from './components/comunicacionComponente';
import { CicloVida } from './components/cicloVida';
import ScrollHooks from './components/scrollHooks';
import RelojHooks from './components/relojHooks';
import AjaxApisHooks from './components/ajaxApisHooks';
import HooksPersonalizados from './components/hooksPersonalizados';
import Referencias from './components/referencias';
import Formularios from './components/formularios';
import Estilos from './components/estilos';
import ComponentesEstilizados from './components/componentesEstilizados';


function App() {
  return (
    <div className="App">
    
      <hr />
      <Estado/>
      <hr />
      <RenderizadoCondicional/>
      <hr />
      <RenderizadoElementos/>
      <hr />
      <Eventos/>
      <hr />
      <MasSobreEventos/>
      <hr />
      <Padre/>
      <hr />
      <CicloVida/>
      <hr />
      <ScrollHooks/>
      <hr />
      <RelojHooks/>
      <hr />
      <AjaxApisHooks/>
      <hr />
      <HooksPersonalizados/>
      <hr />
      <Referencias/>
      <hr />
      <Formularios/>
      <hr />
      <Estilos/>
      <hr />
      <ComponentesEstilizados/>
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
