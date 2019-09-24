import React from 'react';
import App from './App'
import Anim from './anim'
import Bug from './bug'
import './css/index.css'

export default () => {
	// ps:命名不规范，key的具体使用需要了解
	return (
		React.createElement('div', null,
			<App />,
			<Anim />,
			<Bug />
		)
	)

}