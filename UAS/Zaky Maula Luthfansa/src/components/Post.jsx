import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.namaBarang} (stok : {props.stokBarang})</div>
                <p className="isi-artikel"><b>Spesifikasi :</b></p>
                <p className="isi-artikel">{props.spesifikasiBarang}</p>
                <p className="isi-artikel"><b>Harga : </b></p>
                <p className="isi-artikel">Rp {props.hargaBarang}</p>
                <button className="btn btn-sm btn-danger" 
                onClick={() => { if (window.confirm('Apakah anda yakin menghapus artikel ini?')) props.hapusArtikel(props.idBarang)}}>
                    Hapus</button>
            </div>
        </div>
    )
}

export default Post;