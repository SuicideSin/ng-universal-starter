import 'babel-polyfill';
import * as sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

import 'zone.js/dist/zone';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/browser/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
