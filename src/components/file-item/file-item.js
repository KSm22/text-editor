import React from "react";


const FileItem = ({ file }) => {
    const { title, content } = file;

    const onChoiceFile = () => {
        document.getElementById('file-content').innerText = content;
    };

    return (
      <button className="btn file-list__item" onClick={onChoiceFile}>{ title }</button>
    )
};

export default FileItem;
