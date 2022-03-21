import React from "react"
import HandleModal from "./handleModal";
import "../CSS/post.css"


export const Post = ({ title, id, userid, atualizarItem }) => {

    function onClose(novoTitulo) {
        atualizarItem(id, novoTitulo);
    }



    return (
        <div>
            <HandleModal id={id} texto={title} onClose={onClose} />
            TITLE :
            {title}
            <br />
            ID :
            {id}
            <br />
            UserID :
            {userid}
            <br />
            ______________________________
        </div>
    )

}

export default Post;

