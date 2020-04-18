import React, {Component} from "react";
import './BlogPost.css';
import Post from "../component/BlogPost/Post";

class BlogPost extends Component{

    state = {
        listArtikel: [],
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/posts?_sort=id&_order=desc')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listArtikel: jsonHasilAmbilDariAPI
            })          
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/posts/${data}`, {method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch(`http://localhost:3001/posts`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render(){
        return(  
            <div className="post-artikel">
                <div className="form pb-2 border bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-from-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel}/>
                        </div>
                </div>
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
            </div>
            <h2>Daftar Artikel</h2> 
            {
                this.state.listArtikel.map(artikel => {
                    return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                })
            }
            {/* <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/> */}
        </div>   
        )
    }
}

export default BlogPost;

// <p>Blog Artikel</p>
            // <div class="post-artikel">
            //     <h2>Daftar Artikel</h2>
            //     <div class="artikel">
            //     <div class="gambar-artikel">
            //         <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel"/>
            //     </div>
            //     <div class="konten-artikel">
            //         <div class="judul-artikel">Judul Artikel</div>
            //         <p class="isi-artikel">Isi Artikel</p>
            //     </div>  
            // </div>       
            // </div> 