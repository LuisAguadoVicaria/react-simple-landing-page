import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const datos = [
{image: "http://via.placeholder.com/500x325", title: "Card Title 1", description: "lorem impsum1", url: "http://via.placeholder.com/500x325"},
{image: "http://via.placeholder.com/500x325", title: "Card Title 2", description: "lorem impsum2", url: "http://via.placeholder.com/500x325"},
{image: "http://via.placeholder.com/500x325", title: "Card Title 3", description: "lorem impsum3", url: "http://via.placeholder.com/500x325"},
{image: "http://via.placeholder.com/500x325", title: "Card Title 4", description: "lorem impsum4", url: "http://via.placeholder.com/500x325"}
]

const NavBar = () => {
	return(<nav className="navbar navbar-expand-lg bg-light p-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>)
}

const Jumbotron = () => {
	return(
	<div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button className="btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div>
	)
}

const Cards = (props) => {
	return(
	<div className="container-fluid mb-5">
	<div className="row">
	
	{ props.cards.map( (item, i) => {
		return(
	<div key={i} className="col-sm-12 col-md-6 col-lg-3">
		<div className="card mb-3">
			<img src={item.image} className="card-img-top"/>
			<div className="card-body">
			<h5 className="card-title">{item.title}</h5>
			<p className="card-text">{item.description}</p>
			<a href={item.url} className="btn btn-primary">Go link</a>
			</div>
		</div>
	</div>
		)
	}) }

	</div>
	</div>
	)
}

const Footer = () => {
	return(
	<footer className="footer w-100 bg-light text-center">
		<div className="container-fluid p-3">
			<span className="text-muted">Footer &copy; LuisAguadoVicaria</span>
		</div>
	</footer>
	
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
	<Jumbotron />
	<Cards cards={datos} />
	<Footer />
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();