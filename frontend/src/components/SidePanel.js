import React, { Component } from 'react'
import { Button, ButtonGroup } from "reactstrap";

export default class SidePanel extends Component {
    render() {
        return (
            <div>
                <h2>SIDE PANEL</h2>
                <ButtonGroup>
                    <Button color="success">Pencil Mark</Button>
                    <Button>Clear</Button>
                </ButtonGroup>
            </div>
        )
    }
}
