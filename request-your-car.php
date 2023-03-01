<?php

/**
 * Template Name: RequestYourCarPage
 *
 * @package WordPress
 * @subpackage LeMans
 */


$context = Timber::context();
$timber_post = Timber::query_post();
$context['post'] = $timber_post;
$context['options'] = get_fields('options');

$requestedCar = sanitize_text_field(get_query_var('requestedCar'));

if ($requestedCar) {
  $context['requestedCar'] = $requestedCar;
  $context['cars'] = new Timber\PostQuery([
    'post_type' => 'cars',
    'post_name__in' => [$requestedCar],
  ]);

}

//comment
Timber::render('page-request-your-car.twig', $context);