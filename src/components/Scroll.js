import React from 'react';

const Scroll = props => {
	return (
		<div style={{ overflowY: 'scroll', borderTop: '3px solid rgb(50, 250, 244)', height: '750px' }}>
			{props.children}
		</div>
	);
};

export default Scroll;
