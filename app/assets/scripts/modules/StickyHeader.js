import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import Waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {

    constructor() {
        this.siteHeader = $('.site-header');
        this.headerLinks = $('.primary-nav a');
        this.headerTrigger = $('.large-hero__title');
        this.pageSections = $('.page-section');
        this.lazyImages = $('.lazyload');
        this.addSmoothScrolling();
        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
        this.refreshWaypoints();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: that.headerTrigger[0],
            handler: function(direction){
                if(direction == "down")
                    that.siteHeader.addClass('site-header--dark');
                else
                    that.siteHeader.removeClass('site-header--dark');
            }
        });
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function(){
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: '18%'
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: '-40%'
            });
        });
    }

    refreshWaypoints() {
     // this.lazyImages.load(function(){            // Before
        this.lazyImages.on('load', function(){      // Now
            Waypoint.refreshAll();
        });
    }
}

export default StickyHeader;
