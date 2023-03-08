<?php

if (function_exists('acf_add_options_page')) {

  acf_add_options_page(
    array(
      'page_title' => 'lemans Settings',
      'menu_title' => 'lemans Settings',
      'menu_slug' => 'theme-general-settings',
      'redirect' => false
    )
  );

  //acf_add_options_sub_page(
  //  array(
  //    'page_title' => 'lemans Header Settings',
  //    'menu_title' => 'Header',
  //    'parent_slug' => 'theme-general-settings',
  //  )
  //);

  acf_add_options_sub_page(
    array(
      'page_title' => 'lemans Footer Settings',
      'menu_title' => 'Footer',
      'parent_slug' => 'theme-general-settings',
    )
  );

  acf_add_options_sub_page(
    array(
      'page_title' => 'lemans Social Links',
      'menu_title' => ' lemans Social Links',
      'parent_slug' => 'theme-general-settings',
    )
  );
}

function my_acf_init()
{

  acf_update_setting('google_api_key', 'AIzaSyDJDv6vSsPztnwazZCAyG5En-zaH2uC_Oc');
}

add_action('acf/init', 'my_acf_init');

//add_action('acf/init');