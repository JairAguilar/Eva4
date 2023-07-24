import React, { useState, useEffect } from "react";
import "./cssinicio/style.css";
import "./cssinicio/codigo.js";
import { Link } from "react-router-dom";

const Contacto = () => {
  const [tareaTitulo, setTareaTitulo] = useState("");
  const [tareaDesc, setTareaDesc] = useState("");
  const [importante, setImportante] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    verNotas();
  }, []);

  const agregarTarea = () => {
    if (tareaTitulo === "" && tareaDesc === "") {
      alert("Debe ingresar título y descripción en las notas");
    } else {
      const newPost = { tareaTitulo, tareaDesc, importante };
      const updatedPosts = posts.filter((post) => post.tareaTitulo !== tareaTitulo);
      updatedPosts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
      limpiarForm();
      verNotas();
    }
  };

  const limpiarForm = () => {
    setTareaTitulo("");
    setTareaDesc("");
    setImportante(false);
  };

  const eliminarNota = (tareaTitulo) => {
    const updatedPosts = posts.filter((post) => post.tareaTitulo !== tareaTitulo);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    verNotas();
    alert("Elemento se ha eliminado!");
  };

  const verNotas = () => {
    const pos = JSON.parse(localStorage.getItem("posts"));
    if (pos) {
      setPosts(pos);
    }
  };

  const generateNotes = () => {
    return posts.map((element, index) => {
      const panelCSS = element.importante ? "panel2" : "panel1";
      return (
        <div key={index} className="col-md-3 col-sm-6">
          <div className={`panel panel-default ${panelCSS}`}>
            <div className="panel-heading">
              <div className="row">
                <div className="col-md-8">{element.tareaTitulo}</div>
                <div className="col-md-2"></div>
                <div className="col-md-2">
                  <span onClick={() => eliminarNota(element.tareaTitulo)} className="fa fa-trash coloricon"></span>
                </div>
              </div>
            </div>
            <div className="panel-body">{element.tareaDesc}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <header>
        <div>
          <h1>POST </h1>
        </div>
      </header>
      <main>
        <section>
          <div className="row">
            <form onSubmit={agregarTarea}>
              <fieldset>
                <div className="mb-3">
                  <input
                    type="text"
                    id="tx-titulo"
                    className="tx-titulo"
                    placeholder="Título"
                    value={tareaTitulo}
                    onChange={(e) => setTareaTitulo(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="tx-descripcion"
                    className="tx-descripcion"
                    placeholder="Descripción"
                    value={tareaDesc}
                    onChange={(e) => setTareaDesc(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ch-importante"
                      checked={importante}
                      onChange={() => setImportante(!importante)}
                    />
                    <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                      Importante
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" id="btn01">
                  AGREGAR
                </button>
              </fieldset>
            </form>
            <hr />
            <div className="row" id="contenedor">
              {generateNotes()}
            </div>
          </div>
        </section>
      </main>
      <ul className="navbar navbar">
          <li className="nav-item">
          <Link to="/calculadora" className="btn btn-primary">Calculadora Factorial</Link>
          </li>
        </ul>
      <footer></footer>
    </div>
    
  );
};

export default Contacto;