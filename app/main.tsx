import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from '@progress/kendo-react-buttons';

const App = () => {
        return (
          <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 example-col">
              <p>Default Buttons</p>
              <p>
                <Button >Browse</Button>
                <Button icon="folder">Browse</Button>
                <Button icon="folder" />
              </p>
              <p>
                <Button disabled={true}>Browse</Button>
                <Button icon="folder" disabled={true}>Browse</Button>
                <Button icon="folder" disabled={true} />
              </p>
            </div>

            <div className="col-xs-12 col-sm-6 example-col">
              <p>Default Buttons (Primary)</p>
              <p>
                <Button primary={true}>Browse</Button>
                <Button icon="folder" primary={true}>Browse</Button>
                <Button icon="folder" primary={true} />
              </p>
              <p>
                <Button primary={true} disabled={true}>Browse</Button>
                <Button icon="folder" primary={true} disabled={true}>Browse</Button>
                <Button icon="folder" primary={true} disabled={true} />
              </p>
            </div>

            <div className="col-xs-12 col-sm-6 example-col">
              <p>Flat Buttons</p>
              <p>
                <Button look="flat">Browse</Button>
                <Button icon="folder" look="flat">Browse</Button>
                <Button icon="folder" look="flat" />
              </p>
              <p>
                <Button look="flat" disabled={true}>Browse</Button>
                <Button icon="folder" look="flat" disabled={true}>Browse</Button>
                <Button icon="folder" look="flat" disabled={true} />
              </p>
            </div>

            <div className="col-xs-12 col-sm-6 example-col">
              <p>Flat Buttons (Primary)</p>
              <p>
                <Button primary={true} look="flat">Browse</Button>
                <Button icon="folder" primary={true} look="flat">Browse</Button>
                <Button icon="folder" primary={true} look="flat" />
              </p>
              <p>
                <Button primary={true} look="flat" disabled={true}>Browse</Button>
                <Button icon="folder" primary={true} look="flat" disabled={true}>Browse</Button>
                <Button icon="folder" primary={true} look="flat" disabled={true} />
              </p>
            </div>

            <div className="col-xs-12 col-sm-6 example-col">
              <p>Outline Buttons</p>
              <p>
                <Button look="outline">Browse</Button>
                <Button icon="folder" look="outline">Browse</Button>
                <Button icon="folder" look="outline" />
              </p>
              <p>
                <Button look="outline" disabled={true}>Browse</Button>
                <Button icon="folder" look="outline" disabled={true}>Browse</Button>
                <Button icon="folder" look="outline" disabled={true} />
              </p>
            </div>

            <div className="col-xs-12 col-sm-6 example-col">
              <p>Outline Buttons (Primary)</p>
              <p>
                <Button primary={true} look="outline">Browse</Button>
                <Button icon="folder" primary={true} look="outline">Browse</Button>
                <Button icon="folder" primary={true} look="outline" />
              </p>
              <p>
                <Button primary={true} look="outline" disabled={true}>Browse</Button>
                <Button icon="folder" primary={true} look="outline" disabled={true}>Browse</Button>
                <Button icon="folder" primary={true} look="outline" disabled={true} />
              </p>
            </div>

            <div className="col-xs-12 col-sm-6 example-col">
              <p>Clear Buttons</p>
              <p>
                <Button look="clear">Browse</Button>
                <Button icon="folder" look="clear">Browse</Button>
                <Button icon="folder" look="clear" />
              </p>
              <p>
                <Button look="clear" disabled={true}>Browse</Button>
                <Button icon="folder" look="clear" disabled={true}>Browse</Button>
                <Button icon="folder" look="clear" disabled={true} />
              </p>
            </div>

            <div className="col-xs-12 col-sm-6 example-col">
              <p>Clear Buttons (Primary)</p>
              <p>
                <Button primary={true} look="clear">Browse</Button>
                <Button icon="folder" primary={true} look="clear">Browse</Button>
                <Button icon="folder" primary={true} look="clear" />
              </p>
              <p>
                <Button primary={true} look="clear" disabled={true}>Browse</Button>
                <Button icon="folder" primary={true} look="clear" disabled={true}>Browse</Button>
                <Button icon="folder" primary={true} look="clear" disabled={true} />
              </p>
            </div>

            <div className="col-xs-12 example-col">
              <p>Icon Types</p>
              <Button icon="calendar">KendoReact Font Icon</Button>
              <Button iconClass="fa fa-calendar fa-fw">Font Awesome Icon</Button>
              <Button imageUrl="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png">Image Icon</Button>
            </div>
          </div>
        );
}
ReactDOM.render(
  <App />,
    document.querySelector('my-app')
);
