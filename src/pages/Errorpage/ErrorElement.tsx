
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined} from '@ant-design/icons';
const ErrorElement = () => (
<div className='flex justify-center items-center'>
<Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist.."
    extra={<Button className='bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border text-lg text-white w-36 h-10 flex justify-center items-center ml-14 ' type="primary"><Link to="/"><HomeOutlined className="" /> Back Home</Link></Button>}
  />
</div>
);

export default ErrorElement;