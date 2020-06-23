/* eslint-disable no-unused-vars */
'use strict';

const searchPet = async () => {
  const provisoryID = $('#provisoryID').val();
  if (provisoryID == '') return;
  swal.showLoading();
  fetch(`/api/pet/shared/getPet/${provisoryID}`).then((results) => {
    return results.json();
  }).then((response) => {
    if (response.success) {
      swal.close();
      location.replace(`/vet/pet/info/${response.content.petID}`);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Não foi encontrado nenhum pet com esse ID',
      });
    }
  }).catch((error) => {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Alguma coisa está errada!',
    });
  });
};
