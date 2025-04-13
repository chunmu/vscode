import { app, dialog } from 'electron';

class CodeMain {
	main(): void {
		try {
			this.startup();
		} catch (error) {
			console.error(error.message);
			app.exit(1);
		}
	}

	private async startup(): Promise<void> {
		
	}

	private createServices() {
		// private createServices(): [IInstantiationService] {

	}
}

// Main Startup
const code = new CodeMain();
code.main();
