import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export class Alert {
    static msg(msg) {
        this.swal = Swal;
        this.swal.fire(msg);
    }

    static ok(msg) {
        this.swal = Swal;
        this.swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            html: msg,
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        });
    }

    static error(msg) {
        this.swal = Swal;
        this.swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: msg,
        });
    }

    static validate(msg) {
        this.swal = Swal;
        this.swal.fire({
            icon: 'error',
            title: 'Error de validación...',
            html: msg,
        });
    }

    static confirm(msg, title = "¿Esta seguro?") {
        this.swal = Swal;
        return this.swal.fire({
            title: title,
            html: msg,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        });
    }
}