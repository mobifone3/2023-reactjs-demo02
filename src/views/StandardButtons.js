import React from "react";

export default function StandardButtons() {
  return (
    <div>
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div className="page-title-icon">
              <i className="pe-7s-plane icon-gradient bg-tempting-azure"></i>
            </div>
            <div>
              Standard Buttons
              <div className="page-title-subheading">
                Wide selection of buttons that feature different styles for backgrounds, borders and hover options!
              </div>
            </div>
          </div>
          <div className="page-title-actions">
            <button
              type="button"
              data-toggle="tooltip"
              title
              data-placement="bottom"
              className="btn-shadow mr-3 btn btn-dark"
              data-original-title="Example Tooltip"
            >
              <i className="fa fa-star" />
            </button>
            <div className="d-inline-block dropdown">
              <button
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="btn-shadow dropdown-toggle btn btn-info"
              >
                <span className="btn-icon-wrapper pr-2 opacity-7">
                  <i className="fa fa-business-time fa-w-20" />
                </span>
                Buttons
              </button>
              <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="javascript:void(0);" className="nav-link">
                      <i className="nav-link-icon lnr-inbox" />
                      <span>Inbox</span>
                      <div className="ml-auto badge badge-pill badge-secondary">86</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0);" className="nav-link">
                      <i className="nav-link-icon lnr-book" />
                      <span>Book</span>
                      <div className="ml-auto badge badge-pill badge-danger">5</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0);" className="nav-link">
                      <i className="nav-link-icon lnr-picture" />
                      <span>Picture</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a disabled href="javascript:void(0);" className="nav-link disabled">
                      <i className="nav-link-icon lnr-file-empty" />
                      <span>File Disabled</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>{" "}
      <div className="row">
        <div className="col-lg-6">
          <div className="main-card mb-3 card">
            <div className="card-body">
              <h5 className="card-title">Solid</h5>
              <button className="mb-2 mr-2 btn btn-primary">Primary</button>
              <button className="mb-2 mr-2 btn btn-secondary">Secondary</button>
              <button className="mb-2 mr-2 btn btn-success">Success</button>
              <button className="mb-2 mr-2 btn btn-info">Info</button>
              <button className="mb-2 mr-2 btn btn-warning">Warning</button>
              <button className="mb-2 mr-2 btn btn-danger">Danger</button>
              <button className="mb-2 mr-2 btn btn-focus">Focus</button>
              <button className="mb-2 mr-2 btn btn-alternate">Alt</button>
              <button className="mb-2 mr-2 btn btn-light">Light</button>
              <button className="mb-2 mr-2 btn btn-dark">Dark</button>
              <button className="mb-2 mr-2 btn btn-link">link</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-card mb-3 card">
            <div className="card-body">
              <h5 className="card-title">Color Transition</h5>
              <button className="mb-2 mr-2 btn-transition btn btn-outline-primary">Primary</button>
              <button className="mb-2 mr-2 btn-transition btn btn-outline-secondary">Secondary</button>
              <button className="mb-2 mr-2 btn-transition btn btn-outline-success">Success</button>
              <button className="mb-2 mr-2 btn-transition btn btn-outline-info">Info</button>
              <button className="mb-2 mr-2 btn-transition btn btn-outline-warning">Warning</button>
              <button className="mb-2 mr-2 btn-transition btn btn-outline-danger">Danger</button>
              <button className="mb-2 mr-2 btn-transition btn btn-outline-focus">Focus</button>
              <button className="mb-2 mr-2 btn-transition btn btn-outline-alternate">Alt</button>
              <button className="mb-2 mr-2 btn-transition btn btn-outline-light">Light</button>
              <button className="mb-2 mr-2 btn-transition btn btn-outline-dark">Dark</button>
              <button className="mb-2 mr-2 btn-transition btn btn-outline-link">link</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-card mb-3 card">
            <div className="card-body">
              <h5 className="card-title">Color Transition No Borders</h5>
              <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-primary">Primary</button>
              <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-secondary">Secondary</button>
              <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-success">Success</button>
              <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-info">Info</button>
              <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-warning">Warning</button>
              <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-danger">Danger</button>
              <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-focus">Focus</button>
              <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-alternate">Alt</button>
              <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-light">Light</button>
              <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-dark">Dark</button>
              <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-link">link</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-card mb-3 card">
            <div className="card-body">
              <h5 className="card-title">Active State</h5>
              <button className="mb-2 mr-2 btn btn-primary active">Primary</button>
              <button className="mb-2 mr-2 btn btn-secondary active">Secondary</button>
              <button className="mb-2 mr-2 btn btn-success active">Success</button>
              <button className="mb-2 mr-2 btn btn-info active">Info</button>
              <button className="mb-2 mr-2 btn btn-warning active">Warning</button>
              <button className="mb-2 mr-2 btn btn-danger active">Danger</button>
              <button className="mb-2 mr-2 btn btn-focus active">Focus</button>
              <button className="mb-2 mr-2 btn btn-alternate active">Alt</button>
              <button className="mb-2 mr-2 btn btn-light active">Light</button>
              <button className="mb-2 mr-2 btn btn-dark active">Dark</button>
              <button className="mb-2 mr-2 btn btn-link active">link</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-card mb-3 card">
            <div className="card-body">
              <h5 className="card-title">Disabled State</h5>
              <button disabled className="mb-2 mr-2 btn btn-primary disabled">
                Primary
              </button>
              <button disabled className="mb-2 mr-2 btn btn-secondary disabled">
                Secondary
              </button>
              <button disabled className="mb-2 mr-2 btn btn-success disabled">
                Success
              </button>
              <button disabled className="mb-2 mr-2 btn btn-info disabled">
                Info
              </button>
              <button disabled className="mb-2 mr-2 btn btn-warning disabled">
                Warning
              </button>
              <button disabled className="mb-2 mr-2 btn btn-danger disabled">
                Danger
              </button>
              <button disabled className="mb-2 mr-2 btn btn-focus disabled">
                Focus
              </button>
              <button disabled className="mb-2 mr-2 btn btn-alternate disabled">
                Alt
              </button>
              <button disabled className="mb-2 mr-2 btn btn-light disabled">
                Light
              </button>
              <button disabled className="mb-2 mr-2 btn btn-dark disabled">
                Dark
              </button>
              <button disabled className="mb-2 mr-2 btn btn-link disabled">
                link
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-card mb-3 card">
            <div className="card-body">
              <h5 className="card-title">Block Level</h5>
              <button className="mb-2 mr-2 btn btn-primary btn-lg btn-block">Block Large</button>
              <button className="mb-2 mr-2 btn btn-primary btn-block">Block Normal</button>
              <button className="mb-2 mr-2 btn btn-primary btn-sm btn-block">Block Small</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="main-card mb-3 card">
            <div className="card-body">
              <h5 className="card-title">Checkbox Buttons</h5>
              <div className="text-center">
                <div role="group" className="btn-group-sm btn-group btn-group-toggle" data-toggle="buttons">
                  <button type="button" className="btn btn-primary">
                    One
                  </button>
                  <button type="button" className="btn btn-primary">
                    Two
                  </button>
                  <button type="button" className="btn btn-primary">
                    Three
                  </button>
                </div>
                <div className="divider"></div>
                <div role="group" className="btn-group" data-toggle="buttons">
                  <button type="button" className="btn btn-danger">
                    One
                  </button>
                  <button type="button" className="btn btn-danger">
                    Two
                  </button>
                  <button type="button" className="btn btn-danger">
                    Three
                  </button>
                </div>
                <div className="divider"></div>
                <div role="group" className="btn-group-lg btn-group btn-group-toggle" data-toggle="buttons">
                  <button type="button" className="btn btn-alternate">
                    One
                  </button>
                  <button type="button" className="btn btn-alternate">
                    Two
                  </button>
                  <button type="button" className="btn btn-alternate">
                    Three
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-card mb-3 card">
            <div className="card-body">
              <h5 className="card-title">Radio Buttons</h5>
              <div className="text-center">
                <div role="group" className="btn-group-sm btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-primary">
                    <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />
                    One
                  </label>
                  <label className="btn btn-primary">
                    <input type="radio" name="options" id="option2" autoComplete="off" />
                    Two
                  </label>
                  <label className="btn btn-primary">
                    <input type="radio" name="options" id="option3" autoComplete="off" />
                    Three
                  </label>
                </div>
                <div className="divider"></div>
                <div role="group" className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-warning">
                    <input type="radio" name="options" id="option4" autoComplete="off" />
                    One
                  </label>
                  <label className="btn btn-warning">
                    <input type="radio" name="options" id="option5" autoComplete="off" />
                    Two
                  </label>
                  <label className="btn btn-warning">
                    <input type="radio" name="options" id="option6" autoComplete="off" />
                    Three
                  </label>
                </div>
                <div className="divider"></div>
                <div role="group" className="btn-group-lg btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-focus">
                    <input type="radio" name="options" id="option7" autoComplete="off" />
                    One
                  </label>
                  <label className="btn btn-focus">
                    <input type="radio" name="options" id="option8" autoComplete="off" />
                    Two
                  </label>
                  <label className="btn btn-focus">
                    <input type="radio" name="options" id="option9" autoComplete="off" />
                    Three
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
