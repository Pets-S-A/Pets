/* eslint-disable no-unused-vars */
'use strict';

const addVaccine = () => {
  Swal.fire({
    title: 'Qual o nome da vaicina?',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off',
    },
    showCancelButton: true,
    confirmButtonText: 'Avançar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true,
    required: true,
    preConfirm: (name) => {
      if (name != '') {
        return name;
      } else {
        Swal.showValidationMessage('É necessário ter um nome!');
      }
    },
  }).then((result) => {
    if (result.value) {
      console.log(result);
      Swal.fire({
        title: 'Quando a vacina foi ou será aplicada?',
        html: `<input id="datepicker" name=${JSON.stringify(result.value)} 
                readonly class="swal2-input">`,
        customClass: 'swal2-overflow',
        onOpen: function() {
          $('#datepicker').datepicker({
            dateFormat: 'dd/mm/yy',
          });
        },
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Avançar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
        required: true,
        preConfirm: () => {
          const name = $('#datepicker').prop('name');
          const date = moment($('#datepicker').val(), 'DD/MM/YYYY')
              .format('YYYY-MM-DD HH:mm:ss Z');
          const petID = $('#petID').val();
          if (date != '') {
            const body = JSON.stringify({
              name,
              date,
              petID,
            });
            return fetch(`/api/vaccine/create`,
                {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body,
                })
                .then((response) => {
                  if (!response.ok) {
                    throw new Error(response.statusText);
                  }
                  return response.json();
                })
                .catch((error) => {
                  Swal.showValidationMessage(
                      `Request failed: ${error}`,
                  );
                });
          } else {
            Swal.showValidationMessage('É necessário ter uma data!');
          }
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then(function(result) {
        if (result.dismiss == 'cancel') {
          return;
        }
        if (result.value.success) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Vacina cadastrada com sucesso!',
            showConfirmButton: false,
            timer: 1500,
            onAfterClose: () => {
              window.location.reload();
            },
          });
        }
      });
    }
  });
};
