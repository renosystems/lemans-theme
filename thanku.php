<?php

/**
 * Template Name: ThankYouPage
 *
 * @package WordPress
 * @subpackage LeMans
 */


$context = Timber::context();
$timber_post = Timber::query_post();
$context['post'] = $timber_post;

//comment
Timber::render('page-thanku.twig', $context);