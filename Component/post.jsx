import React from "react";
import HandleModal from "./handleModal";


export const Post = ({ title, id, userid, atualizarItem, resetItem }) => {

    function onClose(novoTitulo) {
        if (novoTitulo === "") {
            alert("Titulo é Obrigatório")
            alert("Somente letras no titulo")
        } else {
            atualizarItem(id, novoTitulo);
        }
    }



    return (
        <div>
            <HandleModal id={id} texto={title} onClose={onClose} />
            Title :
            {title}
            <br />
            ID :
            {id}
            <br />
            userId :
            {userid}
            <br />
        </div>
    )

}

export default Post;

