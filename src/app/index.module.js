/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
////////
//控制器 //
////////
import { MainController } from './index.controller';
import { NewFigureController } from './views/figure/new/newFigure.controller';
import { NewFigureBasicController } from './views/figure/new/basic.controller';
import { QueryFigureController } from './views/figure/query/queryFigure.controller';

import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { QueryFigureService } from './views/figure/query/queryFigure.service';

///////
//指令 //
///////
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { ToggleSubmenuDirective } from '../app/components/sidebar/sidebar.directive';
import { FgLineDirective } from './components/fgLine/fgLine.directive';
import { WavesEffectDirective } from './components/wavesEffect/wavesEffect.directive';

angular.module('aps', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'toastr', 'ngTable'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('queryFigureService', QueryFigureService)
  .controller('MainController', MainController)
  .controller('NewFigureController', NewFigureController)
  .controller('NewFigureBasicController', NewFigureBasicController)
  .controller('QueryFigureController', QueryFigureController)
  .directive('toggleSubmenu', ToggleSubmenuDirective)
  .directive('fgLine', FgLineDirective)
  .directive('wavesEffect', WavesEffectDirective)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
