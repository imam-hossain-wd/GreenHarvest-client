import { useState } from 'react';
import {  Modal } from 'antd';
import ColorButton from '../../../components/button/ColorButton';
import { Link } from 'react-router-dom';
import {
  SendOutlined
} from "@ant-design/icons";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFirstCategory, setShowFirstCategory] = useState(true);
  const [showSecondCategory, setShowSecondCategory] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLinkClick = () => {
    setIsModalOpen(false);
  };

  const handleSliderChanger = ()=> {
    setShowFirstCategory(!showFirstCategory);
    setShowSecondCategory(!showSecondCategory)
  }


  return (
    <>
      <ColorButton className='' onClick={showModal}>
      Select Category
      </ColorButton>
      <Modal className='w-[90%] -mt-5' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
       footer={null} 
      >
   
      {showFirstCategory && <div className='grid lg:hidden grid-cols-2 mt-2'>
       <div className="w-44 p-2 -mt-3 flex flex-col gap-1">
                <h4
                  className="pb-2 mb-1"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Fruits & vagetable
                </h4>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Fresh Fruits
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black no-underline hover:text-primary"
                  to="/"
                >
                  Fresh Vegatables
                </Link>
              </div>

              <div className="w-44 p-2 -mt-3 flex flex-col gap-1 ">
                <h4
                  className="pb-2 mb-1"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Meat & Fish
                </h4>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Frozen Fish
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Meat
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Dried Fish
                </Link>
              </div>

              <div className="w-44 p-2 -mt-2 flex flex-col gap-1 ">
                <h4
                  className="pb-2 mb-1"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Cooking
                </h4>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Spices
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Salt Sugar
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Rice
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Dal or Lantil
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Ready Mix
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Oil
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Ghee
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Shemai & Suji
                </Link>
              </div>

              <div className="w-44 p-2 -mt-2 flex flex-col gap-1 ">
                <h4 className="pb-2 mb-1" style={{borderBottom:"2px dotted #84C225"}}>Bevarages</h4>
                  <Link onClick={() => handleLinkClick()} className="text-black tree-product hover:text-primary no-underline" to="/">Tree</Link>
                  <Link onClick={() => handleLinkClick()} className="text-black hover:text-primary no-underline" to="/">Coffee</Link>
                  <Link onClick={() => handleLinkClick()} className="text-black hover:text-primary no-underline" to="/">Soft Drinks</Link>
                  <Link onClick={() => handleLinkClick()} className="text-black hover:text-primary no-underline" to="/">Powder Drinks</Link>
                </div> 
                <div className="w-44  tree-product-items p-5 -mt-3 flex-col gap-2 ">
                <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}>Bevarages</h4>
                  <Link className="text-black hover:text-primary no-underline" to="/">Tree</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Coffee</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Soft Drinks</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Powder Drinks</Link>
                </div>
               {/* <Link className="no-underline ml-28" to="/category"> */}
               <ColorButton onClick={handleSliderChanger} className="flex h-7 w-36 justify-center items-center text-xs ">
                  More Category <SendOutlined />
                  </ColorButton>
               {/* </Link> */}
       </div>

       }

       {showSecondCategory && <div className='grid lg:hidden grid-cols-2 mt-2'>
       <div className="w-44 p-2 -mt-3 flex flex-col gap-1">
                <h4
                  className="pb-2 mb-1"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Home cleaning
                </h4>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Fresh Fruits
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black no-underline hover:text-primary"
                  to="/"
                >
                  Fresh Vegatables
                </Link>
              </div>

              <div className="w-44 p-2 -mt-3 flex flex-col gap-1 ">
                <h4
                  className="pb-2 mb-1"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Health Product
                </h4>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Baby Care
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Meat
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Dried Fish
                </Link>
              </div>

              <div className="w-44 p-2 -mt-2 flex flex-col gap-1 ">
                <h4
                  className="pb-2 mb-1"
                  style={{ borderBottom: "2px dotted #84C225" }}
                >
                  Kitchen Appliances
                </h4>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Spices
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Salt Sugar
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Rice
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Dal or Lantil
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Ready Mix
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Oil
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Ghee
                </Link>
                <Link
                onClick={() => handleLinkClick()}
                  className="text-black hover:text-primary no-underline"
                  to="/"
                >
                  Shemai & Suji
                </Link>
              </div>

              <div className="w-44 p-2 -mt-2 flex flex-col gap-1 ">
                <h4 className="pb-2 mb-1" style={{borderBottom:"2px dotted #84C225"}}>Baby Care</h4>
                  <Link onClick={() => handleLinkClick()} className="text-black tree-product hover:text-primary no-underline" to="/">Tree</Link>
                  <Link onClick={() => handleLinkClick()} className="text-black hover:text-primary no-underline" to="/">Coffee</Link>
                  <Link onClick={() => handleLinkClick()} className="text-black hover:text-primary no-underline" to="/">Soft Drinks</Link>
                  <Link onClick={() => handleLinkClick()} className="text-black hover:text-primary no-underline" to="/">Powder Drinks</Link>
                </div> 
                <div className="w-44  tree-product-items p-5 -mt-3 flex-col gap-2 ">
                <h4 className="pb-2" style={{borderBottom:"2px dotted #84C225"}}>Bevarages</h4>
                  <Link className="text-black hover:text-primary no-underline" to="/">Tree</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Coffee</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Soft Drinks</Link>
                  <Link className="text-black hover:text-primary no-underline" to="/">Powder Drinks</Link>
                </div>
               <Link className="no-underline ml-28" to="/category">
               <ColorButton onClick={handleSliderChanger} className="flex h-7 w-36 justify-center items-center text-xs ">
                  Previous Category <SendOutlined />
                  </ColorButton>
               </Link>
       </div>
       } 
      </Modal>
    </>
  );
};

export default App;