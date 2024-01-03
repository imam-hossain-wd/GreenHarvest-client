import {  Spin } from 'antd';

const Loading = () => (
  <div className='flex justify-center h-screen -mt-28 items-center'>
     <Spin size='large' />
  </div>
);

export default Loading;