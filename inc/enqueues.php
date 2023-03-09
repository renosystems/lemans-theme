<?php

function theme_enqueues_styles_scripts()
{
  //wp_enqueue_script('bootstrap', THEME_DIR . '/assets/bootstrap/js/bootstrap.min.js', array('jquery'), null, false);
  wp_enqueue_script('bootstrap.bundle', THEME_DIR . '/assets/bootstrap/js/bootstrap.bundle.min.js', array('jquery'), null, false);
  wp_enqueue_script('swipper.bundle', THEME_DIR . '/assets/swipper-bundle/swiper-bundle.min.js', array('jquery'), null, false);
	wp_enqueue_script('site', THEME_DIR . '/static/site.js', array('jquery'), null, true);

  /*Enqueue Styles */
  wp_enqueue_style('bootstrap_css', THEME_DIR . '/assets/bootstrap/css/bootstrap.min.css');
  wp_enqueue_style('fontawesome', THEME_DIR . '/assets/fontawesome/css/all.min.css');
  wp_enqueue_style('swipper_css', THEME_DIR . '/assets/swipper-bundle/swiper-bundle.min.css');

  //googlemaps
  wp_enqueue_script(
    'gmaps',
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyDJDv6vSsPztnwazZCAyG5En-zaH2uC_Oc&callback=initGoogleMaps',
    ["jquery", "site"],
    null,
    true
  );
}

add_action('wp_enqueue_scripts', 'theme_enqueues_styles_scripts');
