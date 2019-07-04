<?php
/**
 * Plugin Name: Browser Shots Carousel
 * Plugin URI: https://mediaron.com/downloads/browser-shots-carousel/
 * Description: Show off your website screenshots in a carousel format.
 * Version: 1.0.0
 * Author: Ronald Huereca, Ben Gilbanks
 * Author URI: https://mediaron.com
 * Requires at least: 5.0
 * Contributors: ronalfy
 * Text Domain: browser-shots-carousel
 * Domain Path: /languages
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'BROWSER_SHOTS_CAROUSEL_PLUGIN_NAME', 'Browser Shots Carousel' );
define( 'BROWSER_SHOTS_CAROUSEL_DIR', plugin_dir_path( __FILE__ ) );
define( 'BROWSER_SHOTS_CAROUSEL_URL', plugins_url( '/', __FILE__ ) );
define( 'BROWSER_SHOTS_CAROUSEL_VERSION', '1.0.1' );
define( 'BROWSER_SHOTS_CAROUSEL_SLUG', plugin_basename( __FILE__ ) );
define( 'BROWSER_SHOTS_CAROUSEL_FILE', __FILE__ );


/**
 * Block Registration and Output.
 */
require_once BROWSER_SHOTS_CAROUSEL_DIR . 'src/block/class-browser-shots-carousel.php';
