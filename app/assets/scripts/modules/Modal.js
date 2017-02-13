import $ from 'jquery';

class Modal {

    constructor() {
        this.modal = $('.modal');
        this.openModalBtn = $('.open-modal');
        this.closeModalBtn = $('.modal__close');

        this.events();
    }

    events() {
        // Clicking the open modal button.
        this.openModalBtn.click(this.openModal.bind(this));

        //Clicking the x close modal button.
        this.closeModalBtn.click(this.closeModal.bind(this));

        // Pushes any key.
        $(document).keyup(this.keyPressedHandler.bind(this));
    }

    closeModal() {
        this.modal.removeClass('modal--is-visible');
    }

    keyPressedHandler(e) {
        if(e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass('modal--is-visible');
        return false;
    }
}

export default Modal;
