import React from 'react'


export default class Titulo extends React.Component{
	render(){
		return (
			<h3><strong>{this.props.titulo}</strong></h3>
		)
	}
}