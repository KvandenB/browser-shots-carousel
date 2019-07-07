/**
 * External dependencies
 */
import loadjs from 'loadjs';

const { Component, Fragment } = wp.element;

const { __, _x } = wp.i18n;

const {
	PanelBody,
	SelectControl,
	TextControl,
	TextareaControl,
	Toolbar,
	ToggleControl,
	Button,
	ButtonGroup,
	PanelRow,
	ExternalLink,
} = wp.components;

const {
	InspectorControls,
	BlockControls
} = wp.editor;

const {
	RichText
} = wp.blockEditor;


class Browser_Shots_Carousel extends Component {

	constructor() {

		super( ...arguments );

		this.state = {
			slides: this.props.attributes.slides || [''],
			directionNav: this.props.attributes.directionNav,
			controlNav: this.props.attributes.controlNav,
			lightbox: this.props.attributes.lightbox,
			align: this.props.attributes.align,
			welcome: true,
			version: '1',
			width: this.props.attributes.width,
			height: this.props.attributes.height,
			link: this.props.attributes.link,
			target: this.props.attributes.target,
			rel: this.props.attributes.rel,
			image_class: this.props.attributes.image_class,
			image_size: this.props.attributes.image_size,
			display_link: 'undefined' === typeof this.props.attributes.display_link ? true : this.props.attributes.display_link,
		};
		this.props.attributes.slides = this.state.slides;

	};



	/**
	 * Reload the image from the image server.
	 * This allows users to get rid of the 'generating screenshot' message.
	 */
	refresh = () => {

		const version = parseInt( this.state.version ) + 1;
		this.setState( { version } );

	};

	/**
	 * Return all slides in JSX format.
	 */
	showSlides = () => {
		return ( this.state.slides.map((el, i) =>
			<div key={i}>
				<div className="browser-shots-carousel-input-row" style={{position: 'relative'}}>
					<div>
						<label>{__( 'Image Url', 'browser-shots-carousel' )}
							<br />
							<input
								type="text"
								value={ undefined != this.props.attributes.slides[i] ? this.props.attributes.slides[i].title : ''}
								placeholder = "http://"
								onChange={this.handleChange.bind(this, i)}
							/>
						</label>
					</div>
					<div>
						<label>{__( 'Link Url (Optional)', 'browser-shots-carousel' )}
							<br />
							<input
								type="text"
								value={ undefined != this.props.attributes.slides[i] ? this.props.attributes.slides[i].link : ''}
								placeholder = "http://"
								onChange={this.handleLinkChange.bind(this, i)}
							/>
						</label>
					</div>
					<div>
						<label>{__( 'Image Caption', 'browser-shots-carousel')}</label><br />
						<RichText
							tagName="div"
							className='wp-caption-text'
							placeholder={__( 'Write caption...', 'browser-shots' )}
							value={undefined != this.props.attributes.slides[i] ? this.props.attributes.slides[i].caption : ''}
							onChange={this.handleCaptionChange.bind(this, i)}
						/>
					</div>
					<div className="browser-shots-carousel-remove">
						<input type='button' value={__('Remove', 'browser-shots-carousel')} onClick={this.removeClick.bind(this, i)} />
					</div>
				</div>
			</div>
		) );
	}

	/**
	 * Add a new slide.
	 */
	addClick = () => {
		this.setState(prevState => ({ slides: [...prevState.slides, '']}));
	}

	/**
	 * Remove a Slide.
	 */
	removeClick(i){
		let slides = [...this.state.slides];
		slides.splice(i,1);
		this.props.setAttributes( { slides: slides } );
		this.setState({ slides });
	}

	/**
	 * Update the caption when it's changed.
	 */
	handleCaptionChange = (i, event) => {
		if ( undefined == event ) {
			return;
		}
		let slides = [...this.state.slides];
		if ( slides.length == 0 ) {
			return;
		}
		slides[i] = { link: slides[i].link || '', caption : event || '', title: slides[i].title || '' };
		this.props.setAttributes( { slides: slides } );
		this.setState({ slides });

	}

	/**
	 * Update the title when it's changed.
	 */
	handleChange = (i, event) => {
		if ( undefined == event ) {
			return;
		}
		let slides = [...this.state.slides];
		if ( slides.length == 0 ) {
			return;
		}
		slides[i] = { link: slides[i].link || '', title: event.target.value || '', caption: slides[i].caption || '' };
		this.props.setAttributes( { slides: slides } );
		this.setState({ slides });
	}

