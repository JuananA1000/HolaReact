import profJPG from './assets/profile.jpg';
import './App.css';
function App() {
  // TUTORIAL: https://youtu.be/7iobxzd_2wY?si=WWwxyUXAPwSEBerX&t=3836
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={profJPG} alt='imagen de perfil' srcset='' />
        <div className='tw-followCard-info'>
          <strong>JuAИAИ ∀milғ</strong>
          <span className='tw-followCard-infoUserName'>JuANANA1000</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  );
}

export default App;
