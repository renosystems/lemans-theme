<?php

/**
 * Template Name: AboutPage
 *
 * @package WordPress
 * @subpackage LeMans
 */


$context = Timber::context();
$timber_post = Timber::query_post();
$context['post'] = $timber_post;
$context['options'] = get_fields('options');

//comment
Timber::render('page-about.twig', $context);