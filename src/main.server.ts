import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { registerLicense } from '@syncfusion/ej2-base';
import { environment } from './app/env/environment';
registerLicense(environment.syncfusionLicense);

const bootstrap = (context:BootstrapContext) => bootstrapApplication(AppComponent, config, context);

export default bootstrap;
