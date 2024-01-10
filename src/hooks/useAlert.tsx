

import Swal, { SweetAlertIcon } from 'sweetalert2';

type SweetAlertPosition = 'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end';

const useSweetAlert = () => {
  const showSavedAlert = (
    title: string = "Your work has been saved",
    icon: SweetAlertIcon = "success",
    position: SweetAlertPosition = "top",
    timer: number = 1500,
    width: string = '400px'
  ) => {
    Swal.fire({
      position,
      icon,
      title: '', 
      html: `<h2 style="font-size: 16px;">${title}</h2>`, 
      showConfirmButton: false,
      timer,
      width,
      didOpen: () => {
        const swalIcon = document.querySelector('.swal2-icon');
        if (swalIcon) {
          //@ts-ignore
          swalIcon.style.width = '80px';
          //@ts-ignore
          swalIcon.style.height = '80px';
        }
      },
      customClass: {
        icon: 'custom-swal-icon'
      }
    });
  };

  return showSavedAlert;
};

export default useSweetAlert;


