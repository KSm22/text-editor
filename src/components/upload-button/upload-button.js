import React, { Component } from "react";
import store from "../../store";
import {filesLoaded} from "../../actions";

let newFile = null;
export default class UploadButton extends Component{

    selectFileHandler = e => {

        let files = e.target.files;

        if (files === 0) return;

        const file = files[0];

        let reader = new FileReader();

        reader.onload = event => {

            const file = event.target.result;
            const lines = file.split(/\r\n|\n/);
            const content = lines.join('\n');

            newFile = {
                title: files[0].name,
                content: content
            };

            store.dispatch(filesLoaded(newFile));

            document.getElementById('file-content').innerText = content;
        };

        reader.readAsText(file);
    };

    render() {
        return (
            <div className="btn btn-upload">
                <label htmlFor="file">Выбрать файл</label>
                <input id="file" type="file" onChange={this.selectFileHandler}/>
            </div>
        );
    }
};


