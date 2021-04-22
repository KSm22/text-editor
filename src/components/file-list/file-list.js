import React, { Component } from "react";
import { connect } from "react-redux";

import FileItem from "../file-item/file-item";

class FileList extends Component{
    render() {

        const { files } = this.props;

        return (
            <ul className="file-list">
                {
                    files.map((file) => {
                        return (
                            <li key={ file.id }><FileItem file={ file } /></li>
                        )
                    })
                }
            </ul>
        );
    }
};

const mapStateProps = ({ files }) => {
    return { files };
};

export default connect(mapStateProps)(FileList);
