import { SvgIconComponent } from '@material-ui/icons';
import { LoadableComponent } from '@loadable/component';

export interface IRoute {
  Icon?: SvgIconComponent;
  path: string;
  Page?: (() => JSX.Element) | LoadableComponent<Record<string, unknown>>;
  render?: () => JSX.Element;
}
