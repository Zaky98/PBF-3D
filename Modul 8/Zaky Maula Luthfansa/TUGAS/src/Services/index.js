import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

const getNewsBlog = () => GetAPI('Mahasiswa?_sort=id&_order=desc');
const postNewsBlog = (KirimDataMahasiswa) => PostAPI('Mahasiswa', KirimDataMahasiswa);
const deleteNewsBlog = (HapusDataMahasiswa) => DeleteAPI('Mahasiswa', HapusDataMahasiswa);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;