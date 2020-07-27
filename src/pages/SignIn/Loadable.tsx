import loadable, { LoadableComponent } from '@loadable/component';

const Loadable: LoadableComponent<Record<string, unknown>> = loadable(() =>
  import('./index'),
);

export default Loadable;
