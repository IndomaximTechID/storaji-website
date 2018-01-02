import { h, Component } from 'preact';

export default class Header extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	render({ githubInfo }, state) {
		return (
			<div uk-sticky="media: 960" class="uk-navbar-container tm-navbar-container uk-navbar-transparent uk-sticky uk-sticky-fixed">
				<div class="uk-container uk-container-expand">
					<nav class="uk-navbar">
						<div class="uk-navbar-left">
							<a href="/" class="uk-navbar-item uk-logo">
								<canvas width="46" height="46" uk-svg src="assets/storaji.svg" class="uk-margin-small-right" /> Storaji
							</a>
						</div>
						<div class="uk-navbar-right">
							<ul class="uk-navbar-nav uk-visible@m">
								<li><a href="/">Home</a></li>
								<li><a href={[githubInfo.html_url, 'releases'].join('/')}>Changelog</a></li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
