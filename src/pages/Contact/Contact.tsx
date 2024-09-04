import { contactbanner } from "../../utils/assets";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";


const ContactPage = () => {

  const {contact }=contactbanner
  return (
   <div className="-mt-20">
    <img className="h-96 w-full" src={contact}/>
    <ContactForm />
    <GoogleMap />

   </div>
  );
};
export default ContactPage;


