import React from "react";

const PostUsers = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.namaBarang} (stok : {props.stokBarang})</div>
                <p className="isi-artikel">Spesifikasi: </p>
                <p className="isi-artikel">{props.spesifikasiBarang}</p>
                <p className="isi-artikel">Harga : </p>
                <p className="isi-artikel">Rp {props.hargaBarang}</p>
                <button className="btn btn-sm btn-primary" 
                onClick={props.addtochart.bind(props.idBarang)}>
                Add to chart</button>
            </div>
        </div>
    )
}

export default PostUsers;