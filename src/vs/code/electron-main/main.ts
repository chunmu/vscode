import { app, dialog } from 'electron';
import { IInstantiationService, ServicesAccessor } from '../../platform/instantiation/common/instantiation.js';
import { ServiceCollection } from '../../platform/instantiation/common/serviceCollection.js';
import { DisposableStore } from '../../base/common/lifecycle.js';
import { InstantiationService } from '../../platform/instantiation/common/instantiationService.js';

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

		private createServices(): [IInstantiationService] {
			// 新建一个存储服务的集合
			const services = new ServiceCollection();
			// 新建一个存储可释放类的集合
			const disposables = new DisposableStore();
			return [new InstantiationService(services, true)]
	}
}

// Main Startup
const code = new CodeMain();
code.main();
