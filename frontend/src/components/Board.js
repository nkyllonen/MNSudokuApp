// import { Button } from 'bootstrap'
import React, { Component } from 'react'
import { Table,Button } from 'reactstrap'

export default class Board extends Component {
    render() {
        const rows = [];
        for (let y=0; y<3; y++){
            const cols = [];
            for (let x=0; x<3; x++) {
                cols.push(<Button>#</Button>);
            }

            rows.push(<tr>{ cols }</tr>);
        }

        return (
            <div>
                <h2>BOARD</h2>

                <Table bordered>
                    <tbody>
                        { rows }
                    </tbody>
                </Table>
            </div>
        )
    }
}
