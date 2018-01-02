import { h, Component } from 'preact';

export default class Header extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	render({ githubInfo }, state) {
		return (
			<div class="uk-section-small">
				<div class="uk-container uk-container-expand uk-text-center uk-position-relative">
					<ul uk-margin class="uk-subnav tm-subnav uk-flex-inline uk-flex-center uk-margin-remove-bottom">
						<li class="uk-first-column">
							<span>
								ALL RIGHTS RESERVED &copy; 2017. <a href={githubInfo.owner.html_url}>@{githubInfo.owner.login}</a>
							</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
