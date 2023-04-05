import {Toaster} from 'react-hot-toast'

export default function toastContainer(){
    return(
<Toaster position='bottom-left'
reverseOrder={false}
gutter={8}
toastOptions={{
    duration:2000,}}/>
    )
}