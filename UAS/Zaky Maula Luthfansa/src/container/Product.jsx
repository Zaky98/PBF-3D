import React, { Component } from "react";
import '../Product.css';
// import API from "../../services";
import firebase from "firebase";

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listBarang: []
        }
    }

    ambilDataDariServerAPI = () => {                // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        })
    }

    simpanDataKeServerAPI = () => {
        firebase.database()
            .ref("/")
            .set(this.state);
    }

    componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()  // ambil data dari server API lokal
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.simpanDataKeServerAPI();
        }
    }

    handleHapusArtikel = (idArtikel) => {        // fungsi yang meng-handle button action hapus data
        const { listBarang } = this.state;
        const newState = listBarang.filter(data => {
            return data.uid !== idArtikel;
        })
        this.setState({ listBarang: newState })
    }

    handleTombolSimpan = (event) => {            // fungsi untuk meng-handle tombol simpan
        let title = this.refs.namaBarang.value;
        let body = this.refs.spesifikasiBarang.value;
        let price = this.refs.hargaBarang.value;
        let stock = this.refs.stokBarang.value;
        let uid = this.refs.uid.value;
        var email = firebase.auth().currentUser.email;

        if (uid) {
            const { listBarang } = this.state;
            const indeksArtikel = listBarang.findIndex(data => {
                return data.uid === uid;
            });

            listBarang[indeksArtikel].title = title;
            listBarang[indeksArtikel].body = body;
            listBarang[indeksArtikel].price = price;
            listBarang[indeksArtikel].stock = stock;
            listBarang[indeksArtikel].email = email;
            this.setState({ listBarang });
        } else if (title && body && price && stock && email) {
            const uid = new Date().getTime().toString();
            const { listBarang } = this.state;
            listBarang.push({ uid, title, body, price, stock, email });
            this.setState({ listBarang });
        }

        this.refs.namaBarang.value = "";
        this.refs.spesifikasiBarang.value = "";
        this.refs.hargaBarang.value = "";
        this.refs.stokBarang.value = "";
        this.refs.uid.value = "";
    }

    render() {
        return (
            <div className="post-artikel">
                <div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nama Barang</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" ref="namaBarang" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Spesifikasi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" ref="spesifikasiBarang"></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Harga</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="price" name="price" ref="hargaBarang" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Stok</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="stock" name="stock" ref="stokBarang" />
                        </div>
                    </div>
                    <br></br>
                    <input type="hidden" name="uid" ref="uid" />
                    <button type="submit" class="btn btn-primary float-right" onClick={this.handleTombolSimpan}>Simpan</button>
                    <br></br>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default Product;