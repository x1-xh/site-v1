export const COMMIT_HASH = getCommitHash();

function getCommitHash(): string {
	// This runs at build time when .git is available
	try {
		const { execSync } = require('node:child_process');
		return execSync('git rev-parse --short HEAD').toString().trim();
	} catch {
		return 'unknown';
	}
}
