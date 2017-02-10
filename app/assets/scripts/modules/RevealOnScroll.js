import $ from 'jquery';
import Waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {

    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.createWaypoints();
        this.hideInitially();
    }

    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function(){
            var currentItem = this;

            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: that.offsetPercentage
            });
        });
    }

    hideInitially() {
        this.itemsToReveal.addClass('reveal-item');
    }
}

export default RevealOnScroll;
