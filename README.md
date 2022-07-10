<h1 align="center">React Simple Landing Page</h1>

<p align="center" >
  <a href="https://luisaguadovicaria.github.io/react-simple-landing-page/">
    <img height="44px" src="https://github.com/LuisAguadoVicaria/LuisAguadoVicaria/raw/main/proyect-images/live-demo-button.png" alt="live-demo" align="center">
  </a>
</p>
<p align="center" >
  <a href="https://luisaguadovicaria.github.io/react-simple-landing-page/">
    <img   src="https://github.com/LuisAguadoVicaria/LuisAguadoVicaria/raw/main/proyect-images/react-simple-landing-page.png" alt="live-demo" align="center">
  </a>
</p>
<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/alexandresanlim/Badges4-README.md-Profile)[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()

</div>
<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

</div>

<br>

## Featured

<br>

> <br>How to send data to React components using props</br>
> Main code: `index.js`<br>
> <br>

```jsx
...

const datos = [
{image: "http://via.placeholder.com/500x325", title: "Card Title 1", description: "lorem impsum1", url: "http://via.placeholder.com/500x325"},
{image: "http://via.placeholder.com/500x325", title: "Card Title 2", description: "lorem impsum2", url: "http://via.placeholder.com/500x325"},
{image: "http://via.placeholder.com/500x325", title: "Card Title 3", description: "lorem impsum3", url: "http://via.placeholder.com/500x325"},
{image: "http://via.placeholder.com/500x325", title: "Card Title 4", description: "lorem impsum4", url: "http://via.placeholder.com/500x325"}
] // The data

...

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
} // Display items

...

<Cards cards={datos} /> // Render component

```

## Deployment

- Assuming you have installed Node.js locally, run: `npm install`
- Run: `npm run build`
- Look for the `/build` folder, this is the compiled web page.
- Make sure that the HTML and JS paths are correct.
 
<sub><sub>You can also open any GitHub repository in Gitpod</sub></sub> 
  
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/LuisAguadoVicaria/react-simple-landing-page)

## Contact

  <sub>Feel free to leave me a message, I'm friendly!</sub>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luis-aguado-vicar%C3%ADa-546b33241/)
