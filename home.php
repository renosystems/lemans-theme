<?php

/**
 * Template Name: Homepage
 *
 * @package WordPress
 * @subpackage LeMans
 */


$context = Timber::context();
$timber_post = Timber::query_post();
$context['post'] = $timber_post;

$context['carsAvailableNow'] = new Timber\PostQuery([
  'post_type' => 'cars',
  //'meta_query' => array(
  //  'relation' => 'AND',
  //  array(
  //    'key' => 'featured',
  //    'value' => 1,
  //  ),
  //  array(
  //    'key' => 'available_now',
  //    'value' => 1,
  //  )
  //)
  'meta_key' => 'available_now',
  'meta_value' => 1,
]);

$context['featuredCars'] = new Timber\PostQuery([
  'post_type' => 'cars',
  'numberposts' => 3,
  //'meta_query' => array(
  //  'relation' => 'AND',
  //  array(
  //    'key' => 'featured',
  //    'value' => 1,
  //  ),
  //  array(
  //    'key' => 'available_now',
  //    'value' => 0,
  //  )
  //)
  'meta_key' => 'featured',
  'meta_value' => 1,

]);

$context['cartypes'] = Timber::get_terms([
  'taxonomy' => 'car-type',
  'hide_empty' => false,
]);

$context['brands'] = Timber::get_terms([
  'taxonomy' => 'brand',
  'hide_empty' => false,
]);

//comment
Timber::render('home.twig', $context);