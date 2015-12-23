export function WavesEffectDirective() {
  'ngInject';

  let directive = {
    restrict: 'C',
    link: linkFunc
  };

  return directive;

  function linkFunc(scope, element) {
    if (element.hasClass('btn-icon') || element.hasClass('btn-float')) {
      Waves.attach(element, ['waves-circle']);
    } else if (element.hasClass('btn-light')) {
      Waves.attach(element, ['waves-light']);
    } else {
      Waves.attach(element);
    }

    Waves.init();
  }
}
