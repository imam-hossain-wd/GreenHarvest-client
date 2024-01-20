import { useState } from 'react';
import {  MailOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to="/`category">Grocery</Link>, 'sub1', <MailOutlined />, [
        getItem(<Link to="/">Rice</Link>, '1'),
        getItem(<Link to="/">Spices</Link>, '2'),
        getItem(<Link to="/">Daal & Chola</Link>, '3'),
        getItem(<Link to="/">Vegetable</Link>, '4'),
        getItem(<Link to="/">Fish</Link>, '5'),
      ]),

    getItem(<Link to="/`category">Fruits & Vegatables</Link>, 'sub2', <MailOutlined />, [
        getItem(<Link to="/">Rice</Link>, '1'),
        getItem(<Link to="/">Spices</Link>, '2'),
        getItem(<Link to="/">Daal & Chola</Link>, '3'),
        getItem(<Link to="/">Vegetable</Link>, '4'),
        getItem(<Link to="/">Fish</Link>, '5'),
      ]),
    getItem(<Link to="/`category">Fish & Meat</Link>, 'sub3', <MailOutlined />, [
        getItem(<Link to="/">Rice</Link>, '1'),
        getItem(<Link to="/">Spices</Link>, '2'),
        getItem(<Link to="/">Daal & Chola</Link>, '3'),
        getItem(<Link to="/">Vegetable</Link>, '4'),
        getItem(<Link to="/">Fish</Link>, '5'),
      ]),
    getItem(<Link to="/`category">Beverage</Link>, 'sub4', <MailOutlined />, [
        getItem(<Link to="/">Rice</Link>, '1'),
        getItem(<Link to="/">Spices</Link>, '2'),
        getItem(<Link to="/">Daal & Chola</Link>, '3'),
        getItem(<Link to="/">Vegetable</Link>, '4'),
        getItem(<Link to="/">Fish</Link>, '5'),
      ]),
    getItem(<Link to="/`category">Home & Cleaning</Link>, 'sub5', <MailOutlined />, [
        getItem(<Link to="/">Rice</Link>, '1'),
        getItem(<Link to="/">Spices</Link>, '2'),
        getItem(<Link to="/">Daal & Chola</Link>, '3'),
        getItem(<Link to="/">Vegetable</Link>, '4'),
        getItem(<Link to="/">Fish</Link>, '5'),
      ]),
    getItem(<Link to="/`category">Baby Care</Link>, 'sub6', <MailOutlined />, [
        getItem(<Link to="/">Rice</Link>, '1'),
        getItem(<Link to="/">Spices</Link>, '2'),
        getItem(<Link to="/">Daal & Chola</Link>, '3'),
        getItem(<Link to="/">Vegetable</Link>, '4'),
        getItem(<Link to="/">Fish</Link>, '5'),
      ]),

];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Navigate = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      items={items}
    />
  );
};

export default Navigate;

