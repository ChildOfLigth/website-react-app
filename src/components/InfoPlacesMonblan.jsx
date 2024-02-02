import { useNavigate } from 'react-router-dom';
import { CgHome  } from 'react-icons/cg';
import styles from '../styles/InfoPlacesMonblan.module.css';
import content_placesMondlan from '../data';

function InfoPlacesMonblan() {
  const navigate = useNavigate();

  return (
    <>
      <button 
      onClick={() => navigate('/website-react-app')} 
      className={styles.navigateHomePage}
      title="Go to Home page"
      >
        <CgHome  />
      </button>
      <div className={styles.content_places_monblan}>
        <h1>Guide to the worlds</h1>
        <hr />
        {content_placesMondlan.map((elem) => (
          <div key={elem.id}>
            <h2>{elem.title}</h2>
            <p>{elem.info_places}</p>
            <figure>
              <img src={elem.img} alt="Photo Alps" />
              <figcaption>{elem.info_img}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </>
  );
}

export default InfoPlacesMonblan;