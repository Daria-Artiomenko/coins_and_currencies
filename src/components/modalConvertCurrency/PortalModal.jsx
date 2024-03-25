import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';



const PortalModal = ({children}) => {
	const container = document.createElement('div');
	document.body.append(container);


  return createPortal(children, container);
};

PortalModal.propTypes = {
	children: PropTypes.node
}
export default PortalModal;