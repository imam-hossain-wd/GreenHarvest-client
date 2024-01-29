import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './style.css';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  children?: MenuItem[],
  type?: 'group',
  link?: string,
): MenuItem {
  const itemProps: MenuItem = {
    key,
    children,
    label,
    type,
    link,
  };
  //@ts-ignore
  return link ? (
    {
      ...itemProps,
      label: <Link to={link}>{label}</Link>,
    }
  ) : (
    itemProps
  );
}


const items: MenuItem[] = [
  getItem('Bevarages', 'sub2', [
    getItem('Coffee', '6', undefined, undefined, '/category/fruit-vegetable/vegetable'),
    getItem('Soft Drinks', '7', undefined, undefined, '/soft-drinks'),
    getItem('Powder Drinks', '8', undefined, undefined, '/powder-drinks'),
  ]),
  getItem('Navigation Three', 'sub4', [
    getItem('Option 9', '9', undefined, undefined, '/option-9'),
    getItem('Option 10', '10', undefined, undefined, '/option-10'),
    getItem('Option 11', '11', undefined, undefined, '/option-11'),
    getItem('Option 12', '12', undefined, undefined, '/option-12'),
  ]),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Submenu = () => {
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
      className='bg-white'
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 170 , color:"black"}}
      items={items}
    />
  );
};

export default Submenu;
