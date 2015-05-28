<?php

return [

    /*
     * The destination path for the javascript file.
     */
    'path' => 'public/js',

    /*
     * The destination filename for the javascript file.
     */
    'filename' => 'jsroute',

    /*
     * The namespace for the helper functions. By default this will bind them to
     * `window.jsroute`.
     */
    'namespace' => 'jsroute',

    /*
     * Generate absolute URLs
     *
     * Set the Application URL in config/app.php
     */
    'absolute' => false,

    /*
     * The Filter Methode
     *
     * 'all' => All routes except "'jsroute' => false"
     * 'only' => Only "'jsroute' => true" routes
     * 'force' => All routes, ignored "jsroute" route parameter
     */
    'filter' => 'all',

    /*
     * Controller Namespace
     *
     * Set here your controller namespace (see RouteServiceProvider -> $namespace) for cleaner action calls
     * e.g. 'App\Http\Controllers'
     */
    'action_namespace' => '',

    /*
     * The path to the template `jsroute.js` file. This is the file that contains
     * the ported helper Laravel url/route functions and the route data to go
     * with them.
     */
    'template' => 'vendor/jeylabs/jsroute/src/templates/jsroute.js',

    /*
     * If application is inside sub folder then use the prefix
     */

    'prefix' => ''

];
