import type { PageProps } from 'gatsby';
import * as React from 'react';

import DemoWorker from '../worker/demo.worker';

const IndexPage: React.FunctionComponent<PageProps<unknown>> = () => {
	const [successful, setSuccessful] = React.useState(false);

	React.useEffect(() => {
		const worker = new DemoWorker();

		worker.addEventListener('message', (event) => {
			if (event.data === 'ok') {
				setSuccessful(true);
			}
		});

		worker.postMessage({
			buffer: new SharedArrayBuffer(1)
		});
	}, []);

	return (
		<div>{successful ? 'Worker loaded successfully' : 'Worker not loaded'}</div>
	);
};
export default IndexPage;
