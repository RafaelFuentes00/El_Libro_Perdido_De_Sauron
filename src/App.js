import { useEffect, useState } from "react";
import "./App.css";
import "./css/magnific-popup.css";
import './css/templatemo-ocean-vibes.css'
import BookList from "./components/BookList";
import Cookies from "universal-cookie";

function App() {
  const [introbtn, setIntro] = useState(false)
  const [booksbtn, setBooks] = useState(false)
  const [aboutbtn, setAbout] = useState(false)
  const [contactbtn, setContact] = useState(false)
  const [eventsbtn, setEvents] = useState(false)
  const [books, setBooksList] = useState([])
  const [cookiesBanner, setCookiesBanner] = useState(true)

  useEffect(()=>{
    setIntro(false)
    setBooks(false)
    setAbout(false)
    setContact(false)
    setEvents(false)
    setCookiesBanner(true)
    fetch("./data/data.json")
    .then(res => res.json())
        .then(data => {
            if (data.length === 0) {
                console.log('No se han cargado los productos');
            } else
                setBooksList(data);
        })
  }, [])
  const showIntro = () =>{
    setBooks(false)
    setAbout(false)
    setContact(false)
    setEvents(false)
    if(introbtn===true){
      setIntro(false)
    }else if(introbtn===false){
      setIntro(true)
    }
  }
  const showBooks = () =>{
    setIntro(false)
    setAbout(false)
    setContact(false)
    setEvents(false)
    if(booksbtn===true){
      setBooks(false)
    }else if(booksbtn===false){
      setBooks(true)
    }
  }
  const showAbout = () =>{
    setIntro(false)
    setBooks(false)
    setContact(false)
    setEvents(false)
    if(aboutbtn===true){
      setAbout(false)
    }else if(aboutbtn===false){
      setAbout(true)
    }
  }
  const showContact = () =>{
    setIntro(false)
    setAbout(false)
    setBooks(false)
    setEvents(false)
    if(contactbtn===true){
      setContact(false)
    }else if(contactbtn===false){
      setContact(true)
    }
  }
  const showEvents = () =>{
    setIntro(false)
    setAbout(false)
    setBooks(false)
    setContact(false)
    if(eventsbtn===true){
      setEvents(false)
    }else if(eventsbtn===false){
      setEvents(true)
    }
  }
  const handleCookiesBanner = ()=>{
    setCookiesBanner(false)
  }
  const handleCookies = ()=>{
    const cookies = new Cookies() 
    cookies.set("Id","1", {path: "/"})
    cookies.set("Username","Invitado", {path: "/"})
    cookies.set("Rol","Standard", {path: "/"})
    cookies.set("Theme","Bright", {path: "/"})
    handleCookiesBanner()
  }

  
  return (
    <div>
      {
        cookiesBanner===true ? 
        <div className="cookies">Esta página utiliza la politica de cookies para mejorar la experiencia del usuario. ¿Aceptas el uso de Cookies?
          <div className="cookiesButtons">
            <button className="cookiesBtn" onClick={handleCookies}>Aceptar</button>
            <button className="cookiesBtn" onClick={handleCookiesBanner}>Rechazar</button>
          </div>
        </div>
        :""
      }
      <header className="tm-site-header">
        <h1 className="tm-mt-0 tm-mb-15">
          <span className="tm-color-primary">El libro</span>{" "}
          <span className="tm-color-gray-2">perdido</span>
        </h1>
        <em className="tm-tagline tm-color-light-gray">de Sauron</em>
      </header>
      
      <div id="tm-video-container">
        <video autoPlay muted loop id="tm-video">
          <source
            src="https://static.vecteezy.com/system/resources/previews/001/798/362/mp4/a-close-up-shot-of-opening-book-free-video.mp4"
            type="video/mp4"
          />
        </video>
        <i id="tm-video-control-button" className="fas fa-pause"></i>
      </div>
      <div className="tm-container">
      <nav className="tm-main-nav">
            <ul id="inline-popups">
                <li className="tm-nav-item">
                    <a data-effect="mfp-move-from-top" className="tm-nav-link" onClick={showIntro}>
                        Introduction
                    </a>                
                </li>
                <li className="tm-nav-item">
                    <a data-effect="mfp-move-from-top" className="tm-nav-link" id="tm-gallery-link" onClick={showBooks}>
                        Books
                    </a>
                </li>
                <li className="tm-nav-item">
                    <a data-effect="mfp-move-from-top" className="tm-nav-link" onClick={showEvents}>
                        Events
                    </a>
                </li>
                <li className="tm-nav-item">
                    <a data-effect="mfp-move-from-top" className="tm-nav-link" onClick={showAbout}>
                        About
                    </a>
                </li>
                <li className="tm-nav-item">
                    <a data-effect="mfp-move-from-top" className="tm-nav-link" onClick={showContact}>
                        Contact
                    </a>
                </li>
            </ul>
      </nav>
      
      
      {
        introbtn ? <div>Bienvenido a El libro perdido de Sauron,
           un lugar para pasarlo en grande y disfrutar de las mejores historias jamás escritas. 
           Aquí encontrarás un montón de libros de tu agrado pero, antes de comenzar ¿porqué no te registras en nuestra página web?
           <p><a>Registrarse ahora</a></p> <p><a>¿Ya tienes una cuenta?</a></p></div>:<div></div>
        
       

      }
      {
        booksbtn ? <BookList books={books}/>:<div></div>
      }
      {
        aboutbtn ? <div>Somos una pequeña libreria encargada de traer los fosiles de la literatura a vuestro alcance, para que los disfruteis como nunca han podido ser disfrutados y aprender nuevas historias. </div>:<div></div>
      }
      {
        contactbtn ? <div>Puedes encontrarnos en c/Arbol de la ciencia 13º, Marratxi.<br/> También puedes contactar con nosotros a través de nuestra dirección de correo electrónico <a>libroperdidodetolkien@gmail.com</a> o a través de nuestro número de teléfono: <a>978 13 88 44</a></div>:<div></div>
      }
      {
        eventsbtn ? <div>
          Martes: Club de lectura de 15:00 a 20:00 h<br/>
          Jueves: Cuentacuentos de 14:00 a 16:00 h<br/> 
          Sábado: Firma de libros con Stephen King <br/>
          Domingo: Meet&Greet con J.R.R. Tolkien 
          </div>:<div></div>
      }
        
      </div>
      
      <footer className="tm-footer">
        <span>Copyright &copy; 2022 El libro perdido de Sauron</span>
        <span>
          Web Designed by Rafael Fuentes
        </span>
      </footer>
    </div>
  );
}

export default App;
