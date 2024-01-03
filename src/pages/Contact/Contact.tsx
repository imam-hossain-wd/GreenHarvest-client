import {
    PhoneOutlined,
    MailOutlined,
    EnvironmentOutlined

  } from '@ant-design/icons';

const Contact = () => {

    // <GlobalOutlined />
    const ContactDetails = [
        {
            title:"Contact On Phone",
            icons : <PhoneOutlined />,
            info: "01624243747"
        },
        {
            title:"Contact on Email",
            icons : <MailOutlined />,
            info: "imamhossain6t9@gmail.com"
        },
        {
            title:"Contact Address",
            icons : <EnvironmentOutlined />,
            info: "Kaptai Road Modunaghat, Hathazari , Chattogram"
        }
    ]
    return (
        <div className='mt-28'> 
                   {/* contact information */}
            <div className='flex'>
            {
            ContactDetails?.map((details, index) => (
                <div key={index} className='flex flex-col justify-center w-full items-center text-center' >
                    <p className='text-primary text-5xl mb-2'>{details?.icons}</p>
                    <h3>{details?.title}</h3>
                    <p className='w-60 text-lg mt-2'>{details?.info}</p>
                </div>
            ))
            }
            </div>

            {/* map */}


        </div>
    );
};

export default Contact;