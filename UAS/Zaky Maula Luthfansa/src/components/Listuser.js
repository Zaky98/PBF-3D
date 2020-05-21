import React, { Component } from "react";
import '../Product.css';
// import API from "../../services";
import firebase from "firebase";
import PostUsers from "./Postuser";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listKeranjang: [],
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

    handleTombolSimpan = (event) => {            // fungsi untuk meng-handle tombol simpan
        var title = event.title;
        var body = event.body;
        var price = event.price;
        var stock = event.stock;
        var uid = event.uid;
        var email = firebase.auth().currentUser.email;
        console.log(event);
        
        if (title && body && price && stock && email) {
            const uid = new Date().getTime().toString();
            const { listKeranjang } = this.state;
            listKeranjang.push({uid, title, body, price, stock, email});
            this.setState({listKeranjang});
        }
    }

    render() {
        var emailku = firebase.auth().currentUser.email;
        return(
            <div className="post-artikel">
                {
                    this.state.listBarang.map(barang => {  
                        return <PostUsers key={barang.uid} emailUser={barang.email} namaBarang={barang.title} spesifikasiBarang={barang.body} hargaBarang={barang.price} stokBarang={barang.stock} idBarang={barang.uid} addtochart={() => this.handleTombolSimpan(barang)}/>   
                    })
                }  
            </div>
        )
    }
}

export default List;