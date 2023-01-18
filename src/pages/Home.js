import Navbar from '../components/Navbar/Navbar';

import bg1 from '../assets/about-bg.jpg';
import bg2 from '../assets/bg.jpg';
import val1 from '../assets/lightbulb-o.png';
import val2 from '../assets/bank.png';
import val3 from '../assets/balance-scale.png';

import './index.scss';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const Home = () => {
	const [currImg, setCurrImg] = useState(1);

	const handleClick = (direction) => {
		setCurrImg((currImg) => (currImg === 2 ? 1 : currImg + 1));
	};
	return (
		<div className="home">
			<Navbar />

			<div className="jumbotron-wrapper">
				<div className="icon">
					<LeftCircleOutlined
						className="icon-arrow"
						onClick={() => handleClick('left')}
					/>
					<RightCircleOutlined
						className="icon-arrow"
						onClick={() => handleClick('right')}
					/>
				</div>
				<div className="text">
					This is a place where technology & creativity fused into digital
					chemistry
				</div>
				<img src={currImg === 1 ? bg1 : bg2} alt="bg" />
			</div>

			<div className="values">
				<div className="title">OUR VALUES</div>
				<div className="card-wrapper">
					<div className="card-1">
						<img src={val1} alt="val1" width={20} />
						<div className="card-title">Innovative</div>
						<div style={{ maxWidth: '300px' }}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
							quod cumque eos vel alias similique ipsum maiores reprehenderit
							beatae nihil.
						</div>
					</div>
					<div className="card-2">
						<img src={val2} alt="val1" width={20} />
						<div className="card-title">Loyalty</div>
						<div style={{ maxWidth: '300px' }}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
							quod cumque eos vel alias similique ipsum maiores reprehenderit
							beatae nihil.
						</div>
					</div>
					<div className="card-3">
						<img src={val3} alt="val1" width={20} />
						<div className="card-title">Respect</div>
						<div style={{ maxWidth: '300px' }}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
							quod cumque eos vel alias similique ipsum maiores reprehenderit
							beatae nihil.
						</div>
					</div>
				</div>
			</div>

			<div className="values">
				<div className="title">CONTACT US</div>
				<Form layout="vertical" style={{ marginTop: 20, width: '100%', maxWidth: '500px' }}>
					<Form.Item name={'name'} label="Name">
						<Input type="string" />
					</Form.Item>
					<Form.Item
						name={'email'}
						label="Email"
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
							},
						]}>
						<Input type="string" />
					</Form.Item>
					<Form.Item
						name={'message'}
						label="Message"
						rules={[
							{
								required: true,
								message: 'Please input your messages!',
							},
						]}>
						<TextArea />
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" style={{ width: '100%' }}>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>

			<div className="footer">
				<div>Copyright 2016 PT Semua Bisa</div>
			</div>
		</div>
	);
};

export default Home;
