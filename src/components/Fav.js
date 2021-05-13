import React, { Component } from "react";


// import $ from "jquery";
import * as $ from 'jquery';

import "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/js/bootstrap.bundle.js";
export default class Fav extends Component {
    render() {
        // debugger
        // console.log(this.props.active, "fav active")
        return (
            <div id="" className="pb-3">
                {/* flexbox */}
                <div className="fav-btn">

                    <span
                        code={this.props.code}
                        city={this.props.city}
                        onClick={this.props.handleOnChange}
                        className={`favme dashicons dashicons-heart ${this.props.active ? "active" : ""}`}
                    >{this.props.active ? "Remove from favorits" : "Add to favorites"}</span>
                </div>
            </div>

        );
    }
}


export function favme() {
    // Favorite Button - Heart
    // debugger
    // $('.favme').click(function (x) {
    //     // debugger
    //     $(x.target).toggleClass('active');
    // });
    $(document).click(function (e) {
        if ($('.collapse').hasClass('show') && !$('nav').is(e.target) && $('nav').has(e.target).length === 0) {
            $('.navbar-toggler').click()
        }
    })

    // $(window).click(function (e) {
    //     e.preventDefault();
    //     if ($(".navbar-collapse").hasClass("show")) {
    //         // $(".navbar-toggler").click();
    //         $('.navbar-collapse').removeClass("show");//collapse('toggle');//

    //     }
    //     //     // $('.collapse').collapse('hide');
    // });


    // $('.navbar-collapse').click(function (event) {
    //     event.stopPropagation();
    // });
    /* when a user clicks, toggle the 'is-animating' class */
    $(".favme").on('click touchstart', function () {
        $(this).toggleClass('is_animating');
    });

    /*when the animation is over, remove the class*/
    $(".favme").on('animationend', function () {
        $(this).toggleClass('is_animating');
    });
}