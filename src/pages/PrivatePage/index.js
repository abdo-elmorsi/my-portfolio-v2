import './style.css'
import { Link } from 'react-router-dom'
const PrivatePage = () => {
	return (
		<div className="error">
			<div className="error-page-wrap">
				<article className="error-page gradient">
					<hgroup>
						<h1>Sorry</h1>
						<h2>Oops! The Site Is Private</h2>
					</hgroup>
					<Link to="/my" title="Back to site" className="error-back">
						Back
					</Link>
				</article>
			</div>
		</div>
	)
}
export default PrivatePage