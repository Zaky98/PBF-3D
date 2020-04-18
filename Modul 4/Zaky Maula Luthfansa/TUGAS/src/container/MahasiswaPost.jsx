import React, {Component} from "react";
import './MahasiswaPost.css';
import Post from "../component/Mahasiswa/Mahasiswa";

class BlogPost extends Component{

    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            NIM: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa?_sort=id&_order=desc')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listMahasiswa: jsonHasilAmbilDariAPI
            })          
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, {method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch(`http://localhost:3001/mahasiswa/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
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
                        <label htmlFor="title" className="col-sm-2 col-from-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="nama" onChange={this.handleTambahMahasiswa}/>
                        </div>
                </div>
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">NIM</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="NIM" rows="3" 
                            onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                </div>
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="alamat" rows="3" 
                            onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                </div>
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">No. Hp</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="hp" rows="3" 
                            nChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                </div>
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">Angkatan</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="angkatan" rows="3" 
                            onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                </div>
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">status</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="status" rows="3" 
                            onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
            </div>
            <h2>Daftar Mahasiswa</h2> 
            {
                this.state.listMahasiswa.map(mahasiswa => {
                    return <Post key={mahasiswa.NIM} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} 
                    NIM={mahasiswa.NIM} status={mahasiswa.status} nama={mahasiswa.nama} alamat={mahasiswa.alamat} 
                    idMahasiswa={mahasiswa.id} hapusMahasiswa={this.handleHapusMahasiswa}/>
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