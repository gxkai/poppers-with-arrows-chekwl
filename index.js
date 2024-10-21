import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Popper from '@material-ui/core/Popper';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';


const StyledWindow = styled.div`
  flex-grow: 1;

  .inner-window {
    height: 400px;
    width: 800px;
    overflow: auto;

    .scroll {
      position: relative;
      width: 230%;
      height: 250%;
    }
  }
`;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;

  height: 500px;
  width: 500px;
  margin: auto;
  border: 1px solid black;

  .first-row {
    flex: 1;
    background-color: #1abc9c;
    display: flex;
    justify-content: space-between;
    align-items: center
  }

  .second-row {
    flex: 1;
    background-color: #2ecc71;
    display: flex;
    justify-content: space-around;
    align-items: center
  }

  .third-row {
    flex: 1;
    background-color: #3498db;
    display: flex;
    justify-content: space-evenly;
    align-items: center
  }

  .fourth-row {
    flex: 1;
    background-color: #9b59b6;
    display: flex;
    justify-content: center;
    align-items: center
  }

  .fifth-row {
    flex: 1;
    background-color: #c0392b;
    display: flex;
    justify-content: center;
    align-items: center
  }

`;

const StyledPopper = styled(Popper)`&&{
  
  z-index: 1;
  &[x-placement*="bottom"] .arrow{

    width: 0; 
    height: 0; 
    border-left: 1em solid transparent;
    border-right: 1em solid transparent;
    border-bottom: 1em solid #2c3e50;
    margin-top: -0.9em;
    
    &:before {
      border-width: '0 1em 1em 1em';
      border-color: 'transparent transparent white transparent';
    }
  }

  &[x-placement*="top"] .arrow{

    bottom: 0;
    width: 0; 
    height: 0; 
    border-left: 1em solid transparent;
    border-right: 1em solid transparent;
    border-top: 1em solid #2c3e50;
    margin-bottom: -0.9em;

    &:before {
      border-width: 1em 1em 0 1em;
      border-color: white transparent transparent transparent;
    }
  }

  &[x-placement*="right"] .arrow{

    left: 0;
    width: 0; 
    height: 0; 
    border-top: 1em solid transparent;
    border-bottom: 1em solid transparent;
    border-right: 1em solid #2c3e50;
    margin-left: -0.9em;

    &:before {
      border-width: 1em 1em 1em 0;
      border-color: transparent white transparent transparent;
    }
  }

  &[x-placement*="left"] .arrow{
    
    right: 0;
    width: 0; 
    height: 0; 
    border-top: 1em solid transparent;
    border-bottom: 1em solid transparent;
    border-left: 1em solid #2c3e50;
    margin-right: -0.9em;

    &:before {
      border-width: 1em 0 1em 1em;
      border-color: transparent transparent transparent white;
    }
  }

  .arrow {
    position: absolute;
    font-size: 7px;
    width: 3em;
    height: 3em;

    &:before {
      content: '""',
      margin: auto;
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
    }
  }

  .popper-content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2c3e50;
    color: white;
    height: 90px;
    width: 160px;
  }

}`;


class App extends Component {

  state = {
    anchorElement: null,
    arrowRef: null
  }

  handleAnchor = event => {
    this.setState({
      anchorElement: event.currentTarget
    })
  }

  handleArrowRef = node => {
    this.setState({
      arrowRef: node,
    });
  };

  render() {
    return (
      <StyledWindow>
        <div className="inner-window">
          <Grid
            className="scroll"
            container
            alignItems="center"
            justify="center"
          >
            <StyledRoot>

              {
                this.state.anchorElement &&
                <StyledPopper
                  placement="top"
                  open={true}
                  anchorEl={this.state.anchorElement}
                  modifiers={{
                    flip: {
                      enabled: true,
                    },
                    arrow: {
                      enabled: true,
                      element: this.state.arrowRef,
                    },
                    preventOverflow: {
                      enabled: "true",
                      boundariesElement: 'scrollParent'
                    },
                  }}
                >
                  {
                    true &&
                    <span className="arrow" ref={this.handleArrowRef} />
                  }
                  <div className={"popper-content"}>
                    <span>Popper time</span>
                  </div>
                </StyledPopper>
              }

              <div className={"first-row"}>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
              </div>

              <div className={"second-row"}>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
              </div>

              <div className={"third-row"}>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
              </div>

              <div className={"fourth-row"}>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
              </div>

              <div className={"fifth-row"}>
                <button onMouseOver={this.handleAnchor}>Anchor here</button>
              </div>

            </StyledRoot>
          </Grid>
        </div>
      </StyledWindow>
    );
  }
}

render(<App />, document.getElementById('root'));
