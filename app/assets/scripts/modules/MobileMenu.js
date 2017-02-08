import $ from 'jquery';

class MobileMenu {

    constructor() {
        this.menuIcon = $('.site-header__menu-icon');
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleMenu);
    }

    toggleMenu() {
        console.log('Hooray! The icon was clicked');
    }
}

export default MobileMenu;
