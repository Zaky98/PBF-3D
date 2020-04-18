import React from "react";
import "./Post.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src={require('../img/' + props.gambar)} alt="Gambar Produk" />
            </div>
            <div className="konten-artikel">
                <p className="isi-artikel">ID  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {props.id} </p>
                <p className="isi-artikel">Nama : {props.nama}</p>
                <p className="isi-artikel">Harga : {props.harga}</p>
                <p className="isi-artikel">Stok &nbsp;&nbsp;&nbsp;: {props.stok}</p>
                <br></br>
                <button class="btn btn-primary" onClick={props.tambahBarang.bind(this, props.id)}>Beli</button>
            </div>
        </div>
    )
}

export default Post;