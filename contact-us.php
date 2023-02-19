<?php

/**
 * Template Name: Contactpage
 *
 * @package WordPress
 * @subpackage LeMans
 */


$context         = Timber::context();
$timber_post     = Timber::query_post();
$context['post'] = $timber_post;

//comment
Timber::render('contact-us.twig', $context);