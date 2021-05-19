import React, { Component } from "react";
import * as $ from 'jquery';
import "bootstrap/dist/js/bootstrap.js";
export default class Fav extends Component {
    render() {

        return (
            <div id="" className="pb-3">

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
    $(document).click(function (e) {
        if ($('.collapse').hasClass('show') && !$('nav').is(e.target) && $('nav').has(e.target).length === 0) {
            $('.navbar-toggler').click()
        }
    })

    /* when a user clicks, toggle the 'is-animating' class */
    $(".favme").on('click touchstart', function () {
        $(this).toggleClass('is_animating');
    });

    /*when the animation is over, remove the class*/
    $(".favme").on('animationend', function () {
        $(this).toggleClass('is_animating');
    });
}