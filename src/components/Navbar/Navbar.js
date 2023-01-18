import { MenuOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useState } from 'react';
import './index.scss';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleOpenMenu = () => {
		setOpen(!open);
	};
	return (
		<Row justify={'space-between'} className="navbar-wrapper" align={'middle'}>
			<Col className="navbar-title">Company</Col>
			<Row gutter={50} className={`menu-wrapper ${open ? 'unhide' : ''}`}>
				<Col className="dropdown navbar-desc">
					About
					<div className="dropdown-content">
						<p href="#">Vission Mission</p>
						<p href="#">History</p>
					</div>
				</Col>
				<Col className="navbar-desc">Our Work</Col>
				<Col className="navbar-desc">Our Team</Col>
				<Col className="navbar-desc">Contact</Col>
			</Row>
			<MenuOutlined onClick={handleOpenMenu} className="menu" />
		</Row>
	);
};

export default Navbar;
