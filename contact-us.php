<?php

/**
 * Template Name: Contactpage
 *
 * @package WordPress
 * @subpackage LeMans
 */


$context = Timber::context();
$timber_post = Timber::query_post();
$context['post'] = $timber_post;
$context['options'] = get_fields('options');

$queryAbout = sanitize_text_field(get_query_var('queryAbout'));

if ($queryAbout) {
  $context['queryAbout'] = $queryAbout;
  $context['cars'] = new Timber\PostQuery([
    'post_type' => 'cars',
    'post_name__in' => [$queryAbout],
  ]);

}

//comment
Timber::render('page-contact-us.twig', $context);