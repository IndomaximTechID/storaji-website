import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';
import Home from '../routes/home';
import { github } from '../manifest';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	fetchGithubInfo = () => {
		fetch(`https://api.github.com/repos/${github}`)
			.then(res => res.json())
			.then(info => {
				const res = info;
				res.description = res.description.replace(/:+[a-z]+:/i, '');
				res.releases_url = res.releases_url.replace(/\{+\/+[a-z]+\}$/i, '');
				setTimeout(() => {this.setState({ info: res });}, 1000);
			});
	}

	constructor(props, context){
		super(props, context);
		this.state = {
			info: {
				owner: {

				}
			}
		};
		this.fetchGithubInfo();
	}

	render(props, { info }) {
		if (info.name) {
			return (
				<div id="app" class="uk-section-primary tm-section-texture">
					<Header githubInfo={info} />
					<Router onChange={this.handleRoute}>
						<Home path="/" githubInfo={info} />
					</Router>
					<Footer githubInfo={info} />
				</div>
			);
		}
		
		return (
			<div id="app" class="uk-section-primary tm-section-texture">
				<div uk-height-viewport class="uk-section uk-section-small uk-flex uk-flex-middle uk-flex-center uk-text-center">
					<div class="uk-container">
						<p>
							<canvas width="128" height="128" uk-svg src="assets/storaji.svg" />
						</p>
						<div uk-spinner class="uk-spinner uk-position-center uk-icon">
							<svg width="200" height="200" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" ratio="15">
								<circle fill="none" stroke="#000" cx="15" cy="15" r="14" />
							</svg>
						</div>
					</div>
				</div>
				<div id="bubbles">
					<div class="bubble x1" />
					<div class="bubble x2" />
					<div class="bubble x3" />
					<div class="bubble x4" />
					<div class="bubble x5" />
				</div>
			</div>
		);
		
	}
}
