import { h, Component } from 'preact';
import UAParser from 'ua-parser-js';

export default class Home extends Component {
	fetchGithubRelease = () => {
		fetch(this.props.githubInfo.releases_url)
			.then(res => res.json())
			.then(res => {
				this.setState({
					release: res[0],
					artifactUrl: this.getArtifactUrl(res[0])
				});
			});
	}

	getArtifactUrl = (release) => {
		let url;
		const { os, cpu } = new UAParser().getResult();
		release.assets.map(o => {
			if (os.name.match(/(CentOS|Debian|Linux|Ubuntu|Mint)$/i)) {
				if (cpu.architecture.match(/32$/i)) {
					if (o.name.match(/i386\.AppImage$/i)) {
						url = o.browser_download_url;
					}
				}
				else if (o.name.match(/x86_64\.AppImage$/i)) {
					url = o.browser_download_url;
				}
				this.setState({ os: 'Linux' });
			}
			else if (os.name.match(/Mac OS$/i)) {
				if (o.name.match(/\.dmg$/i)) {
					url = o.browser_download_url;
				}
				this.setState({ os: os.name });
			}
			else {
				if (o.name.match(/\.exe$/i)) {
					url = o.browser_download_url;
				}
				this.setState({ os: os.name });
			}
			return o;
		});
		return url;
	}
	
	constructor(props, context) {
		super(props, context);
		this.state = {
			release: {},
			artifactUrl: '',
			os: ''
		};
		this.fetchGithubRelease();
	}

	render({ githubInfo }, { artifactUrl, release, os }) {
		return (
			<div uk-height-viewport="offset-top: true; offset-bottom: true" class="uk-section uk-section-small uk-flex uk-flex-middle uk-flex-center uk-text-center">
				<div class="uk-width-1-2@m">
					<div class="uk-container">
						<p>
							<canvas width="128" height="128" uk-svg src="assets/storaji.svg" />
						</p>
						<p class="uk-margin-medium uk-text-lead">
							{githubInfo.description}
						</p>
						<p><h4>Version {release.name}</h4></p>
						<div uk-grid class="uk-child-width-auto uk-grid-medium uk-flex-inline uk-flex-center uk-grid">
							<div>
								<a href={artifactUrl} class="uk-button uk-button-primary tm-button-primary">Download for {os}</a>
							</div>
							<div>
								<a href={githubInfo.html_url} class="uk-button uk-button-default tm-button-default">View Project on Github</a>
							</div>
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
