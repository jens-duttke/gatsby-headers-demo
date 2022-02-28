/// <reference lib="webworker" />

type WebpackWorker = new () => Worker;

export default undefined as unknown as WebpackWorker;

self.addEventListener('message', async (_event: MessageEvent<SharedArrayBuffer>) => {
	self.postMessage('ok');
});
