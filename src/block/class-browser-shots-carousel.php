<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 * Also register rest route and initialize Gutenberg block.
 *
 * @since   1.0.0
 * @package browser-shots-carousel
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Browser_Shots_Carousel {

	/**
	 * Initialize actions for Gutenberg.
	 *
	 * @since 2.7.0
	 */
	public function __construct() {

		add_action( 'init', array( $this, 'register_block' ) );

	}


	/**
	 * Registers the block in PHP and its attributes.
	 *
	 * @since 2.7.0
	 */
	public function register_block() {

		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		// Register block styles for both frontend + backend.
		wp_register_style(
			'browser_shots_carousel', // Handle.
			plugins_url( 'dist/blocks.style.build.css', dirname( dirname( __FILE__ ) ) ), // Block style CSS.
			array( 'wp-editor' ), // Dependency to include the CSS after it.
			BROWSER_SHOTS_CAROUSEL_VERSION
		);

		// Register block editor script for backend.
		wp_register_script(
			'browser_shots_carousel', // Handle.
			plugins_url( '/dist/blocks.build.js', dirname( dirname( __FILE__ ) ) ), // Block.build.js: We register the block here. Built with Webpack.
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
			BROWSER_SHOTS_CAROUSEL_VERSION,
			true // Enqueue the script in the footer.
		);

		wp_set_script_translations( 'browser_shots_carousel', 'browser-shots-carousel' );

		// Register block editor styles for backend.
		wp_register_style(
			'browser_shots_carousel_editor', // Handle.
			plugins_url( 'dist/blocks.editor.build.css', dirname( dirname( __FILE__ ) ) ), // Block editor CSS.
			array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
			BROWSER_SHOTS_CAROUSEL_VERSION
		);

		/**
		 * Register Gutenberg block on server-side.
		 *
		 * Register the block on server-side to ensure that the block
		 * scripts and styles for both frontend and backend are
		 * enqueued when the editor loads.
		 *
		 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
		 * @since 1.16.0
		 */
		register_block_type(
			'browser-shots/browser-shots-carousel',
			array(
				// Enqueue blocks.style.build.css on both frontend & backend.
				'style'           => 'browser_shots_carousel',
				// Enqueue blocks.build.js in the editor only.
				'editor_script'   => 'browser_shots_carousel',
				// Enqueue blocks.editor.build.css in the editor only.
				'editor_style'    => 'browser_shots_carousel_editor',
				'attributes'      => array(
					'slides'       => array(
						'type'    => 'query',
						'default' => '[]',
					),
					'html'         => array(
						'type'    => 'string',
						'default' => '',
					),
					'items'          => array(
						'type'    => 'array',
						'default' => [],
					),
					'width'        => array(
						'type'    => 'int',
						'default' => 600,
					),
					'height'       => array(
						'type'    => 'int',
						'default' => 450,
					),
					'alt'          => array(
						'type'    => 'string',
						'default' => '',
					),
					'link'         => array(
						'type'    => 'string',
						'default' => '',
					),
					'target'       => array(
						'type'    => 'string',
						'default' => '',
					),
					'classname'    => array(
						'type'    => 'string',
						'default' => '',
					),
					'rel'          => array(
						'type'    => 'string',
						'default' => '',
					),
					'display_link' => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'image_size'   => array(
						'type'    => 'string',
						'default' => 'medium',
					),
					'content'      => array(
						'type'    => 'string',
						'default' => '',
					),
					'post_links'    => array(
						'type'    => 'boolean',
						'default' => false,
					),
				),
				'render_callback' => array( $this, 'block_frontend' ),
			)
		);
	}


	/**
	 * Block front-end output.
	 *
	 * @since 2.7.0
	 * @see register_block
	 *
	 * @param array $attributes Array of passed shortcode attributes.
	 */
	public function block_frontend( $attributes ) {

		if ( is_admin() ) {
			return;
		}

		$args = array(
			'url'          => esc_url_raw( $attributes['url'] ),
			'width'        => absint( $attributes['width'] ),
			'height'       => absint( $attributes['height'] ),
			'alt'          => sanitize_text_field( $attributes['alt'] ),
			'link'         => ! empty( $attributes['link'] ) ? esc_url_raw( $attributes['link'] ) : '',
			'target'       => sanitize_text_field( $attributes['target'] ),
			'class'        => sanitize_text_field( $attributes['classname'] ),
			'image_class'  => sanitize_text_field( isset( $attributes['align'] ) ? 'align' . $attributes['align'] : 'alignnone' ),
			'rel'          => sanitize_text_field( $attributes['rel'] ),
			'display_link' => (bool) $attributes['display_link'],
			'post_links'   => (bool) $attributes['post_links'],
		);

		$content = ( isset( $attributes['content'] ) && ! empty( $attributes['content'] ) ) ? wp_kses_post( $attributes['content'] ) : '';

		$browsershots = new BrowserShots();
		return wp_kses_post( $browsershots->shortcode( $args, $content ) );

	}

}

new Browser_Shots_Carousel();
