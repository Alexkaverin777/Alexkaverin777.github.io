import React, {Fragment} from "react";
import './ButtonClose.css'

const ButtonClose = props => {
	return (
		<Fragment>
			<button className={props.classBtn} onClick={props.click}>X</button>
		</Fragment>
	)
};

export default ButtonClose