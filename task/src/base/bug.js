import React from 'react';
import './css/index.css'

export default () => {
	return (
		React.createElement('div', { key: '2', className: 'bug' }, '我是右边')
	)
}