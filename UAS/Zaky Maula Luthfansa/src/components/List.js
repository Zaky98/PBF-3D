import React, {Component} from "react";
import '../Product.css';
import Post from "./Post";
// import API from "../../services";
import firebase from "firebase";

class List extends Component{
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

    handleHapusArtikel = (idBarang) => {        // fungsi yang meng-handle button action hapus data
        const {listBarang} = this.state;
        const newState = listBarang.filter(data => {
            return data.uid !== idBarang;
        })
        this.setState({listBarang: newState})
    }

    render() {
        return(
            <div className="post-artikel">
                {
                    this.state.listBarang.map(barang => {  
                        return <Post key={barang.uid} namaBarang={barang.title} spesifikasiBarang={barang.body} hargaBarang={barang.price} stokBarang={barang.stock} idBarang={barang.uid} hapusArtikel={this.handleHapusArtikel}/>   
                    })
                }
            </div>
        )
    }
}

export default List;