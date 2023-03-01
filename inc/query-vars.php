<?php


function add_query_vars($aVars)
{
  $aVars[] = "requestedCar";

  return $aVars;
}

add_filter('query_vars', 'add_query_vars');