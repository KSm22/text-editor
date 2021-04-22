import React from "react";

import FileContent from "../file-content/file-content";
import FileList from "../file-list/file-list";
import SearchPanel from "../search-panel/search-panel";
import DownloadPanel from "../download-file/download-file";

const Editor = () => {
    return (
        <section className="editor">
            <FileContent />
            <div className="user-nav">
                <FileList/>
                <div className="user-nav__inner">
                    <SearchPanel/>
                    <DownloadPanel/>
                </div>
            </div>
        </section>
    );
};

export default Editor;