	/**
	 * Update the title when it's changed.
	 */
	handleLinkChange = (i, event) => {
		if ( undefined == event ) {
			return;
		}
		let slides = [...this.state.slides];
		if ( slides.length == 0 ) {
			return;
		}
		slides[i] = { link: event.target.value, title: slides[i].title || '', caption: slides[i].caption || '' };
		this.props.setAttributes( { slides: slides } );
		this.setState({ slides });
	}


	/**
	 * Create a preview image.
	 *
	 * This is a not a complete screenshot image as output by the shortcode. It
	 * simply has enough info to preview what will be output.
	 */
	createPreviewImage = () => {
		const { width, height, slides } = this.props.attributes;
		return ( slides.map((el, i) =>
				<img src={ 'https://s0.wordpress.com/mshots/v1/' + encodeURI( this.state.slides[i].title ) + `?w=${width}&h=${height}&version=${this.state.version}`} alt={`${this.props.attributes.alt}`} width={`${width}`} height={`${height}`} title={this.state.slides[i]['caption']} key={i} />
		 ) );
	};


	render() {
		const { attributes } = this.props;
		const { effect, align, directionNav, controlNav, lightbox, theme, width, height, alt, link, target, rel, image_size, content, display_link, post_links } = attributes;

		const relOptions = [
			{
				value: '',
				label: __( 'None', 'browser-shots' )
			},
			{
				value: 'nofollow',
				label: __( 'No Follow', 'browser-shots' )
			}
		];

		const themeOptions = [
			{ value: 'default', label: __( 'Default', 'browser-shots-carousel' ) },
			{ value: 'bar', label: __( 'Bar', 'browser-shots-carousel' ) },
			{ value: 'dark', label: __( 'Dark', 'browser-shots-carousel' ) },
			{ value: 'light', label: __( 'Light', 'browser-shots-carousel' ) },
		];

		const effectOptions = [
			{ value: 'sliceDown', label: __( 'Slide Down', 'browser-shots-carousel' ) },
			{ value: 'sliceDownLeft', label: __( 'Slide Down Left', 'browser-shots-carousel' ) },
			{ value: 'sliceUp', label: __( 'Slice Up', 'browser-shots-carousel' ) },
			{ value: 'sliceUpLeft', label: __( 'Slice Up Left', 'browser-shots-carousel' ) },
			{ value: 'sliceUpDown', label: __( 'Slice Up Down', 'browser-shots-carousel' ) },
			{ value: 'sliceUpDownLeft', label: __( 'Slice Up Down Left', 'browser-shots-carousel' ) },
			{ value: 'fold', label: __( 'Fold', 'browser-shots-carousel' ) },
			{ value: 'fade', label: __( 'Fade', 'browser-shots-carousel' ) },
			{ value: 'random', label: __( 'Random', 'browser-shots-carousel' ) },
			{ value: 'slideInRight', label: __( 'Slide In Right', 'browser-shots-carousel' ) },
			{ value: 'slideInLeft', label: __( 'Slide In Left', 'browser-shots-carousel' ) },
			{ value: 'boxRandom', label: __( 'Box Random', 'browser-shots-carousel' ) },
			{ value: 'boxRain', label: __( 'Box Rain', 'browser-shots-carousel' ) },
			{ value: 'boxRainGrow', label: __( 'Box Rain Grow', 'browser-shots-carousel' ) },
			{ value: 'boxRainGrowReverse', label: __( 'Box Rain Grow Reverse', 'browser-shots-carousel' ) },
		];

		const alignOptions = [
			{ value: 'left', label: __( 'Align Left', 'browser-shots-carousel' ) },
			{ value: 'center', label: __( 'Align Center', 'browser-shots-carousel' ) },
			{ value: 'right', label: __( 'Align Right', 'browser-shots-carousel' ) },
		];

		const resetSelect = [
			{
				icon: 'edit',
				title: __( 'Edit URL', 'browser-shots' ),
				onClick: () => this.setState( { welcome: true } )
			},
			{
				icon: 'update',
				title: __( 'Refresh Image', 'browser-shots' ),
				onClick: ( e ) => this.refresh()
			}
		];

		const inspectorControls = (

			<InspectorControls>

				<PanelBody title={__( 'Browser Shots Settings', 'browser-shots' )}>

					<p>{__( 'Image Dimensions', 'browser-shots' )}</p>
					<PanelRow className="browser-shots-dimensions">
						<TextControl
							type="number"
							label={__( 'Width', 'browser-shots' )}
							value={width}
							min={100}
							max={1280}
							onChange={
								( value ) => {
									if ( value > 1280 ) {
										value = 1280;
									}
									this.props.setAttributes( { width: value, image_size: 'custom' } )
								}
							}
						/>
						<TextControl
							type="number"
							label={__( 'Height', 'browser-shots' )}
							value={height}
							min={100}
							max={960}
							onChange={
								( value ) => {
									if ( value > 960 ) {
										value = 960;
									}
									this.props.setAttributes( { height: value, image_size: 'custom' } )
								}
							}
						/>
					</PanelRow>

					<PanelRow className="browser-shots-dimensions-options">
						<ButtonGroup>
							<Button
								isDefault
								isPrimary={'small' == image_size ? true : false}
								onClick={
									( e ) => {
										this.props.setAttributes(
											{
												width: 320,
												height: 240,
												image_size: 'small',
											}
										);
									}
								}
							>
								{_x( 'S', 'Small Image Size', 'browser-shots' )}
							</Button>
							<Button
								isDefault
								isPrimary={'medium' == image_size ? true : false}
								onClick={
									( e ) => {
										this.props.setAttributes(
											{
												width: 640,
												height: 480,
												image_size: 'medium',
											}
										);
									}
								}
							>
								{_x( 'M', 'Medium Image Size', 'browser-shots' )}
							</Button>
							<Button
								isDefault
								isPrimary={'large' == image_size ? true : false}
								onClick={
									( e ) => {
										this.props.setAttributes(
											{
												width: 960,
												height: 720,
												image_size: 'large',
											}
										);
									}
								}
							>
								{_x( 'L', 'Large Image Size', 'browser-shots' )}
							</Button>
							<Button
								isDefault
								isPrimary={'full' == image_size ? true : false}
								onClick={
									( e ) => {
										this.props.setAttributes(
											{
												width: 1280,
												height: 960,
												image_size: 'full',
											}
										);
									}
								}
							>
								{_x( 'XL', 'Extra Large Image Size', 'browser-shots' )}
							</Button>
						</ButtonGroup>
						<Button
							isDefault
							onClick={
								( e ) => {
									this.props.setAttributes(
										{
											width: 600,
											height: 450,
											image_size: 'medium',
										}
									);
								}
							}
						>
							{_x( 'Reset', 'Reset Image Size to Default', 'browser-shots' )}
						</Button>
					</PanelRow>

					<Button
						onClick={( e ) => { this.refresh() }}
						isDefault
					>
						{__( 'Refresh Image', 'browser-shots' )}
					</Button>

				</PanelBody>

				<PanelBody title={__( 'Slider Settings', 'browser-shots' )} initialOpen={false}>
					<p><em>{__('This is previewed using the default theme with bullets and navigation available. You can change these on the front-end by adjusting your slider settings.', 'browser-shots-carousel' )}</em></p>
					<SelectControl
						label={ __( 'Theme', 'wp-plugin-info-card' ) }
						options={ themeOptions }
						value={ theme }
						onChange={ ( value ) => {
							this.props.setAttributes( { theme: value } );
							this.props.attributes.theme = value;
							this.setState( { theme: value } );
						} }
					/>
					<SelectControl
						label={ __( 'Effect', 'wp-plugin-info-card' ) }
						options={ effectOptions }
						value={ effect }
						onChange={ ( value ) => {
							this.props.setAttributes( { effect: value } );
							this.props.attributes.effect = value;
							this.setState( { effect: value } );
						} }
					/>
					<SelectControl
						label={ __( 'Align', 'wp-plugin-info-card' ) }
						options={ alignOptions }
						value={ align }
						onChange={ ( value ) => {
							this.props.setAttributes( { align: value } );
							this.props.attributes.align = value;
							this.setState( { align: value } );
						} }
					/>
					<ToggleControl
						label={__( 'Allow Next/Prev Nav', 'browser-shots' )}
						onChange={
							( value ) => {
								this.props.setAttributes( { directionNav: value } );
								this.setState( { directionNav: value } );
							}
						}
						checked={this.state.directionNav}
					/>
					<ToggleControl
						label={__( 'Allow Bullets', 'browser-shots' )}
						onChange={
							( value ) => {
								this.props.setAttributes( { controlNav: value } );
								this.setState( { controlNav: value } );
							}
						}
						checked={this.state.controlNav}
					/>
					<ToggleControl
						label={__( 'Pop images in a lightbox', 'browser-shots' )}
						onChange={
							( value ) => {
								this.props.setAttributes( { lightbox: value } );
								this.setState( { lightbox: value } );
							}
						}
						checked={this.state.lightbox}
					/>
				</PanelBody>

				<PanelBody title={__( 'Link Settings', 'browser-shots' )} initialOpen={false}>

					<ToggleControl
						label={__( 'Use link', 'browser-shots' )}
						onChange={
							( display_link ) => {
								this.props.setAttributes( { display_link: display_link } );
								this.setState( { display_link: display_link } );
							}
						}
						checked={this.state.display_link}
					/>

					{this.state.display_link &&
						<Fragment>
							<ToggleControl
								label={__( 'Open in New Tab', 'browser-shots' )}
								onChange={
									( value ) => {
										let linkTarget = value ? '_blank' : 'none';
										this.props.setAttributes( { target: linkTarget } );
									}
								}
								checked={target === '_blank'}
							/>

							<ToggleControl
								label={__( 'Set Nofollow', 'browser-shots' )}
								onChange={
									( value ) => {
										let linkRel = value ? 'nofollow' : '';
										this.props.setAttributes( { rel: linkRel } );
									}
								}
								checked={rel === 'nofollow'}
							/>
						</Fragment>
					}

				</PanelBody>
			</InspectorControls>
		);

		return (

			<Fragment>
				{this.state.welcome &&
					<div className="browsershots-block-carousel">
						<div className="browsershots-svg">
							<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
								<g fill="none" fill-rule="evenodd">
									<path fill="#000000" d="M18,5 L4,5 L4,19 C2.8954305,19 2,18.1045695 2,17 L2,5 C2,3.8954305 2.8954305,3 4,3 L16,3 C17.1045695,3 18,3.8954305 18,5 Z" />
									<path stroke="#000000" stroke-width="2" d="M16.6666667,8 L11.3333333,8 L10.5,10 L8,10 C7.44771525,10 7,10.4477153 7,11 L7,19 C7,19.5522847 7.44771525,20 8,20 L20,20 C20.5522847,20 21,19.5522847 21,19 L21,11 C21,10.4477153 20.5522847,10 20,10 L17.5,10 L16.6666667,8 Z" />
									<circle cx="14" cy="15" r="2" stroke="#000000" stroke-width="2" />
								</g>
							</svg>
						</div>
						{this.showSlides()}
						<div className="browser-shots-carousel-actions">
							<a
								href="#"
								title={__( 'Add Slide', 'browser-shots-carousel' )}
								className="add-slide"
								onClick={
									( e ) => {
										e.preventDefault();
										this.addClick();
									}
								}
							>
								<span className="dashicons dashicons-plus"></span>
							</a>
							<input
								type="submit" id="browsershots-input-preview"
								value={__( 'Preview', 'browser-shots-carousel' )}
								onClick={
									( e ) => {
										this.setState( { welcome: false } );
									}
								}
							/>
						</div>
					</div>
				}

				{!this.state.welcome &&

					<Fragment>
						{inspectorControls}
						<BlockControls>
							<Toolbar controls={resetSelect} />
						</BlockControls>
						<div
							className={'browser-shots-gutenberg-wrapper'}
							style={
								{
									overflow: 'hidden',
									maxWidth: '100%',
								}
							}
						>
							<div className="section slideshow">
								<div className="slider-wrapper theme-default">
									<div className="ribbon"></div>
									<div id="bsc-slideshow" className="nivoSlider">
										{this.createPreviewImage()}
										{loadjs(browser_shots_nivo.location, () => {})}
									</div>
								</div>
							</div>
						</div>
					</Fragment>
				}
			</Fragment>
		);
	}
}

export default Browser_Shots_Carousel;
