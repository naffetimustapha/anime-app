import toast from 'react-hot-toast'
import Axios from './Axios'

const uploadImageservices=async(file,setLoading)=>{
    try {
        setLoading(true);
        const {data} = await Axios.post('/upload',file)
        setLoading(false)
        toast.success('File Uploaded Successfully')
        return data
    } catch (error) {
        setLoading(false)
        toast.error('Something Went Wrong')
    }
}
 
export {uploadImageservices}